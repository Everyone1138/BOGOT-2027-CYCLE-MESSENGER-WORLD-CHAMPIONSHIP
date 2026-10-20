<?php
require_once __DIR__ . '/config.php';

function json_response($ok, $message, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => $ok, 'message' => $message]);
    exit;
}

function clean_value($value) {
    $value = is_array($value) ? implode(', ', $value) : $value;
    $value = trim((string)$value);
    $value = str_replace(["\r", "\n"], ' ', $value);
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function require_fields($fields) {
    foreach ($fields as $field) {
        if (!isset($_POST[$field]) || trim((string)$_POST[$field]) === '') {
            json_response(false, 'Please fill in all required fields.', 400);
        }
    }
}

function stop_spam() {
    // Honeypot: real users never see/fill this field.
    if (!empty($_POST['website'])) {
        json_response(true, 'Submission received.');
    }
}

function build_message($title, $labels) {
    $lines = [];
    $lines[] = $title;
    $lines[] = str_repeat('=', strlen($title));
    $lines[] = '';
    foreach ($labels as $field => $label) {
        $value = isset($_POST[$field]) ? clean_value($_POST[$field]) : '';
        $lines[] = $label . ': ' . ($value !== '' ? $value : '—');
    }
    $lines[] = '';
    $lines[] = 'Submitted: ' . date('Y-m-d H:i:s');
    $lines[] = 'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
    return implode("\n", $lines);
}

function send_participant_receipt($type, $email, $name) {
    global $FROM_EMAIL, $SITE_NAME, $RIDER_PAYMENT_URL, $VOLUNTEER_PAYMENT_URL, $SPONSOR_PAYMENT_URL;
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) return false;
    $payment = ['Rider registration' => $RIDER_PAYMENT_URL,
                'Volunteer signup' => $VOLUNTEER_PAYMENT_URL,
                'Sponsor application' => $SPONSOR_PAYMENT_URL][$type] ?? '';
    $is_spanish = strtolower(trim((string)($_POST['formLanguage'] ?? 'en'))) === 'es';
    $clean_name = trim(preg_replace('/[\r\n]+/', ' ', (string)$name));
    $subject = $is_spanish ? 'Registro recibido — CMWC Bogotá 2027' : 'Registration received — CMWC Bogotá 2027';
    $lines = $is_spanish ? [
        'Hola ' . $clean_name . ',', '',
        'Recibimos tu registro para el Campeonato Mundial de Bicimensajería Bogotá 2027.',
        'Tipo de registro: ' . $type . '.',
        'Estado: pendiente de revisión / pago cuando corresponda.', ''
    ] : [
        'Hello ' . $clean_name . ',', '',
        'We received your registration for CMWC Bogotá 2027.',
        'Registration type: ' . $type . '.',
        'Status: pending review / payment where applicable.', ''
    ];
    if ($payment && filter_var($payment, FILTER_VALIDATE_URL) && parse_url($payment, PHP_URL_SCHEME) === 'https') {
        $lines[] = $is_spanish ? 'Enlace para el pago:' : 'Secure payment link:';
        $lines[] = $payment;
        $lines[] = $is_spanish ? 'El registro no se confirma automáticamente al abrir o pagar este enlace.' : 'Opening or paying via this link does not automatically confirm registration.';
    } elseif ($type === 'Rider registration') {
        $lines[] = $is_spanish ? 'Las instrucciones de pago se enviarán más adelante. No necesitas pagar todavía.' : 'Payment instructions will follow. No payment is required yet.';
    } else {
        $lines[] = $is_spanish ? 'Nuestro equipo se pondrá en contacto contigo con los próximos pasos.' : 'Our team will contact you about next steps.';
    }
    $lines[] = '';
    $lines[] = $is_spanish ? 'Equipo CMWC Bogotá 2027' : 'CMWC Bogotá 2027 Team';
    $headers = ['From: CMWC Bogotá 2027 <' . $FROM_EMAIL . '>',
                'Reply-To: ' . $FROM_EMAIL,
                'Content-Type: text/plain; charset=UTF-8'];
    return @mail($email, $subject, implode("\n", $lines), implode("\r\n", $headers));
}

function send_submission($type, $subject, $message, $csv_file, $labels, $recipient = null) {
    global $TO_EMAIL, $SITE_NAME, $SAVE_CSV, $FROM_EMAIL;
    $mail_to = $recipient ?: $TO_EMAIL;
    $reply_to = '';
    $participant_name = '';
    foreach (['email', 'volunteerEmail', 'sponsorEmail', 'subscriberEmail', 'contactEmail'] as $field) {
        if (!empty($_POST[$field]) && filter_var($_POST[$field], FILTER_VALIDATE_EMAIL)) {
            $reply_to = $_POST[$field]; break;
        }
    }
    foreach (['name', 'volunteerName', 'sponsorContact', 'subscriberName', 'contactName'] as $field) {
        if (!empty($_POST[$field])) { $participant_name = $_POST[$field]; break; }
    }
    // Persist the record first. Mail delivery must never make the browser retry a saved signup.
    if ($SAVE_CSV && !save_csv($csv_file, $labels)) {
        json_response(false, 'Unable to save the registration on the server. Please contact the team.', 500);
    }
    $headers = ['From: ' . $SITE_NAME . ' <' . $FROM_EMAIL . '>',
                'Content-Type: text/plain; charset=UTF-8'];
    if ($reply_to) $headers[] = 'Reply-To: ' . $reply_to;
    $admin_ok = @mail($mail_to, '[' . $SITE_NAME . '] ' . $subject, $message, implode("\r\n", $headers));
    $receipt_ok = true;
    if ($reply_to && in_array($type, ['Rider registration', 'Volunteer signup', 'Sponsor application'], true)) {
        $receipt_ok = send_participant_receipt($type, $reply_to, $participant_name);
    }
    // Explicitly report saved even if SMTP/mail() did not accept the message.
    $info = (!$admin_ok || !$receipt_ok)
      ? 'Registration saved. One or more emails could not be sent; the team will follow up.'
      : 'Registration saved and email notification sent.';
    json_response(true, $info);
}

function save_csv($filename, $labels) {
    $dir = __DIR__ . '/data';
    if (!is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }

    $path = $dir . '/' . $filename;
    $desired_header = array_merge(['submitted_at', 'ip_address'], array_values($labels));
    $headers = $desired_header;
    $existing_rows = [];

    if (file_exists($path)) {
        $read = @fopen($path, 'r');
        if ($read) {
            $existing_header = fgetcsv($read) ?: [];
            $headers = $existing_header ?: $desired_header;

            // Preserve old CSV data while adding any new columns, like dietary needs.
            foreach ($desired_header as $column) {
                if (!in_array($column, $headers, true)) {
                    $headers[] = $column;
                }
            }

            while (($row = fgetcsv($read)) !== false) {
                while (count($row) < count($headers)) {
                    $row[] = '';
                }
                $existing_rows[] = $row;
            }
            fclose($read);

            if ($headers !== $existing_header) {
                $rewrite = @fopen($path, 'w');
                if ($rewrite) {
                    fputcsv($rewrite, $headers);
                    foreach ($existing_rows as $row) {
                        fputcsv($rewrite, $row);
                    }
                    fclose($rewrite);
                }
            }
        }
    }

    $is_new = !file_exists($path);
    $fp = @fopen($path, 'a');
    if (!$fp) return false;

    if ($is_new) {
        fputcsv($fp, $headers);
    }

    $row_by_header = array_fill_keys($headers, '');
    $row_by_header['submitted_at'] = date('Y-m-d H:i:s');
    $row_by_header['ip_address'] = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

    foreach ($labels as $field => $label) {
        if (in_array($label, $headers, true)) {
            $row_by_header[$label] = isset($_POST[$field]) ? clean_value($_POST[$field]) : '';
        }
    }

    $row = [];
    foreach ($headers as $header) {
        $row[] = $row_by_header[$header] ?? '';
    }

    fputcsv($fp, $row);
    fclose($fp);
    return true;
}
?>

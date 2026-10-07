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

function send_submission($type, $subject, $message, $csv_file, $labels, $recipient = null) {
    global $TO_EMAIL, $SITE_NAME, $SAVE_CSV, $FROM_EMAIL;

    $mail_to = $recipient ?: $TO_EMAIL;

    $server_name = $_SERVER['SERVER_NAME'] ?? 'localhost';
    $from = isset($FROM_EMAIL) && filter_var($FROM_EMAIL, FILTER_VALIDATE_EMAIL)
        ? $FROM_EMAIL
        : 'no-reply@' . preg_replace('/[^a-zA-Z0-9.-]/', '', $server_name);
    $reply_to = '';
    foreach (['email', 'volunteerEmail', 'sponsorEmail', 'subscriberEmail', 'contactEmail'] as $email_field) {
        if (!empty($_POST[$email_field]) && filter_var($_POST[$email_field], FILTER_VALIDATE_EMAIL)) {
            $reply_to = $_POST[$email_field];
            break;
        }
    }

    $headers = [];
    $headers[] = 'From: ' . $SITE_NAME . ' <' . $from . '>';
    if ($reply_to) {
        $headers[] = 'Reply-To: ' . $reply_to;
    }
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';

    $mail_ok = @mail($mail_to, '[' . $SITE_NAME . '] ' . $subject, $message, implode("\r\n", $headers));

    if ($SAVE_CSV) {
        save_csv($csv_file, $labels);
    }

    if (!$mail_ok) {
        // CSV is still saved if enabled. This helps testing on hosts where mail is restricted.
        json_response(false, 'The form was saved, but the email could not be sent. Check one.com mail/PHP settings.', 500);
    }

    json_response(true, $type . ' submission sent successfully.');
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
    if (!$fp) return;

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
}
?>

<?php
header('X-Robots-Tag: noindex, nofollow, noarchive');
// Store payment tracking separately so historic signup CSVs remain untouched.
function payment_record_key($row, $csvIndex) {
    return hash('sha256', (string)$csvIndex . '|' . json_encode($row, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
}
function payment_statuses() {
    $path = __DIR__ . '/../forms/data/payment-statuses.json';
    if (!is_file($path)) return [];
    $json = @file_get_contents($path);
    $decoded = json_decode($json ?: '{}', true);
    return is_array($decoded) ? $decoded : [];
}
function payment_write_status($key, $status) {
    if (!preg_match('/^[0-9a-f]{64}$/', $key)) return false;
    if (!in_array($status, ['pending', 'paid', 'confirmed'], true)) return false;
    $path = __DIR__ . '/../forms/data/payment-statuses.json';
    $fp = @fopen($path, 'c+');
    if (!$fp || !flock($fp, LOCK_EX)) { if ($fp) fclose($fp); return false; }
    rewind($fp);
    $existing = json_decode(stream_get_contents($fp) ?: '{}', true);
    if (!is_array($existing)) $existing = [];
    $existing[$key] = ['status' => $status, 'updated_at' => date('c')];
    $payload = json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    rewind($fp);
    $ok = ftruncate($fp, 0) && fwrite($fp, $payload) === strlen($payload) && fflush($fp);
    flock($fp, LOCK_UN);
    fclose($fp);
    return $ok;
}
?>
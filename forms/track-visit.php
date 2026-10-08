<?php
require_once __DIR__ . '/config.php';

// Lightweight site traffic logger for the admin dashboard.
// It stores only basic pageview data and a hashed IP, not raw IP addresses.

$dataDir = __DIR__ . '/data';
if (!is_dir($dataDir)) {
    mkdir($dataDir, 0755, true);
}

function clean_traffic_value($value, $max = 500) {
    $value = trim((string)$value);
    $value = str_replace(["\r", "\n"], ' ', $value);
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $max, 'UTF-8');
    }
    return substr($value, 0, $max);
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$source = $method === 'POST' ? $_POST : $_GET;

$path = clean_traffic_value($source['path'] ?? '', 500);
$title = clean_traffic_value($source['title'] ?? '', 200);
$referrer = clean_traffic_value($source['referrer'] ?? ($_SERVER['HTTP_REFERER'] ?? ''), 500);
$sessionId = clean_traffic_value($source['session_id'] ?? '', 120);
$userAgent = clean_traffic_value($_SERVER['HTTP_USER_AGENT'] ?? '', 500);
$ip = $_SERVER['REMOTE_ADDR'] ?? '';
$ipHash = $ip ? hash('sha256', $ip . '|cmwc2027bogota') : '';

// Ignore accidental admin/form tracking if this endpoint is reused later.
if ($path === '' || str_starts_with($path, '/admin') || str_starts_with($path, '/forms')) {
    http_response_code(204);
    exit;
}

$csvFile = $dataDir . '/site-traffic.csv';
$headers = ['timestamp', 'date', 'path', 'title', 'referrer', 'session_id', 'ip_hash', 'user_agent'];
$isNew = !file_exists($csvFile) || filesize($csvFile) === 0;

$fp = fopen($csvFile, 'a');
if ($fp) {
    if (flock($fp, LOCK_EX)) {
        if ($isNew) {
            fputcsv($fp, $headers);
        }
        $timestamp = date('c');
        $date = date('Y-m-d');
        fputcsv($fp, [$timestamp, $date, $path, $title, $referrer, $sessionId, $ipHash, $userAgent]);
        flock($fp, LOCK_UN);
    }
    fclose($fp);
}

http_response_code(204);
exit;
?>

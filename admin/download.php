<?php
require_once __DIR__ . '/auth.php';
require_admin_login();

$csvFiles = [
    'riders' => 'rider-signups.csv',
    'volunteers' => 'volunteer-signups.csv',
    'sponsors' => 'sponsor-applications.csv',
    'traffic' => 'site-traffic.csv',
    'contacts' => 'contact-messages.csv',
    'subscribers' => 'subscribers.csv',
];

$type = $_GET['type'] ?? 'riders';
if (!isset($csvFiles[$type])) {
    http_response_code(404);
    echo 'Unknown file.';
    exit;
}

$filename = $csvFiles[$type];
$path = __DIR__ . '/../forms/data/' . $filename;
if (!file_exists($path)) {
    header('Content-Type: text/plain; charset=utf-8');
    echo 'No submissions yet.';
    exit;
}

header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename="' . $filename . '"');
header('Content-Length: ' . filesize($path));
readfile($path);
exit;
?>

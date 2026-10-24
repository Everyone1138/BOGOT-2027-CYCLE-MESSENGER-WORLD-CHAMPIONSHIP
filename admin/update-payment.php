<?php
header('X-Robots-Tag: noindex, nofollow, noarchive');
require_once __DIR__ . '/auth.php';
require_admin_login();
require_once __DIR__ . '/payments.php';
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit('Method not allowed'); }
if (empty($_POST['csrf']) || empty($_SESSION['payment_csrf']) || !hash_equals($_SESSION['payment_csrf'], (string)$_POST['csrf'])) {
    http_response_code(403); exit('Invalid security token');
}
$key = (string)($_POST['record'] ?? '');
$status = (string)($_POST['status'] ?? '');
// Ensure the record refers to an existing rider; never accept arbitrary hashes.
$path = __DIR__ . '/../forms/data/rider-signups.csv';
$valid = false;
if (($fp = @fopen($path, 'r')) !== false) {
    fgetcsv($fp); $index = 0;
    while (($row = fgetcsv($fp)) !== false) {
        $index++;
        if (hash_equals(payment_record_key($row, $index), $key)) { $valid = true; break; }
    }
    fclose($fp);
}
$ok = $valid && payment_write_status($key, $status);
header('Location: index.php?type=riders&' . ($ok ? 'saved=1' : 'error=1'), true, 303);
exit;
?>
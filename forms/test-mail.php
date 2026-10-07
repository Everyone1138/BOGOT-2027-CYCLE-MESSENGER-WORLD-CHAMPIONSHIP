<?php
require_once __DIR__ . '/config.php';
header('Content-Type: text/plain; charset=utf-8');
$server_name = $_SERVER['SERVER_NAME'] ?? 'localhost';
$from = isset($FROM_EMAIL) && filter_var($FROM_EMAIL, FILTER_VALIDATE_EMAIL)
    ? $FROM_EMAIL
    : 'no-reply@' . preg_replace('/[^a-zA-Z0-9.-]/', '', $server_name);
$headers = "From: $SITE_NAME <$from>\r\nContent-Type: text/plain; charset=UTF-8";
$body = 'This is a test email from your one.com PHP form setup.' . "\n\n" . 'Site: ' . ($SITE_URL ?? 'https://cmwc2027bogota.com');
$ok = @mail($SIGNUP_EMAIL, '[' . $SITE_NAME . '] Test email', $body, $headers);
echo $ok ? "Test email sent to $SIGNUP_EMAIL" : "Test email failed. Check one.com PHP mail settings.";
?>

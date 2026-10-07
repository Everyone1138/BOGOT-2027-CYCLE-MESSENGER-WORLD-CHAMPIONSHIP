<?php
require_once __DIR__ . '/config.php';

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

function admin_is_logged_in() {
    global $ADMIN_SESSION_KEY;
    return !empty($_SESSION[$ADMIN_SESSION_KEY]);
}

function require_admin_login() {
    if (!admin_is_logged_in()) {
        header('Location: login.php');
        exit;
    }
}

function h($value) {
    return htmlspecialchars((string)$value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}
?>

<?php
require_once __DIR__ . '/form-handler.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(false, 'Invalid request method.', 405);
}

stop_spam();
require_fields(['subscriberEmail']);

if (!filter_var($_POST['subscriberEmail'], FILTER_VALIDATE_EMAIL)) {
    json_response(false, 'Please enter a valid email address.', 400);
}

$labels = [
    'subscriberEmail' => 'Subscriber Email',
    'subscriberName' => 'Subscriber Name'
];

$message = build_message('New Newsletter Subscriber', $labels);
send_submission('Subscriber', 'New Newsletter Subscriber', $message, 'subscribers.csv', $labels, $SIGNUP_EMAIL);
?>

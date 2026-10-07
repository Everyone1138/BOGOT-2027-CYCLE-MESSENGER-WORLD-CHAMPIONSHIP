<?php
require_once __DIR__ . '/form-handler.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(false, 'Invalid request method.', 405);
}

stop_spam();
require_fields(['contactName', 'contactEmail', 'contactTopic', 'contactMessage']);

if (!filter_var($_POST['contactEmail'], FILTER_VALIDATE_EMAIL)) {
    json_response(false, 'Please enter a valid email address.', 400);
}

$labels = [
    'contactName' => 'Full Name',
    'contactEmail' => 'Email',
    'contactPhone' => 'Phone / WhatsApp',
    'contactTopic' => 'Topic',
    'contactMessage' => 'Message'
];

$topic = isset($_POST['contactTopic']) ? clean_value($_POST['contactTopic']) : 'Contact';
$message = build_message('New Contact Message', $labels);
send_submission('Contact message', 'New Contact Message - ' . $topic, $message, 'contact-messages.csv', $labels, $CONTACT_EMAIL);
?>

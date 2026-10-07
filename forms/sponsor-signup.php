<?php
require_once __DIR__ . '/form-handler.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(false, 'Invalid request method.', 405);
}

stop_spam();
require_fields(['sponsorCompany', 'sponsorContact', 'sponsorEmail', 'sponsorLevel']);

if (!filter_var($_POST['sponsorEmail'], FILTER_VALIDATE_EMAIL)) {
    json_response(false, 'Please enter a valid email address.', 400);
}

$labels = [
    'sponsorCompany' => 'Company / Crew Name',
    'sponsorContact' => 'Contact Name',
    'sponsorEmail' => 'Email',
    'sponsorPhone' => 'Phone / WhatsApp',
    'sponsorLevel' => 'Sponsor Type',
    'sponsorWebsite' => 'Website / Instagram',
    'sponsorNotes' => 'How They Want To Help'
];

$message = build_message('New Sponsor Application', $labels);
send_submission('Sponsor application', 'New Sponsor Application', $message, 'sponsor-applications.csv', $labels, $SIGNUP_EMAIL);
?>

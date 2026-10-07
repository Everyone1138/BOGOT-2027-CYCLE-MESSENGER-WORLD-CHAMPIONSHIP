<?php
require_once __DIR__ . '/form-handler.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(false, 'Invalid request method.', 405);
}

stop_spam();
require_fields(['volunteerName', 'volunteerEmail', 'volunteerCity', 'volunteerRole', 'volunteerAvailability']);

if (!filter_var($_POST['volunteerEmail'], FILTER_VALIDATE_EMAIL)) {
    json_response(false, 'Please enter a valid email address.', 400);
}

$labels = [
    'volunteerName' => 'Full Name',
    'volunteerEmail' => 'Email',
    'volunteerPhone' => 'Phone / WhatsApp',
    'volunteerCity' => 'City',
    'volunteerRole' => 'Preferred Role',
    'volunteerAvailability' => 'Availability',
    'volunteerFoodPreferences' => 'Food Preferences',
    'volunteerFoodOther' => 'Other Food Preference',
    'volunteerFoodNotes' => 'Food Allergies / Notes',
    'volunteerNotes' => 'Notes'
];

$message = build_message('New Volunteer Signup', $labels);
send_submission('Volunteer signup', 'New Volunteer Signup', $message, 'volunteer-signups.csv', $labels, $SIGNUP_EMAIL);
?>

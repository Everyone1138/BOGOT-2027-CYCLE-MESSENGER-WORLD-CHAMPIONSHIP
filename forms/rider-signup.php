<?php
require_once __DIR__ . '/form-handler.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(false, 'Invalid request method.', 405);
}

stop_spam();
require_fields(['name', 'email', 'country', 'city', 'category']);

if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    json_response(false, 'Please enter a valid email address.', 400);
}

$labels = [
    'name' => 'Full Name',
    'email' => 'Email',
    'country' => 'Country',
    'city' => 'City',
    'category' => 'Category',
    'foodPreferences' => 'Food Preferences / Dietary Needs',
    'foodOther' => 'Other Food Preference',
    'foodNotes' => 'Food Allergies / Notes'
];

$message = build_message('New Rider Registration', $labels);
send_submission('Rider registration', 'New Rider Registration', $message, 'rider-signups.csv', $labels, $SIGNUP_EMAIL);
?>

<?php
session_start();
header('Content-Type: application/json');

$email = $_POST['email'];
$password = $_POST['password'];

// Replace with your actual database connection and query
// For example purposes, we use static values
$validEmail = 'rahulvarma682k';
$validPassword = 'rahul123';

if ($email === $validEmail && $password === $validPassword) {
    $_SESSION['loggedin'] = true;
    $_SESSION['email'] = $email;
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid email or password']);
}
?>

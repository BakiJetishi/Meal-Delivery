<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../config/Database.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $data = json_decode(file_get_contents("php://input"));

  $email = $data->email;
  $password = $data->password;

  $database = new Database();
  $db = $database->connect();

  // Check if the email is already taken
  $stmt = $db->prepare("SELECT id FROM users WHERE email = :email");
  $stmt->bindParam(':email', $email);
  $stmt->execute();
  $row = $stmt->fetch(PDO::FETCH_ASSOC);
  if ($row) {
    header('Content-Type: application/json');
    echo json_encode(array('error' => 'email is already taken'));
    exit;
  }

  $access_token = bin2hex(random_bytes(64));

  $stmt = $db->prepare("INSERT INTO users (email, password) VALUES (:email, SHA(:password))");
  $stmt->bindParam(':email', $email);
  $stmt->bindParam(':password', $password);
  $stmt->execute();

  header('Content-Type: application/json');
  echo json_encode(array('success' => 'User registered successfully', 'access_token' => $access_token));
  }
  else {
  header('Content-Type: application/json');
  echo json_encode(array('error' => 'Invalid request method'));
  }
?>
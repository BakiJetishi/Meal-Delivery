<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../config/Database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $data = json_decode(file_get_contents("php://input"));

  $access_token = $data->access_token;
  $current_password = $data->current_password;
  $new_password = $data->new_password;

  $database = new Database();
  $db = $database->connect();

  $stmt = $db->prepare("SELECT id FROM users WHERE access_token = :access_token AND password = SHA(:password)");
  $stmt->bindParam(':access_token', $access_token);
  $stmt->bindParam(':password', $current_password);
  $stmt->execute();
  $row = $stmt->fetch(PDO::FETCH_ASSOC);

  if ($row) {
    $stmt = $db->prepare("UPDATE users SET password = SHA(:password) WHERE access_token = :access_token");
    $stmt->bindParam(':password', $new_password);
    $stmt->bindParam(':access_token', $access_token);
    $stmt->execute();

    header('Content-Type: application/json');
    echo json_encode(array('success' => 'Password updated successfully'));
  }
  else {
    header('Content-Type: application/json');
    echo json_encode(array('error' => 'Incorrect current password'));
  }
}
else {
  header('Content-Type: application/json');
  echo json_encode(array('error' => 'Invalid request method'));
}
?>
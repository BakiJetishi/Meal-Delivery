<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../config/Database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $data = json_decode(file_get_contents("php://input"));

  $email = $data->email;
  $password = $data->password;

  $database = new Database();
  $db = $database->connect();

  $stmt = $db->prepare("SELECT id FROM users WHERE email = :email AND password = SHA(:password)");
  $stmt->bindParam(':email', $email);
  $stmt->bindParam(':password', $password);
  $stmt->execute();
  $row = $stmt->fetch(PDO::FETCH_ASSOC);

  if ($row) {
    $access_token = bin2hex(random_bytes(64));

    $stmt = $db->prepare("UPDATE users SET access_token = :access_token WHERE email = :email");
    $stmt->bindParam(':access_token', $access_token);
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    header('Content-Type: application/json');
    echo json_encode(array('access_token' => $access_token));
  }
  else {
    http_response_code(401);
    header('Content-Type: application/json');
    echo json_encode(array('error' => 'Invalid email or password'));
  }
}
else {
  header('Content-Type: application/json');
  echo json_encode(array('error' => 'Invalid request method'));
}

// $dbc = mysqli_connect('localhost:3308', 'root', '', 'reactmeals')
// or die('Error connecting to MySQL server.');

// $query = "SELECT id FROM users WHERE email = '$email' AND password = SHA('$password')";
// $data = mysqli_query($dbc, $query)
// or die('Error querying database.');

// if (mysqli_num_rows($data) == 1) {
// $access_token = bin2hex(random_bytes(64));

// // Store the access token in the database
// $query = "UPDATE users SET access_token = '$access_token' WHERE email = '$email'";
// mysqli_query($dbc, $query)
// or die('Error updating access token in database.');

// header('Content-Type: application/json');
// echo json_encode(array('access_token' => $access_token));
// }
// else {
// header('Content-Type: application/json');
// http_response_code(401);
// echo json_encode(array('error' => 'Invalid email or password'));
// }
// }
// else {
// header('Content-Type: application/json');
// echo json_encode(array('error' => 'Invalid request method'));
// }
//
?>
<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/Reservations.php';

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $post = new Reservations($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));

  $post->date = $data->date;
  $post->email = $data->email;
  $post->name = $data->name;
  $post->number = $data->number;
  $post->requests = $data->requests;
  $post->seats = $data->seats;
  $post->time = $data->time;

  // Create post
  if($post->create()) {
    echo json_encode(
      array('message' => 'Post Created')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Created')
    );
  }
}
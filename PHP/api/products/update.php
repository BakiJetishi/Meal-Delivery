<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/Meals.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $post = new Meals($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));
  
  // Set ID to update
  $post->id = $data->id;

  $post->title = $data->title;
  $post->body = $data->body;
  $post->price = $data->price;
  $post->meal_type = $data->meal_type;
  $post->img_url = $data->img_url;

  $imgUrl = $data->current_img;

  if($imgUrl != $data->img_url) {
    // Set ID to update

    $imgUrl_split = str_split($imgUrl);
    $output = array_slice($imgUrl_split, 37);
    $output_string = implode('', $output);

    $file_path = '../../images/'.$output_string.'';

    if (file_exists($file_path)) {
      unlink($file_path);
    }
  }

  // Update post
  if($post->update()) {
    echo json_encode(
      array('message' => 'Post Updated')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Updated')
    );
  }
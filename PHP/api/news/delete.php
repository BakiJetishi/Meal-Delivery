<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/News.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $post = new News($db);

  // Get raw posted data
  $id = $_GET['id'];
  $imgUrl = $_GET['img_url'];
  // Set ID to update
  $post->id = $id;

  $imgUrl_split = str_split($imgUrl);
  $output = array_slice($imgUrl_split, 38);
  $output_string = implode('', $output);

  var_dump($output_string);

  $file_path = '../../images/'.$output_string.'';

  if (file_exists($file_path)) {
    unlink($file_path);
  }

  // Delete post
  if($post->delete()) {
    echo json_encode(
      array('message' => 'Post Deleted')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Deleted')
    );
  }
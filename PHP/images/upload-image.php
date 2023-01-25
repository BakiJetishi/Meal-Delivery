<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');


  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the image file from the POST request
    $image = $_FILES['image']['tmp_name'];

    $imageName = uniqid() . $_FILES['image']['name'];
    
    // Move the image to the target directory
    move_uploaded_file($image, $imageName);

    echo json_encode(['status' => 'success', 'url' => $imageName]);

  }
  
  ?>
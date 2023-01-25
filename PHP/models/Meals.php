<?php 
  class Meals {
    // DB stuff
    private $conn;
    private $table = 'meals';

    // Post Properties
    public $id;
    public $title;
    public $description;
    public $img_url;
    public $price;
    public $meal_type;
    public $limit;
    
    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get Posts
    public function read() {
      // Create query
      $query = 'SELECT * FROM '.$this->table.' ORDER BY id DESC LIMIT '.$this->limit.'';
      
      // Prepare statement
      $stmt = $this->conn->prepare($query);

      $this->limit = $this->limit;
      
      // Execute query
      $stmt->execute();

      return $stmt;
    }

    public function read_single() {
      // Create query
      $query = 'SELECT * FROM '.$this->table.' WHERE id = :id';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Bind ID
      $stmt->bindParam(':id', $this->id);

      // Execute query
      $stmt->execute();

      $row = $stmt->fetch(PDO::FETCH_ASSOC);

      // Set properties
      $this->title = $row['title'];
      $this->body = $row['body'];
      $this->price = $row['price'];
      $this->meal_type = $row['meal_type'];
      $this->img_url = $row['img_url'];
}

    // Create Post
    public function create() {
          // Create query
          $query = 'INSERT INTO ' . $this->table . ' SET title = :title, body = :body, price = :price, meal_type = :meal_type, img_url = :img_url';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->title = htmlspecialchars(strip_tags($this->title));
          $this->body = htmlspecialchars(strip_tags($this->body));
          $this->price = htmlspecialchars(strip_tags($this->price));
          $this->meal_type = htmlspecialchars(strip_tags($this->meal_type));
          $this->img_url = htmlspecialchars(strip_tags($this->img_url));


          // Bind data
          $stmt->bindParam(':title', $this->title);
          $stmt->bindParam(':body', $this->body);
          $stmt->bindParam(':price', $this->price);
          $stmt->bindParam(':meal_type', $this->meal_type);
          $stmt->bindParam(':img_url', $this->img_url);

          // Execute query
          if($stmt->execute()) {
            return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }

    // Update Post
    public function update() {
          // Create query
          $query = 'UPDATE ' . $this->table . '
                                SET title = :title, body = :body, price = :price, meal_type = :meal_type, img_url = :img_url
                                WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->title = htmlspecialchars(strip_tags($this->title));
          $this->body = htmlspecialchars(strip_tags($this->body));
          $this->price = htmlspecialchars(strip_tags($this->price));
          $this->meal_type = htmlspecialchars(strip_tags($this->meal_type));
          $this->img_url = htmlspecialchars(strip_tags($this->img_url));
          $this->id = htmlspecialchars(strip_tags($this->id));

          // Bind data
          $stmt->bindParam(':title', $this->title);
          $stmt->bindParam(':body', $this->body);
          $stmt->bindParam(':price', $this->price);
          $stmt->bindParam(':meal_type', $this->meal_type);
          $stmt->bindParam(':img_url', $this->img_url);
          $stmt->bindParam(':id', $this->id);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }

    // Delete Post
    public function delete() {
          // Create query
          $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->id = htmlspecialchars(strip_tags($this->id));

          // Bind data
          $stmt->bindParam(':id', $this->id);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }
    
  }
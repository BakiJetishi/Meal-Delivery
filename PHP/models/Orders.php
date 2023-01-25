<?php 
  class Orders {
    // DB stuff
    private $conn;
    private $table = 'orders';

    // News Properties
    public $id;
    public $date;
    public $email;
    public $name;
    public $number;
    public $requests;
    public $seats;
    public $time;
    
    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Create News
    public function create() {
          // Create query
          $query = 'INSERT INTO ' . $this->table . ' SET name = :name, number = :number, country = :country, city = :city, postalcode = :postalcode, meal_id = :meal_id, qty = :qty';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->name = $this->name;
          $this->number = $this->number;
          $this->country = $this->country;
          $this->city = $this->city;
          $this->postalcode = $this->postalcode;
          $this->meal_id = $this->meal_id;
          $this->qty = $this->qty;


          // Bind data
          $stmt->bindParam(':name', $this->name);
          $stmt->bindParam(':number', $this->number);
          $stmt->bindParam(':country', $this->country);
          $stmt->bindParam(':city', $this->city);
          $stmt->bindParam(':postalcode', $this->postalcode);
          $stmt->bindParam(':meal_id', $this->meal_id);
          $stmt->bindParam(':qty', $this->qty);

          // Execute query
          if($stmt->execute()) {
            return true;
        }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }
    
  }
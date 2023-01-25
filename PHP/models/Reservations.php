<?php 
  class Reservations {
    // DB stuff
    private $conn;
    private $table = 'reservations';

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
          $query = 'INSERT INTO ' . $this->table . ' SET date = :date, email = :email, name = :name, number = :number, requests = :requests, seats = :seats, time = :time';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->date = $this->date;
          $this->email = $this->email;
          $this->name = $this->name;
          $this->number = $this->number;
          $this->requests = $this->requests;
          $this->seats = $this->seats;
          $this->time = $this->time;


          // Bind data
          $stmt->bindParam(':date', $this->date);
          $stmt->bindParam(':email', $this->email);
          $stmt->bindParam(':name', $this->name);
          $stmt->bindParam(':number', $this->number);
          $stmt->bindParam(':requests', $this->requests);
          $stmt->bindParam(':seats', $this->seats);
          $stmt->bindParam(':time', $this->time);

          // Execute query
          if($stmt->execute()) {
            return true;
        }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }
    
  }
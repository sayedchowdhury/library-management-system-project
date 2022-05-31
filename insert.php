<?php
$username = $_POST['username'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$password = $_POST['password'];



$conn = new mysqli('localhost','root','','form');
   if($conn->connect_error){
      echo "$conn->connect_error";
      die("Connection Failed : ". $conn->connect_error);
   } else {
      $stmt = $conn->prepare("insert into registration(username, email, gender, password) values(?, ?, ?, ?)");
      $stmt->bind_param("ssss", $username, $email, $gender, $password);
      $execval = $stmt->execute();
      echo $execval;
      echo "Insert New Data Registration successfull...";
      $stmt->close();
      $conn->close();
   } else {
 echo "All field are required";
 die();
}
?>
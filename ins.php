 <?php
include 'db.php';

if(isset($_POST['submit']))
  {
    $name     = $_POST['name'];
    $email   = $_POST['email'];
    $subject      = $_POST['subject'];
    $message    = $_POST['message'];
  }
 


$insert = mysqli_query($conn,"INSERT INTO Contact (name,email,subject,message) VALUES ('$name','$email','$subject','$message')");





header('Location: index.php');

?>
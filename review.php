<?php
include 'db.php';


    if(isset($_POST['submit']))
    {
      $name     = $_POST['name'];
      $review  = $_POST['review'];
    }
   
  
  
  $insert = mysqli_query($conn,"INSERT INTO Review (name,review) VALUES ('$name','$review')");
  
  



header('Location:index.html#clients');

?>
<?php
   
   $conn = mysqli_connect("localhost","root","","ysd");
   if($conn)

{
	echo "Success"; 
}

else 

{
	echo " db not connected". mysqli_connect_error();
}



  ?>
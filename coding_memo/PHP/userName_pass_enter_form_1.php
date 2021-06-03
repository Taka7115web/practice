
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta name="viewport" content="width=device-width,maximum-scale=1.0,minimum-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <title></title>
  <!-- <link rel="stylesheet" href="/assets/css/index.css"> -->
</head>
<body>


<?php
$users = ["coolBro123" => "password123!", "coderKid" => "pa55w0rd*", "dogWalker" => "ais1eofdog$"];  
  
  
$feedback = "";
$message = "You're logged in!";
$validation_error = "* Incorrect username or password.";
$username = "";

// Write your code here:

$method_check = $_SERVER["REQUEST_METHOD"] === "POST";
if($method_check){
  $username = $_POST["username"];
  $password = $_POST["password"];


// databaseを調べる
// global $users;
if (isset($users[$username]) && $users[$username] === $password){
     $feedback = $message;
   } else {
     $feedback = $validation_error;
   }
}; // method_check
?>
  
<h3>Welcome back!</h3>
<form method="post" action="/userName_pass_enter_form_2.php">
Username:<input type="text" name="username" value="<?php echo $username;?>">
<br>
Password:<input type="text" name="password" value="">
<br>
<input type="submit" value="Log in">
</form>
<span class="feedback"><?= $feedback;?></span>

<!-- <script type="text/javascript" src="/assets/js/bundle.js"></script> -->
</body>
</html>
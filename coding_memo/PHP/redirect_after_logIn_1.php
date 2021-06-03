
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
$validation_error = "";
$username = "";
$users = ["Taka1" => "Taka7115", "Taka2" => "Taka7115tennis", "Taka3" => "Taka7115web"]; // この配列は本来ならデータベースから参照する

 if ($_SERVER["REQUEST_METHOD"] === "POST") {
   $username = $_POST["username"];
   $password  = $_POST["password"];
   if (isset($users[$username]) && $users[$username] === $password){

      header("Location: redirect_after_logIn_2.php"); // リダイレクト先設定
      exit;  
     
   } else {
     $validation_error = "* Incorrect username or password.";
   }
 }

?>
  
<h3>Welcome back!</h3>
<form method="post" action="/redirect_after_logIn_2.php">
Username:<input type="text" name="username" value="<?php echo $username;?>">
<br>
Password:<input type="text" name="password" value="">
<br>
<span class="error"><?= $validation_error;?></span>
<br>
<input type="submit" value="Log in">
</form>
  
  

<!-- <script type="text/javascript" src="/assets/js/bundle.js"></script> -->
</body>
</html>
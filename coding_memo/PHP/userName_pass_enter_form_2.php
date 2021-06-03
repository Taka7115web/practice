
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
  
$username = "";

$check_ifPosted = $_SERVER["REQUEST_METHOD"] === "POST";
if($check_ifPosted){
  $username = $_POST["username"];
};

?>
  
<h3><?= "Hellow, ${username}!!";?></h3>

<!-- <script type="text/javascript" src="/assets/js/bundle.js"></script> -->
</body>
</html>
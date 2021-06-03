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

$contacts = ["Susan" => "5551236666", "Alex" => "7779991717", "Lily" => "8181117777"];  
$message = "";
$validation_error = "* Please enter a 10-digit North American phone number.";
$name = "";
$number = "";

$check_ifPosted = $_SERVER["REQUEST_METHOD"] === "POST";
if($check_ifPosted){

   $name = $_POST["name"];
   $number  = $_POST["number"];
   // Write your code here:
   
   if(strlen($number) < 30){
$formatted_number = preg_replace("/[^0-9]/","",$number); // 送信されたデータに数字以外があれば削除
if (strlen($formatted_number)===10){
  $contacts[$name] = $formatted_number;
  $message = "Thanks ${name}, we'll be in touch.";
}else{
  $message = $validation_error;
}
   }else{
     $message = $validation_error;
   }
};
?>


  <h3>Contact Form:</h3>
  <form method="post" action="">
    Name:
    <br>
    <input type="text" name="name" value="<?= $name;?>">
    <br><br>
    Phone Number:
    <br>
    <input type="text" name="number" value="<?= $number;?>">
    <br><br>
    <input type="submit" value="Submit">
  </form>
  <div id="form-output">
    <p id="response"><?= $message?></p>
  </div>



  <!-- <script type="text/javascript" src="/assets/js/bundle.js"></script> -->
</body>

</html>
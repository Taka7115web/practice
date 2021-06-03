
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
$feedback = "";
$success_message = "Thank you for your donation!";
$error_message = "* There was an error with your card.";
$error_message_master = "* There was an error with your mastercard number.<br>※/5[1-5][0-9]{14}/";
$error_message_visa = "* There was an error with your visa card number.<br>※/4[0-9]{12}([0-9]{3})?([0-9]{3})?/";
$error_message_donation = "Donation must be more than 1000.";

$card_type = "";
$card_num = "";
$donation_amount = "";

$check_ifPosted = $_SERVER["REQUEST_METHOD"] === "POST";
if($check_ifPosted){
    $card_type = $_POST["credit"];
    $card_num = $_POST["card-num"];
    $donation_amount = $_POST["amount"];

    if (strlen($card_num)<50){
      if ($card_type === "mastercard"){
        if (preg_match("/5[1-5][0-9]{14}/", $card_num) === 1){
          $feedback = $success_message;
        } else {
          $feedback = $error_message_master;
        }
  	  } else if ($card_type === "visa") {
        if (preg_match("/4[0-9]{12}([0-9]{3})?([0-9]{3})?/", $card_num) === 1){
          $feedback = $success_message;
        } else {
          $feedback = $error_visa_visa;
       }
    }
  } else {
      $feedback = $error_message;
    }
    
    if(strlen($donation_amount) === 0){
       $feedback = $error_message_donation;
    }
}
?>

<form action="" method="POST">
  <h1>Make a donation</h1>
    <label for="amount">Donation amount?</label>
      <input type="number" name="amount" value="<?= $donation_amount;?>">
      <br><br>
    <label for="credit">Credit card type?</label>
      <select name="credit" value="<?= $card_type;?>">
        <option value="mastercard">Mastercard</option>
        <option value="visa">Visa</option>
      </select>
      <br><br>
      <label for="card-num">Card number?</label>
      <input type="number" name="card-num" value="<?= $card_num;?>">
      <br><br>   
      <input type="submit" value="Submit">
</form>
<span class="feedback"><?= $feedback;?></span>



<!-- <script type="text/javascript" src="/assets/js/bundle.js"></script> -->
</body>
</html>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta name="viewport" content="width=device-width,maximum-scale=1.0,minimum-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <title>starter</title>

  <meta name="keywords" content="foo">
  <meta name="description" content="foo">
  <meta property="og:title" content="starter">
  <meta property="og:description" content="foo">
  <meta property="og:type" content="website">
  <meta property="og:image" content="/assets/img/og/og.jpg">
  <meta property="og:url" content="http://www.example.com/">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="starter">

  <!-- <link rel="stylesheet" href="/assets/css/index.css"> -->
</head>

<body>



<?php
$validation_error = "";
$user_answer = "";
$submission_response = "";
// Write your code here:
$check = $_SERVER["REQUEST_METHOD"] === "POST";
if($check){
  $user_answer = filter_var($_POST["answer"], FILTER_SANITIZE_NUMBER_INT);
if($user_answer != "-5"){
  $validation_error = "* Wrong answer. Try again.";
} else {
  $submission_response = "Correct!";
}
}


?>
<h2>Time for a math quiz!</h2>
<form method="post" action="">
<h4>Question 1:</h4>  
<p>What is 6 - 11?</p> 
<input type="text" name="answer" id="answer" value="<?= $user_answer;?>">
<br>
<span class="error" id="error"><?= $validation_error;?></span> 
<br> 
<input type="submit" value="Submit Your Answer">
</form>
<div>
  <p id="answer-display">Your answer was: <?= $user_answer;?></p>
  <p id="submission-response"><?= $submission_response;?></p>
</div>


<!-- <script type="text/javascript" src="/assets/js/bundle.js"></script> -->
</body>

</html>
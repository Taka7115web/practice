
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
$user_answer = "";
$submission_response = "";

$check_ifPosted = $_SERVER["REQUEST_METHOD"] === "POST";
if($check_ifPosted){
  $user_answer = filter_var($_POST["answer"], FILTER_SANITIZE_NUMBER_INT);
if($user_answer = "-5"){
  $submission_response = "Correct!";
} else {
  $validation_error = "* Wrong answer. Try again.";
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
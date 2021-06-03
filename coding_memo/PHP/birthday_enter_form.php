
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
$message = "";
$month_error = "";
$day_error = "";
$year_error = "";

$month = "";
$day = "";
$year = "";
  
// define options which is used in filter_var method
$month_options = ["options" => ["min_range" => 1, "max_range" => 12]];
$day_options = ["options" => ["min_range" => 1, "max_range" => 31]];
$year_options = ["options" => ["min_range" => 1903, "max_range" => 2021]];

// function validating datas
function validateInput($type,&$error,$options_arr){
  $check = filter_var($type,FILTER_VALIDATE_INT,$options_arr);
  if($check){
    return true;
 }else{
   $error = "* Invalid ${type}";
 };
 };

// only if datas are submitted, assign the datas into variables
$check_ifPosted = $_SERVER["REQUEST_METHOD"] === "POST";
   if($check_ifPosted){

    // show each data in the input element
    $month = $_POST["month"];
    $day = $_POST["day"];
    $year = $_POST["year"];

    // validate each submitted data
    $test_month = validateInput($month, $month_error, $month_options);
    $test_day = validateInput($day, $day_error, $day_options);
    $test_year = validateInput($year, $year_error, $year_options);    
    if ($test_month && $test_day && $test_year){
      $message = "Your birthday is: ${month}/${day}/${year}";
    }  
  }

?>

<form method="post" action="">
<p>
	Enter your birthday.
</p>
<p>
	Month: <input type="number" name="month" value="<?= $month; ?>">
	<span class="error"><?= $month_error;?></span>
</p>
<p>
	Day: <input type="number" name="day" value="<?= $day; ?>">
  <span class="error"><?= $day_error;?></span>
</p>
<p>
	Year: <input type="number" name="year" value="<?= $year; ?>">  
	<span class="error"><?= $year_error;?></span>
</p>
	<br>
	<input type="submit" value="Submit">
</form>
<p><?= $message;?></p>




<!-- <script type="text/javascript" src="/assets/js/bundle.js"></script> -->
</body>
</html>
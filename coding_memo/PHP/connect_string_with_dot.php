
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
$full = "Enter your full-name.";
$first = "";
$last = "";
$check_ifPosted = $_SERVER["REQUEST_METHOD"] === "POST";
if($check_ifPosted){
  $first = $_POST['first'];
  $last = $_POST['last'];
  $full = $first." ".$last;
  name_check($full,$first,$last);
}
function name_check(&$full,$first,$last){ // 送信された名前をチェック
  $check_first = strlen($first) === 0;
  $check_last = strlen($last) === 0;
  if($check_first){
    $full = "Enter your first-name";
  }
  if($check_last){
    $full = "Enter your last-name";
  }
  if($check_first && $check_last){
    $full = "Enter your full-name.";
  }
}
?>


<html>
<body>
<form method="POST" name="fullName" action="">
<p>FIRST:</p>
<input type="text" name="first" value="<?= $first ?>">
<br>
<p>LAST:</p>
<input type="text" name="last" value="<?= $last ?>">
<br>
<br>
<input type="submit">
</form>
<!-- 送信結果表示orユーザーに入力促す -->
<p>
<?= $full 
?>
</p>




<!-- <script type="text/javascript" src="/assets/js/bundle.js"></script> -->
</body>
</html>
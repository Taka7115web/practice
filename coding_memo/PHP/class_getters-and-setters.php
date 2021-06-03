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

class My_name {
  private $family,$last;

  function setName($family,$last){
    $this->family = $family;
    $this->last = $last;
  }

  function getFamilyName(){
    return $this->family;
  }

  function getLastName(){
    return $this->last;
  }
}


$family = "";
$last = "";
$full_name = "";

$check_ifPosted = $_SERVER["REQUEST_METHOD"] === "POST";
if($check_ifPosted){

  $my_name = new My_name();

  $my_name->setName($_POST["family"],$_POST["last"]); // my_name classのオブジェクトをそれぞれset
  $family = $my_name->getFamilyName(); // my_name classのfamilyオブジェクトをget
  $last = $my_name->getLastName(); // my_name classのlastオブジェクトをget
  if (preg_match("/^[ぁ-んァ-ヶ一-龠々]+$/u",$family) && preg_match("/^[ぁ-んァ-ヶ一-龠々]+$/u",$last)) { // 入力した名前が日本語のみであるかチェック
  $full_name = $family." ".$last;
  } else {
    $full_name = "お名前を正しくご入力ください。";
  }
}

?>

<h4>
getters-and-setters
</h4>

<form method="post" action="" name="getters-and-setters">

<p>
姓を入力してください
</p>
<input type="text" name="family" value="<?= $family; ?>">
<br>
<p>
名を入力してください
</p>
<input type="text" name="last" value="<?= $last; ?>">
<br>

<br>
<label for="submit" style="cursor:pointer;">送信</label>
<input type="submit" id="submit" hidden>
</form>

<p>
<?= $full_name; ?>
</p>

<!-- <script type="text/javascript" src="/assets/js/bundle.js"></script> -->
</body>
</html>
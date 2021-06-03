
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
class Cheetah {
  public static $movement = "very fast";
  public static function getMaxSpeed () {
    return "Cheetah runs with maximum 120km-per-hour-speed.";
  }
}
?>

<!-- staticのオブジェクトをclassのインスタンス化なしに取得 -->
<p>
  Cheetah's running speed
</p>
<p>
→<?= Cheetah::$movement; ?>
</p>

<br>

<!-- staticのメソッドをclassのインスタンス化なしに実行 ※メソッド場合「$」は不要-->
<p>
  Cheetah's maximum running speed
</p>
<p>
→<?= Cheetah::getMaxSpeed(); ?>
</p>


<!-- <script type="text/javascript" src="/assets/js/bundle.js"></script> -->
</body>
</html>
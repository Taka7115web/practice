
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
class Name {
  public $first = "TAKAHIRO", $middle = "ANTONIO", $last = "NISHINA";
  function getFull () {
    return "My name is ".$this->first." ".$this->middle." ".$this->last.".";
  }
}

$me = new Name();
$me->first = "TOMOAKI";
?>

<!-- firstはpublicで設定した名前から変更 -->
<p>
<?= $me->first; ?>
</p>

<!-- lastはpublicで設定した名前をそのまま -->
<p>
<?= $me->last; ?>
</p>

<!-- class内のmethodにより、fullname出力 -->
<p>
<?= $me->getFull(); ?>
</p>


<!-- <script type="text/javascript" src="/assets/js/bundle.js"></script> -->
</body>
</html>
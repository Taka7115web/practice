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

class Pet {
  protected $intimacy = 0; 
}
 
class dog extends Pet {
  function cuddleSoftly() {
    $this->intimacy++; 
  }
  function returnIntimacy(){
    return $this->intimacy;
  }
}
 
$my_pet = new dog();
// $level_error = $my_pet->intimacy; // Error
// ※extendsで生成したclassではprotecedのオブジェクトに直接アクセスできないが、
//  関数経由でアクセスすることはできる。
// ※オブジェクトがprivateの場合、関数経由でもアクセスできない。

$my_pet->cuddleSoftly(); // Successfully increments intimacy
$my_pet->cuddleSoftly(); // Successfully increments intimacy
$my_pet->cuddleSoftly(); // Successfully increments intimacy

?>

<h4>
cuddleSoftly()関数3回実行後の$intimacyの値
</h4>
<p>
<?= $my_pet->returnIntimacy(); ?>
</p>


<!-- <script type="text/javascript" src="/assets/js/bundle.js"></script> -->
</body>
</html>

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

class Beverage {
  public $temperature, $color, $opacity;

  function __construct($temperature,$color){ // constructor定義 ※引数がこのclassのオブジェクト値になるようにする
   $this->temperature = $temperature;
   $this->color = $color;
  }

  function getInfo() { // methodを定義
    return "This beverage is $this->temperature and $this->color.";
  }
}

 $my_drink = new Beverage("cold","green"); // coldとgreenを引数にインスタンス化

 ?>

 <p> 
   <?= $my_drink->getInfo(); ?>
 </p>

 
<!-- <script type="text/javascript" src="/assets/js/bundle.js"></script> -->
</body>
</html>
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

$absoluteCondition = array("place" => "OFUNA","size" => "1DK","floor" => "2");

class RealEstate {
  public $price, $age, $loft, $washlet; // 検討項目
  private $place, $size, $floor; // 必須項目

  function __construct($arr){ // privateをインスタンス化時に代入
    $this->place = $arr["place"];
    $this->size = $arr["size"];
    $this->floor = $arr["floor"];
  }

  function setOptions($price,$age,$loft,$washlet){ // publicをインスタンス後、method経由で代入
    $this->price = $price;
    $this->age = $age;
    $this->loft = $loft;
    $this->washlet = $washlet;
  } 

  
  function getConditions(){
    return "必須項目：場所, 間取り, 階<br>検討項目：家賃, 築年数, ロフト有無, ウォシュレット有無";
  }
  
  function getMyDesire(){
    return "<b>必須項目</b> <small>※privateのため外部からアクセス禁止</small><br>場所：$this->place<br>間取り：$this->size<br>階：$this->floor<br><br><b>検討項目</b> <small>※publicのため外部からアクセス可能</small><br>価格：$this->price<br>築年数：$this->age<br>ロフト有無：$this->loft<br>ウォシュレット有無：$this->washlet";
  }
  
}

class House1 extends RealEstate {};
class House2 extends RealEstate {};

// インスタンス化
$realEstate = new RealEstate($absoluteCondition);
$house1 = new House1($absoluteCondition);
$house1->setOptions("70,000","5階","無","有");
$house2 = new House2($absoluteCondition);
$house2->setOptions("80,000","2階","有","有");

?>

<h3>
<?= $realEstate->getConditions(); ?>
</h3>

<br>

<h4>
候補①
</h4>
<p>
<?= $house1->getMyDesire(); ?>
</p>

<br>

<h4>
候補②
</h4>
<p>
<?= $house2->getMyDesire(); ?>
</p>


<!-- <script type="text/javascript" src="/assets/js/bundle.js"></script> -->
</body>
</html>
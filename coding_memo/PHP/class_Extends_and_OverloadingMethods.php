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
// 各季節のデータを配列化
$spring = array("name" => "Spring", "period" => "from March to May", "temperature" => "from 10 to 20", "event" => "Cherry Blossom Festival");
$summer = array("name" => "Summer", "period" => "from June to August", "temperature" => "from 20 to 35", "event" => "Fireworks Festival");
$autumn = array("name" => "Autumn", "period" => "from September to Norvember", "temperature" => "from 10 to 20", "event" => "Leaf-peeping");
$winter = array("name" => "Winter", "period" => "from December to February", "temperature" => "from 0 to 10", "event" => "Snow Festival");


class Season {
  public $name, $period, $temperature, $event;

  function getReadTxt(){ // リード文
    return "My Favorite season is $this->name.";
  } 
  
  function getExplainTxt() { // 説明文
      return "This season is $this->period, and its temperature marks $this->temperature. <br>We can enjoy $this->event in this season.";
  }
}

class MyFavorite extends Season { // Season classを継承しつつ、選択した季節のデータをpublicの値に代入
  function __construct($arr){
    $this->name = $arr["name"];
    $this->period = $arr["period"];
    $this->temperature = $arr["temperature"];
    $this->event = $arr["event"];
  }

  function getFullTxt(){ // Season ClassのgetReadTxt()とgetExplainTxt()で出力されるテキストを結合。※parent::+method 親classのmethodを使用できる. 
    return parent::getReadTxt()."<br>"." ".parent::getExplainTxt();
  }
}

// インスタンス化
$season = new Season();
$myFavorite = new MyFavorite($autumn);

?>


<!-- Season class -->
<p>
<?= $season->getReadTxt(); ?>
</p>

<!-- Season classを継承しているため、getInfo() methodを使用できる -->
<p>
<?= $myFavorite->getFullTxt(); ?>
</p>


<!-- <script type="text/javascript" src="/assets/js/bundle.js"></script> -->
</body>
</html>
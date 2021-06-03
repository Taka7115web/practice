export default {
  id: 42,
  ttl: "<span>C</span>anvasで<br class='u-sp'>【HTML5】",
  txt: "Canvasで<br><br>【HTML5】",
  alt: "Canvasで",
  p1: "",
  p1_color: "js-yellow",
  p1_list1: "<span data='dot'>&#9642;</span>",
  p1_list2: "<span data='dot'>&#9642;</span>",
  p2: "",
  p2_color: "js-yellow",
  p2_list1: "<span data='dot'>&#9642;</span>",
  p2_list2: "<span data='dot'>&#9642;</span>",
  p3: "",
  p3_color: "js-yellow",
  p3_list1: "<span data='dot'>&#9642;</span>",
  p3_list2: "<span data='dot'>&#9642;</span>",
  func
}


/**
 * js--------------------------------------
 */

function func() {
  /**
   * うにょうにょはPointクラスの
   * this.speedとthis.random_numの値を変えることで
   * 調整可能
   */

  let area, canvas, context;

  // canvas表示のエリア
  area = document.querySelector(".js-area");
  const area_width = area.clientWidth,
    area_height = area.clientHeight;

  // load後、canvas要素生成&関数実行
  window.addEventListener("load", () => {
    canvas = document.getElementById("js-canvas");
    canvas.width = area_width;
    canvas.height = area_height;
    context = canvas.getContext("2d");
    init();
  });

  // パラメータ
  const MAX = 10, // ベジェ曲線上のポイントの数
    circle = { // うにょうにょ円のパラメータ
      center: {
        x: area_width / 2,
        y: area_height / 2
      },
      color: 'rgb(0, 255, 0)',
      alpha: .7,
      radius: area_width / 5,
      point: [],
      redraw_speed: 45
    };

  // それぞれのpointを定義するクラス
  class Point { 
    constructor(c, r, rota) {
      this.x, this.y;
      this.center_X = c.x;
      this.center_y = c.y;
      this.radian = rota * (Math.PI / 180);
      this.radius = r;
      this.speed = Math.random() * 10 + 2; // 回転速度
      this.random_num = Math.random() + 1; // pointの座標を微修正するための乱数
      this.rota = 0;
    }

    update() {
      var plus = Math.cos(this.rota * (Math.PI / 180)) * this.random_num;
      this.radius += plus;
      var cos = Math.cos(this.radian) * this.radius;
      var sin = Math.sin(this.radian) * this.radius;
      this.x = cos + this.center_X;
      this.y = sin + this.center_y;
      this.rota += this.speed;
    }
  }

  const init = () => {
    var rota = Math.floor(360 / MAX);
    for (var i = 0; i < MAX; i++) {
      circle.point[i] = new Point(circle['center'], circle['radius'], rota * i);
    }
    update();
  }

  // パラメータ及びキャンバスの描画内容を更新する関数
  const update = () => {

    // それぞれのpointのパラメータ更新
    circle.point.forEach((el) => {
      el.update();
    })

    // キャンバスを描画
    draw(circle);

    // 再起関数化（実行間隔は要調整）
    setTimeout(update, circle.redraw_speed);
  }

  // キャンバス描画用関数
  const draw = (circle) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(circle['color'], circle['point'], circle['alpha']);
  };

  // うにょうにょ円描画用関数
  const drawCircle = (color, point, alpha) => {

    context.fillStyle = color;
    context.globalAlpha = alpha;

    context.beginPath();

    // control_xとcontrol_yはベジェ曲線描画用のquadraticCurveTo()で第3、第4引数に。コントロールポイントとして使用
    var control_x1 = (point[0].x + point[MAX - 1].x) / 2;
    var control_y1 = (point[0].y + point[MAX - 1].y) / 2;

    context.moveTo(control_x1, control_y1);

    // point同士をベジェ曲線で結ぶ
    for (var i = 0; i < MAX - 1; i++) {
      var control_x = (point[i].x + point[i + 1].x) / 2;
      var control_y = (point[i].y + point[i + 1].y) / 2;

      // quadraticCurveTo()でベジェ曲線を表現する
      context.quadraticCurveTo(point[i].x, point[i].y, control_x, control_y);
    }

    // 最初と最後のpointだけ別で結ぶ
    context.quadraticCurveTo(point[i].x, point[i].y, control_x1, control_y1);

    context.closePath();
    context.fill();

  }



} // func
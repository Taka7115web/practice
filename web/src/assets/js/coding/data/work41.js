export default {
  id: 41,
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

// //  インポート
// import gsap from "gsap";
// import {
//   TweenMax,
//   TweenLite,
//   TimelineMax,
// } from 'gsap/all';

import SVG from "svgjs"


/**
 * js--------------------------------------
 */

/**
 * 参考
 * https://jslob.repop.jp/2017/07/svgjs.html
 */

function func() {

  var canvas = document.querySelector('#js-area');
  var data_canvas = {
    w: canvas.clientWidth,
    h: canvas.clientHeight
  }

  var center = {
    x: data_canvas.w / 2,
    y: data_canvas.h / 2
  }

  // circle変数格納用配列
  var circle_arr = [];

  // ランダムな整数を算出
  var return_random_integer = (num) => {
    return Math.floor(Math.random() * num);
  }

  //SVGインスタンス
  var canvas = SVG('js-area');
  canvas.size(data_canvas.w, data_canvas.h).attr({
    id: 'svg'
  });

  //クラス particle
  class Particle {
    constructor(w, h, fill, stroke) {
      this.w = w;
      this.h = h;
      this.fill = fill;
      this.stroke = stroke;
      this.radian = return_random_integer(360) * (Math.PI / 180);
      this.posX = ((data_canvas.h / 4) * Math.cos(this.radian)) + center.x;
      this.posY = ((data_canvas.h / 4) * Math.sin(this.radian)) + center.y;
    }
    // circleを描画
    draw() {
      this.circle = canvas.circle(this.w, this.h).move(this.posX, this.posY).fill(this.fill).stroke(this.stroke).attr({
        id: 'circle'
      }).attr({
        class: 'circle'
      });
    }
    // circleの座標を変更
    change_pos() {
      this.newX = return_random_integer(data_canvas.w);
      this.newY = return_random_integer(data_canvas.h);
      this.circle.move(this.newX, this.newY);
    }
    // circleの座標をもとに戻す
    reset_pos() {
      this.circle.move(this.posX, this.posY)
    }
  }

  // circleを配列に格納
  for (let i = 0; i < 100; i++) {
    circle_arr.push(new Particle(10, 10, "yellow", "orange"))
  }

  // circle描画
  circle_arr.forEach((el, i) => {
    el.draw();
  });

  // clickイベント
  canvas.on("click", () => {
    move_circle();
  });

  // clickでcircleの座標変更
  function move_circle() {
    circle_arr.forEach((el, i) => {
      el.change_pos();
    });
  }
  // dblclickイベント
  canvas.on("dblclick", () => {
    reset_circle_pos();
  });

  // dblclickで元の座標に戻す
  function reset_circle_pos() {
    circle_arr.forEach((el, i) => {
      el.reset_pos();
    });
  }


}

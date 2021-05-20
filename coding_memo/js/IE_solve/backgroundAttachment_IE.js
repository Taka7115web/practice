class fixedBg {
  constructor() {
    this.target = document.querySelector(".js-attachment");
  }
  init() {

    if (this.target) { //background-attachmentを使用しているページのみ ※モーダルのバグの原因になるので注意

      // 利用ブラウザがIE10か11か
      if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./)) {
        // マウスホイールでのスクロール時
        $('body').on("mousewheel", function () {
          // デフォルトの設定値をOFFに切り替える
          event.preventDefault();
          var wd = event.wheelDelta;
          var csp = window.pageYOffset;
          window.scrollTo(0, csp - wd);
        });
      }

    }

  }

}

export default fixedBg;

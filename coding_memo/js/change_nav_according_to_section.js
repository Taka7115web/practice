/**
 * 使い方＝下記クラスの引数にナビゲーションの項目、
 * セクションの情報を引数として入れる
 */
new Nav(".js-nav-list", ".js-section");

class Nav {
  constructor(navList, section) {
    this.navList = document.querySelectorAll(navList);
    this.secList = document.querySelectorAll(section);
    this.secArray = [];
  }
  init() {
    if (window.innerWidth > 750 && this.navList) { //PC、かつsideNavあった場合
      this.trigger();
    };
  }

  trigger() {
    this.check_section_pos();
    window.addEventListener("scroll", () => {
      this.scroll_check();
    });
  }

  /**
   * 各sectionの開始Y座標と終了Y座標を配列に格納する関数
   */
  check_section_pos() {
    for (var i = 0; i < this.secList.length; i++) {
      var target = this.secList[i];
      var secTop = target.offsetTop;
      var secBottom = secTop + target.clientHeight - 1;
      this.secArray[i] = [secTop, secBottom]
    };
  } //check_section_pos

  /**
   * スクロール量とsectionの位置を比較して、
   * underlineクラスの付与を操作する関数
   */
  scroll_check() {

    var scrollPos = window.pageYOffset;

    for (var i = 0; i < this.secArray.length; i++) {
      if (this.secArray[i][0] <= scrollPos && this.secArray[i][1] >= scrollPos) {

        i == this.secArray.length;
        this.navList[i].classList.add('is_active');
      } else {
        this.navList[i].classList.remove('is_active');
      }
    };
  } //scrollCheck


}
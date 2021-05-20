import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";



class ScrollProhibit {
  constructor() {
    this.open_btn = document.querySelector(".js-btn-open");
    this.close_btn = document.querySelector(".js-btn-close");
    this.except_area = document.querySelector(".js-except");
  }
  init() {

    // クリックでbodyのスクロール禁止
    this.open_btn.addEventListener("click", () => {
      disableBodyScroll(this.except_area); //禁止させないエリアを指定
    });

    // クリックでbodyのスクロール復活
    this.close_btn.addEventListener("click", () => {
      clearAllBodyScrollLocks();
    });


  }

}

export default ScrollProhibit;
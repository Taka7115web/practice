class Acd {
  constructor() {
    this.ques = $(".js-ques");
  }
  init() {
    if (this.ques.length !== 0) { // アコーディオンがあったら
      this.ques.on("click", function (e) {
        $(e.currentTarget).next(".js-ans").slideToggle();
        $(e.currentTarget).find(".js-plus").toggleClass("acd-hide");
      });
    }

  }

}

export default Acd;
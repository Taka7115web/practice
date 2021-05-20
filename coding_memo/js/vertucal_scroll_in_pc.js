class VerticalScroll {
  constructor() {
    this.target = $(".js-vertical")
  }

  init() {

    if (this.target) {
      this.func(this.target, 60);
    }

  }

  func(target, amount) {
    amount = amount || 120;
    target.bind("DOMMouseScroll mousewheel", (e) => {
      var oEvent = e.originalEvent,
        direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
        position = target.scrollLeft();
      position += direction > 0 ? -amount : amount;
      target.scrollLeft(position);
      e.preventDefault();
    })
  }

}

export default VerticalScroll;

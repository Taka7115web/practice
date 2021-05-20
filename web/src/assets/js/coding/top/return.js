export default class Return {
  constructor() {
    this.divide_wh = 10;
    this.divide_xy = 20;
  }

  /**
   * モニターサイズ
   */
  moni_size(base) {
    var wh = base / 2 - base / this.divide_wh;
    return wh;
  }

  /**
   * 正面モニター座標
   */
  moni_x(w, p_or_m) {
    var x = p_or_m * ((w / 2) - (w / this.divide_xy) - ((w / 2 - w / this.divide_xy) / 2)) + ( p_or_m * ((w / this.divide_xy) / (this.divide_xy * 2)));
    return x;
  }
  moni_y(h, p_or_m) {
    var y = p_or_m * ((h / 2) - (h / this.divide_xy) - ((h / 2 - h / this.divide_xy) / 2)) + ( p_or_m * ((h / this.divide_xy) / (this.divide_xy / 5)));
    return y;
  }

};

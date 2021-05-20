    // 水玉の情報
    var ellipseArr = [];

    // 横幅いっぱいに配置できる列の数
    var horizontalNum = cW / 10;

    // 1列の描画される水玉の数(この数を調整することで全体の見た目を変えられる)
    var verticalNum = cW / 10;



    /**
     * 背景の水玉を描画
     */
    var ellipse = () => {
      // スタイルの定義
      p.angleMode(p.DEGREES);

      // 縦1列を横幅いっぱいになるまでループ
      for (let i = 0; i < horizontalNum; i++) {
        // 水玉の情報を配列へ格納(縦1列の水玉)
        for (let j = 0; j < verticalNum + 1; j++) {
          ellipseArr.push(new Ellipse(i, j));
        }
      }

      console.log(ellipseArr);

    };





    /**
     * クラスの定義
     */
    class Ellipse {
      constructor(row, num) {

        this.row = row;
        this.num = num;

        //  // 水玉の座標を定義
        this.pos = {
          x: 0,
          y: 0
        }


        this.pos = {
          x: this.row * cW / horizontalNum,
          y: this.num * cH / verticalNum
        }

        //  // 列が偶数の時、列の高さを水玉の高さの半分ズラす
        if (this.row % 2 == 0) {
          this.pos.y = this.pos.y + ((cW / horizontalNum) / 2);
        }

        this.draw();

      } //constructor(row, num)


      draw() {
        p.fill("#FCEEEA");
        p.ellipse(this.pos.x, this.pos.y, 5, 5);
      }




    } //class Ellipse;
    /**
     * ①特定の文字数で改行をいれる関数
     * (改行を入れたいテキスト,改行を入れたい倍数の数)
     */
    var txtFilter = (txt, ms) => {

      var adjustedArr;
      var f_str;
      var l_str;
      var c;

      // ストリングを配列に変換
      var txtArr = txt.split('');

      // 改行入れる場所がテキストの何文字目か
      var numArr = [];
      for (let i = 0; i < txtArr.length; i++) {
        if ((i % ms) == 0) {
          numArr.push(i);
        }
      }

      // msがテキストの文字数よりも小さい場合、テキストはそのまま
      if (txtArr.length > ms) {
        // テキストに改行コード「\n」をいれる
        for (let j = 1; j < numArr.length; j++) {

          // カウント
          c = j;

          // 1回目のループだったら
          if (c == 1) {
            // 最初のテキスト
            f_str = txt.slice(0, numArr[j] + c);
            // 最後のテキスト
            l_str = txt.slice(numArr[j] + c);
          } else {
            // 最初のテキスト
            f_str = adjustedArr.slice(0, numArr[j] + c);
            // 最後のテキスト
            l_str = adjustedArr.slice(numArr[j] + c);
          }

          // 調整中のテキスト
          adjustedArr = f_str + "\n" + l_str;

        }
      } else {
        adjustedArr = txt;
      }

      // 最終的に出力するテキスト

      var filteredTxt = adjustedArr;
      return filteredTxt;


    }

    /**
     * ②変数が定義されているかで条件分岐
     */
    if (typeof val !== 'undefined') {} else {}



    /**
     * ③角度をラジアンに変換する関数
     */
    const radians = (degrees) => {
      return degrees * Math.PI / 180;
    } //radians()

    /**
     * ④文字列の中に、特定の文字が入っているか調べる
     */
    var string = '●●●';
    if (string.match(/make/)) {
      console.log("incluede!");
    }


    /**
     * ⑤テキスト行数を調べる(改行コードの登場回数を調べる)
     */
    var string = '●●●';
    var count = (string.match(/\n/g) || []).length;



    /**
     * ⑥西暦を和暦に変換しつつ、文字列でリターン
     */
    var returnDate = () => {
      var today = new Date();

      var year = `${today.getFullYear()}`;
      var month = `${today.getMonth() + 1}月`;
      var day = `${today.getDate()}日`;

      var jaYear = new Date(`${year}`).toLocaleDateString("ja-JP-u-ca-japanese", {
        era: 'long',
        year: 'numeric'
      });;
      var date = `${jaYear}${month}${day}作成`;

      return date;
    };


    /**
     * ⑦西暦をマップ右下に日付を表示
     */
    var returnDate = () => {
      var today = new Date();

      var year = `${today.getFullYear()}`;
      var month = `${today.getMonth() + 1}`;
      var day = `${today.getDate()}`;
      var hours = `${today.getHours()}`;
      var minutes = `${today.getMinutes()}`;

      // 値が1ケタの場合は、10の位に0つけるヘルパー関数
      var returnTrueDateValue = (v) => {
        var st = v.toString();
        var arr = [];
        arr = st.split('');
        if (arr.length == 1) {
          arr.unshift("0");
          v = arr.join('');
        }
        return v;
      };

      // 値が1ケタの場合は、10の位に0つける
      month = returnTrueDateValue(month);
      day = returnTrueDateValue(day);
      hours = returnTrueDateValue(hours);
      minutes = returnTrueDateValue(minutes);

      // 一文化
      var date = `${year}/${month}/${day} ${hours}:${minutes}作成`;

      return date;
    };



 



    /**
     * ⑨現在時刻を算出する
     */

    /**
     * 西暦をマップ右下に日付を表示
     */
    var returnDate = () => {
      var today = new Date();

      var year = `${today.getFullYear()}`;
      var month = `${today.getMonth() + 1}`;
      var day = `${today.getDate()}`;
      var hours = `${today.getHours()}`;
      var minutes = `${today.getMinutes()}`;

      // 値が1ケタの場合は、10の位に0つける
      month = returnTrueDateValue(month);
      day = returnTrueDateValue(day);
      hours = returnTrueDateValue(hours);
      minutes = returnTrueDateValue(minutes);

      // 一文化
      var date = `${year}/${month}/${day} ${hours}:${minutes}作成`;

      return date;
    };


    /**
     * 値が1ケタの場合は、 10の位に0つけるヘルパー関数
     */
    var returnTrueDateValue = (v) => {
      var st = v.toString();
      var arr = [];
      arr = st.split('');
      if (arr.length == 1) {
        arr.unshift("0");
        v = arr.join('');
      }
      return v;
    };


    /**
     * ⑩ランダムカラーを返す
     */

    var return_color = () => {
      var o = Math.round,
        r = Math.random,
        s = 255;
      return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
    }



    /**
     * ⑪郵便番号にハイフンがあるかチェック
     */
    var hyphen = "-";
    var arr = //郵便番号の配列

      arr.forEach(function (item) {
        if (item.post[3] !== "-") {
          var a = item.post.slice(0, 3);
          var b = item.post.slice(3);
          item.post = `${a}${hyphen}${b}`;
        }
      });


    /**
     * ⑫session storage
     */


    var num = sessionStorage.getItem('anim');
    if (num) {
      this.ttlArea();
    }


    /**
     * ⑭htmlの改行コードをJavaScriptの改行コードに変換
     */
    this.name = this.name.replace(/<br>/g, "\n");
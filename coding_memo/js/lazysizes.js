// ①npmインストール
// npm i lazysizes

// ②jsファイルにimport
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// ③img画像の場合
/* <img data-src="target.png" src="dummy.png" alt="" class="lazyload"></img> */

// ④picture画像の場合
/* <picture>
<source data-srcset="target--sp.png" media="(max-width: 769px)">
<img data-src="target.png" src="dummy.png" alt="" class="lazyload">
</picture> */

// ⑤背景画像の場合
<div class="target lazyload">
   {/* background-imageを設定している要素 */}
</div>

/* 所定の位置までスクロールすると、lazyloadedクラスに変わるので、
background-imageを設定 */

// .target{
//   &.lazyloaded{
//     background-image: url('bg.png');
//   }
// }

// ⑥iframeの場合 imgと同様
/* <iframe frameborder="0"
	class="lazyload"
    allowfullscreen=""
    data-src="">
</iframe> */








// 参考
// https://125naroom.com/web/3535
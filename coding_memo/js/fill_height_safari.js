import viewportUnit from 'viewport-units-buggyfill';


class FillHeight {
  constructor() {

  }
  init() {
    if (window.innerWidth < 750) {


      var ua = window.navigator.userAgent.toLowerCase();
      if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1) {
        // 対象端末に絞って対応するならこちら
        // viewportUnit.init();

        // 全ての端末を対象とする場合はこちら。Android Chrome でも現象を確認できたので force がおすすめです。
        viewportUnit.init({
          force: true
        });
      }




    };
  }

}

export default FillHeight;

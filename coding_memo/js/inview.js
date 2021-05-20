import inView from 'jquery-inview'

class Inview {
  constructor() {
    this.target = $('.i-target');
  }
  init() {
    if (this.target.length > 0) { //this.targetが存在したら
      this.target.on('inview', function (event, isInView) {
        $(this).addClass("is_fadeIn");
      });
    }

  }

}

export default Inview;


// .i-target {
//   opacity: 0;
//   transform: translateY(100px);
//   transition: .8s;
//   transition-delay: .3s;

//   @media screen and (max-width: 750px) {
//     transform: translateY(80/750*100vw);
//   }
// }

// .is_fadeIn {
//   opacity: 1;
//   transform: translateY(0);
// }
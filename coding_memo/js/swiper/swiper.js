import Swiper from 'swiper'


class Slider {
  constructor() {

  }
  init() {

    this.swiper = new Swiper('.swiper-container', {
      // breakpoints: {
      //   750: {
      //     // width: 340,
      //     // spaceBetween: 40,
      //     slidesPerView:5,
      //     centeredSlides: true
      //   },
      //   0: {
      //     slidesPerView: 1.3,
      //     spaceBetween: 15,
      //     centeredSlides: true
      //   },
      // },


      autoHeight: true,
      loop: true,
      loopedSlides: 5,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.js-slider-right',
        prevEl: '.js-slider-left',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

    });

  }

}

export default Slider;

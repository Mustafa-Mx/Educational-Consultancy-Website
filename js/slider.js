var swiper = new Swiper('.product-slider', {
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.swiper-pagination',
              clickable: true,
              type : 'bullets'
            }
              ,
  spaceBetween: 30,
  effect: 'fade',
  // initialSlide: 2,
  loop: true,
  navigation: {
      nextEl: '.next',
      prevEl: '.prev'
  },
  // mousewheel: {
  //     // invert: false
  // },
  on: {
      init: function(){
          var index = this.activeIndex;

          var target = $('.product-slider__item').eq(index).data('target');

          console.log(target);

          $('.product-img__item').removeClass('active');
          $('.product-img__item#'+ target).addClass('active');
      }
  }

});

swiper.on('slideChange', function () {
  var index = this.activeIndex;

  var target = $('.product-slider__item').eq(index).data('target');

  console.log(target);

  $('.product-img__item').removeClass('active');
  $('.product-img__item#'+ target).addClass('active');

  if(swiper.isEnd) {
      $('.prev').removeClass('disabled');
      $('.next').addClass('disabled');
  } else {
      $('.next').removeClass('disabled');
  }

  if(swiper.isBeginning) {
      $('.prev').addClass('disabled');
  } else {
      $('.prev').removeClass('disabled');
  }
});

$(".js-fav").on("click", function() {
  $(this).find('.heart').toggleClass("is-active");
});



// const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// const loop = async () => {
//   while (true) {
//     $(document).ready(function(){
//         $('.next').trigger('click');
//       });
//     await wait(3000)
//   }
// }
// loop()


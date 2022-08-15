var swiper = new Swiper('.product-slider', {
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
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


});

swiper.on('slideChange', function () {
  var index = this.activeIndex;

  var target = $('.product-slider__item').eq(index).data('target');

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



const mySwiper = new Swiper('.swiper', {
    speed: 40,
    spaceBetween: 100,
    effect: 'fade',
    navigation: {
      nextEl: '.next',
      prevEl: '.prev'
  
    },
  
  });
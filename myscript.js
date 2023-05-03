// $('.slider').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
// //    asNavFor: '.slider-for',
//   dots: true,
//   focusOnSelect: true,
// });

$('.slider-2').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
//    asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 800,
  arrows: false,
   responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 786, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } },
        ]
});

jQuery( document ).ready(function($) {
  $(function() {

// Card's slider
  var $carousel = $('.slider');

  $carousel
    .slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
  arrows: true,
  autoplay: true,
  infinite: true,
      fade: false,
      adaptiveHeight: true,
      autoplaySpeed: 300,
       responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 786, settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } },
        ]
  });

});

  });
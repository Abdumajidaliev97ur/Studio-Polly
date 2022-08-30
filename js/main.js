$(function () {
  $('.location__inner').slick({
    slidesToShow: 2.9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,

        }
      }
    ]
  });

  $('.slide__inner__box-one').slick({
    slidesToShow: 2.9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1,

        }
      }
    ]
  });

  $('.slide__inner__box-two').slick({
    slidesToShow: 2.9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1,

        }
      }
    ]
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });
});


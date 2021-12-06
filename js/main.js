$(function () {
  $(".content-slider").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="./images/prev.svg" alt="prew"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./images/next.svg" alt="next"></button>',
    // vertical: true,
    fade: true,
    responsive: [
      {
        breakpoint: 361,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  });

  $(".product__name").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: ".product__content",
    vertical: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 891,
        settings: {
          arrows: false,
          vertical: false,
          slidesToShow: 3,
          centerMode: true,
        },
      },
    ],

    nextArrow:
      '<button type="button" class="product-next"><img src="./images/product-next.svg" alt="next"></button>',
    prevArrow:
      '<button type="button" class="product-prev"><img src="./images/product-prev.svg" alt="prew"></button>',
  });

  $(".product__content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".product__name",
    fade: true,
    arrows: false,
  });

  $(".menu__list-btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });
});

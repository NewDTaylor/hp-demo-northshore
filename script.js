"use strict";

AOS.init();
$(document).ready(function () {
  $(".hp-seg2-slide").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

$(document).ready(function () {
  $(".test").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

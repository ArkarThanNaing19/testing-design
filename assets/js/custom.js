function goToProducts() {
  alert("hello");
}

$.get("nav.html", function (data) {
  $("#nav").replaceWith(data);
});

$.get("layouts/footer.html", function (data) {
  $("#footer").replaceWith(data);
});

jQuery(document).ready(function () {
  $("#newProducts-slide").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: false,
    autoplayTimeout: 10000,
    items: 4,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
    dots: false,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1920: {
        items: 4,
      },
    },
  });

  $("#bestSeller-slide").slick({
    // centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplayTimeout: 50000,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  });
});

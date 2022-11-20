(function (e) {
  "use strict";
  // console.log(e);
  jQuery(document).ready(function () {
    e(window).on("load", function () {
      e("#preloader_active").fadeOut("slow");
    }),
      e.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "slide",
      }),
      e("nav.mobilemenu__nav").meanmenu({
        meanMenuClose: "X",
        meanMenuCloseSize: "18px",
        meanScreenWidth: "991",
        meanExpandableChildren: !0,
        meanMenuContainer: ".mobile-menu",
        onePage: !0,
      }),
      new WOW().init();
    function s() {
      e(window).on("scroll", function () {
        var i = e(".sticky__header"),
          t = i.position();
        if (i.length) {
          var o = i.top;
          e(window).on("scroll", function () {
            var g = e(window).scrollTop();
            g > t.top + 250
              ? i.addClass("is-sticky")
              : i.removeClass("is-sticky");
          });
        }
      });
    }
    s(),
      e(".testext_active").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        draggable: !1,
        prevArrow:
          '<button type="button" class="wen-slick-prev"><i class="fa fa-arrow-left"></i></button>',
        nextArrow:
          '<button type="button" class="wen-slick-next"><i class="fa fa-arrow-right"></i></button>',
        fade: !0,
        dots: !1,
        asNavFor: ".thumb_active",
      }),
      e(".thumb_active").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".testext_active",
        dots: !1,
        arrows: !1,
        centerMode: !0,
        focusOnSelect: !0,
        centerPadding: "10px",
        responsive: [
          {
            breakpoint: 576,
            settings: { dots: !1, slidesToShow: 1, centerPadding: "0px" },
          },
          {
            breakpoint: 769,
            settings: {
              autoplay: !0,
              dots: !1,
              slidesToShow: 2,
              centerMode: !1,
            },
          },
          {
            breakpoint: 420,
            settings: {
              autoplay: !0,
              dots: !1,
              slidesToShow: 1,
              centerMode: !1,
            },
          },
        ],
      }),
      e(".brand__activation").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 1e4,
        items: 6,
        navText: [
          '<i class="fa fa-arrow-left"></i>',
          '<i class="fa fa-arrow-right"></i>',
        ],
        dots: !1,
        lazyLoad: !0,
        responsive: {
          0: { items: 2 },
          1920: { items: 6 },
          768: { items: 4 },
          576: { items: 3 },
          420: { items: 3 },
        },
      }),
      e(".productcategory__slide").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 1e4,
        items: 4,
        navText: [
          '<i class="fa fa-arrow-left"></i>',
          '<i class="fa fa-arrow-right"></i>',
        ],
        dots: !1,
        lazyLoad: !0,
        responsive: {
          0: { items: 1 },
          992: { items: 4 },
          768: { items: 3 },
          576: { items: 2 },
          1920: { items: 4 },
        },
      }),
      e(".productcategory__slide--2").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 1e4,
        items: 3,
        navText: [
          '<i class="fa fa-arrow-left"></i>',
          '<i class="fa fa-arrow-right"></i>',
        ],
        dots: !1,
        lazyLoad: !0,
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          1920: { items: 3 },
        },
      });
    function n() {
      var i = e(".block__active"),
        t = e(".block_content");
      i.on("click", function (o) {
        o.preventDefault(), t.toggleClass("is-visible");
      }),
        e(".close__wrap").on("click", function () {
          t.removeClass("is-visible");
        });
    }
    n();
    function a() {
      var i = e(".search__active"),
        t = e(".search_active");
      i.on("click", function (o) {
        o.preventDefault(), t.toggleClass("is-visible");
      }),
        e(".close__wrap").on("click", function () {
          t.removeClass("is-visible");
        });
    }
    a();
    function l() {
      var i = e(".cartbox_active"),
        t = e(".minicart__active");
      i.on("click", function (o) {
        o.preventDefault(), t.toggleClass("is-visible");
      }),
        i.on("click", function (o) {
          o.preventDefault(), t.toggleClass("");
        }),
        e(".micart__close").on("click", function () {
          t.removeClass("is-visible");
        });
    }
    l();
    function r() {
      var i = e(".setting__active"),
        t = e(".setting__block");
      i.on("click", function (o) {
        o.preventDefault(), t.toggleClass("is-visible");
      }),
        i.on("click", function (o) {
          o.preventDefault(), t.toggleClass("");
        });
    }
    r(),
      e(".slide__activation").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 1e4,
        items: 1,
        navText: [
          '<i class="fa fa-arrow-left"></i>',
          '<i class="fa fa-arrow-right"></i>',
        ],
        dots: !1,
        lazyLoad: !0,
        responsive: { 0: { items: 1 }, 1920: { items: 1 } },
      });
    function c() {
      var i = e(".currency-trigger");
      i.on("click", function () {
        e(this).siblings(".switcher-dropdown").toggleClass("is-visible");
      });
    }
    c(),
      e(".fancybox").fancybox({
        prevEffect: "none",
        nextEffect: "none",
        helpers: {
          title: { type: "outside" },
          thumbs: { width: 50, height: 50 },
        },
      });
    var u = e(".img_static").outerWidth(),
      d = e(".img_static").outerHeight();
    e("#cms_play").on("click", function () {
      e(this).hide("fast"),
        e(".img_static").fadeOut("fast"),
        e(".static_video").append(
          '<iframe class="added_video" width="' +
            u +
            'px" height="' +
            d +
            'px" src="https://www.youtube.com/embed/0fYMLQjK-MI?rel=0&autoplay=1" frameborder="0"></iframe>'
        );
    }),
      e(".gallery__masonry__activation").imagesLoaded(function () {
        e(".gallery__menu").on("click", "button", function () {
          var t = e(this).attr("data-filter");
          i.isotope({ filter: t });
        }),
          e(".gallery__menu button").on("click", function () {
            e(".gallery__menu button").removeClass("is-checked"),
              e(this).addClass("is-checked");
            var t = e(this).attr("data-filter");
            return $containerpage.isotope({ filter: t }), !1;
          });
        var i = e(".masonry__wrap").isotope({
          itemSelector: ".gallery__item",
          percentPosition: !0,
          transitionDuration: "0.7s",
          masonry: { columnWidth: ".gallery__item" },
        });
      });
    function f() {
      var i = e(".showlogin"),
        t = e(".checkout_login");
      i.on("click", function (o) {
        o.preventDefault(), t.slideToggle(), t.remove("style");
      });
    }
    f();
    function m() {
      var i = e(".showcoupon"),
        t = e(".checkout_coupon");
      i.on("click", function (o) {
        o.preventDefault(), t.slideToggle(), t.remove("style");
      });
    }
    m(),
      e(".wn__accountbox").on("click", function () {
        e(".account__field").slideToggle().remove("style");
      }),
      e(".differt__address").on("click", function () {
        e(".differt__form").slideToggle().remove("style");
      }),
      e(".dropdown").parent(".drop").css("position", "relative"),
      e(".center").slick({
        centerMode: !0,
        centerPadding: "0px",
        slidesToShow: 7,
        responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: !0,
              dots: !1,
            },
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: !0,
              dots: !1,
            },
          },
          {
            breakpoint: 970,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: !0,
              dots: !1,
            },
          },
          {
            breakpoint: 768,
            settings: { arrows: !1, centerMode: !0, slidesToShow: 3 },
          },
          {
            breakpoint: 480,
            settings: { arrows: !1, centerMode: !0, slidesToShow: 1 },
          },
        ],
      });
  });
})(jQuery);

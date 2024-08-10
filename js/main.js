
function main() {

  (function () {
    'use strict';

    /* ==============================================
     Testimonial Slider
     =============================================== */

    $('a.page-scroll').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({ scrollTop: target.offset().top - 40 }, 900);
          return false;
        }
      }
    });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function () {
      var navHeight = $(window).height() - 500;
      if ($(window).scrollTop() > navHeight) {
        $('.navbar-default').addClass('on');
      } else {
        $('.navbar-default').removeClass('on');
      }
    });

    var scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '.navbar-default', offset: 80 });

    window.onscroll = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        //logo-lg
        $(".navbar-brand img").addClass("p-2");
      } else {
        //p-2

        $(".navbar-brand img").removeClass("p-2");
      }
    }


  }());
}

main();
//= jquery.min.js
//= jquery.overlayScrollbars.js
//= jquery.magnific-popup.min.js

$("#create-cup-open").on("click", function() {
  if (overlay.isAnimating) {
    return false;
  }
  overlay.toggle();
  if (overlay.isOpened) {
    document.body.style.overflowY = "hidden";
    //$("#slider-cups").slick("slickGoTo", 0);
    $("#create-cup-screen").addClass("js-active");
    $("#create-cup-screen-title")
    .children()
    .each(function(i) {
      $(this)
      .delay(800 + 75 * i)
      .fadeIn(300);
    });
    $("#slider-cups .cup").each(function(i) {
      if (i < 7) {
        $(this)
        .delay(1000 + 200 * i)
        .fadeIn(1000);
      } else {
        $(this).show();
      }
    });
    $("#slider-cups .slick-dots").addClass("js-active");

    $("#slider-cups-next").addClass("js-active");
    $("#slider-cups-prev").addClass("js-active");
  } else {
    document.body.style.overflowY = "visible";
    $("#create-cup-screen").removeClass("js-active");
    $("#create-cup-screen-title")
    .children()
    .each(function(i) {
      $(this).hide();
    });
    $("#slider-cups .cup").each(function(i) {
      $(this).hide();
    });
    $("#slider-cups .slick-dots").removeClass("js-active");
    $("#slider-cups-next").removeClass("js-active");
    $("#slider-cups-prev").removeClass("js-active");
  }
});

$(".burger-menu").on("click", function() {  
  $(".menu-header").toggleClass('is-active');
  $("body").toggleClass('overflow');
})

/* Popup Window */

$(".popup").magnificPopup({
  type: 'inline',
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
});

/* Popup Window End */

//= jquery.min.js
//= jquery.magnific-popup.min.js
//= PageScroll2id.min.js

window.onload = function(){
  // $("body").toggleClass('opacity');
  $("#overlayer").delay(1000).fadeOut("slow");
  overlay.toggle();
  setTimeout(function() {
    overlay.toggle();
  }, 800);
}

$(".burger-menu").on("click", function() {  
  $(".menu-header").toggleClass('is-active');
  $("body").toggleClass('overflow');
});

$('.scroll-section').on("click", function() {
  if($('.menu-header').has('.is-active')) {
    $('.menu-header').removeClass('is-active');
  }
});

$(".scroll-section").mPageScroll2id();

/* Popup Window */

$(".popup").magnificPopup({
  type: 'inline',
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
});

/* Popup Window End */

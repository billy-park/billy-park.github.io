$(document).ready(function() {

  /* Scrollspy */
  $('body').scrollspy({ target: '#portfolioNavbar' })

  /* Fade in on scroll script */
  $(window).scroll(function() {
    $('.hidden').each(function(i) {

      //var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_object = $(this).position().top + 250;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      bottom_of_window = bottom_of_window + 200;

      if(bottom_of_window > bottom_of_object){

        $(this).animate({'opacity':'1'}, 500);

      }
    });
  });

  /* Smooth scrolling for navlinks */
  $('a[href^="#"]').on('click',function (e) {

      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 75
      }, 900, 'swing');

  });
});

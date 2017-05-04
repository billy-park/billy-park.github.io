$(document).ready(function() {

  //Add so that the correct navbutton is highlighted when in that section

  //portfolioLine = $('#portfolioWrapper').offset().top;
  //this is iffy because of the fact that the offset will change once the navbar moves
  navbarLine = $('#landing').offset().top + 158;
  $(window).resize(function(){
    navbarLine = $('#landing').offset().top + 158;
    console.log('resize!');
    console.log(navbarLine);
  });
  $('#navbar').addClass("navbarDefault");
  if ($(window).scrollTop() > navbarLine) {
      $('#navbar').addClass("navFixed");
  };

  //apply button style on mouseover and remove on mouseout
  $('#navbar > .button').hover(function(){
    $(this).addClass("buttonHover");
  })
  $('#navbar > .button').mouseout(function(){
    $(this).removeClass("buttonHover");
  })

  $(window).scroll(function(){
    if ($(window).scrollTop() > navbarLine) {
      $('#navbar').addClass("navFixed");
    }
    if ($(window).scrollTop() < navbarLine) {
      $('#navbar').removeClass("navFixed");
    }
  })

  //scroll to anchors
  //credit to: https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 58
        }, 1000, 'swing');
    }
  });

  //prevent submit button from staying in focus
  $(".submitBtn").mouseup(function(){
    $(this).blur();
  })

  //focus navbar button for current section

  //expand/shrink project information div
  /* removed because of potential issues with mobile devices
  $('.projectImageContainer').hover(function(){
    $(this).find('.projectImageOverlay').animate({height: "88px"}, 300);
  });
  $('.projectImageContainer').mouseout(function(){
    $(this).find('.projectImageOverlay').animate({height: textHeightDefault});
  });
  */
  /*$('navbar > .button').click(function(){
    $(this).scrollTop
  })*/

  //switch navbar classes depending on location on page
  /*if($('#navbar').offset().top < portfolioLine ) {
    $('#navbar').addClass("navbarDefault");
    $('#navbar').removeClass("navbarAlt");
  } else {
    $('#navbar').addClass("navbarAlt");
    $('#navbar').removeClass("navbarDefault");
  };

  $(window).scroll(function() {
    if($('#navbar').offset().top > portfolioLine ) {
      $('#navbar').addClass("navbarAlt");
      $('#navbar').removeClass("navbarDefault");
    } else {
      $('#navbar').removeClass("navbarAlt");
      $('#navbar').addClass("navbarDefault");
    }
  });
*/
});

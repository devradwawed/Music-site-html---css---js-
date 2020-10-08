$(document).ready(function () { 


  // header height 
  $(function () {

      $(".header").height($(window).height());

      $(window).resize(function() {
      
        $(".header").height($(window).height());
      
      })

  });


  //loading page 

  $(window).on('load' , function () {

    $('.loading').fadeOut(2000);
  })





  // navberColor on scroll

  $(window).scroll(function () {

    if($(window).scrollTop() >= 140){

      $("nav").css({

        'backgroundColor' : '#051024',
        'padding' : '10px 0',
        'boxShadow': '8px 0 5px #000'
      })


    }else{
      $("nav").css({

        'backgroundColor' : 'transparent',
        'padding' : '25px 0',
        'boxShadow' : 'none'
      })
    }



  });

  // navberColor   no scroll
  if($(window).scrollTop() >= 140){

    $("nav").css({

      'backgroundColor' : '#051024',
      'padding' : '10px 0',
      'boxShadow': '8px 0 5px #000',
    })
  }else{
    $("nav").css({

      'backgroundColor' : 'transparent',
      'padding' : '25px 0',
      'boxShadow' : 'none',
    })
  }

  // smppth scroll

  $("nav li a").on('click' , function () {

  $('html , body').animate({

    scrollTop : $(  '#'+$(this).data('scroll')).offset().top - 80

  } , 1000)

  })

  // add active to links
  $('nav li a').on('click' , function () {

  $(this).addClass('active').parent().siblings().find('a').removeClass('active');

  })
  
  
  $(window).scroll(function () {

    $('section').each( function() {


      if($(window).scrollTop() +200 >= $(this).offset().top){

        var secId = $(this).attr('id');

        $('nav li a').removeClass('active')

        $('nav li a[data-scroll="' + secId +'"]').addClass('active')

      }
    })
    
    //button Up

    if($(window).scrollTop() >=1000){
      $('.up').fadeIn(1000)
    }
    else{
      $('.up').fadeOut(1000)
    }

  })
  
  //click on buton Up 
  $('.up').on('click' , function () {

      $('body,html').animate({

        scrollTop: 0

      } ,1000)

  })



  $(function() {  
    $("body").niceScroll({

    cursorcolor : '#ff275e',
    cursorwidth : '10px',
    cursorborder : 'none',
    zindex : '99999'
    });
});

// swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 6,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});





});





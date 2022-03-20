$(function(){
  // hambargur start
  function slideMenu() {
    var activeState = $("#menu-container .menu-list").hasClass("active");
    $("#menu-container .menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
  }
  $("#menu-wrapper").click(function(event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active");
    slideMenu();

    $("body").toggleClass("overflow-hidden");
  });

    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover:false,
        arrows:true,
        prevArrow:".left",
        nextArrow:".right",
      });

      $('.counter_2').counterUp({
        delay: 10,
        time: 3000
    });
    $('.about-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover:false,
      arrows:false,
      dots:true,
      infinite:true,
      slidesToScroll:1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
    });

    $('.comment-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2000,
      pauseOnHover:false,
      arrows:true,
      prevArrow:".left2",
      nextArrow:".right2",
    });

    $('.team-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover:true,
      arrows:false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
    });
    //sticky
    $(window).scroll(function(){
      var top=$(this).scrollTop();
      if(top>200){
        $(".navbar").addClass("sticky-menu");
      }
      else{
      $(".navbar").removeClass("sticky-menu");
      }

      if(top>500){
        $(".back-to-top").fadeIn(300)
      }
      else{
        $(".back-to-top").fadeOut(300)
      }
      
    });
    //back to top
    $(".back-to-top").click(function(){
      $("html,body").animate({scrollTop:0},1000)
    })
    
    
    //venobox
    new VenoBox({
      selector: '.my-image-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'wander'
  });
  new VenoBox({
    selector: '.my-video-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

//scroll-spy & Smooth-scrolling
var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 40
  }, 1000);
});
$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  scrollLink.each(function () {
    var sectionhead = $(this.hash).offset().top - 60;
    if (scrollTop >= sectionhead) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});


  // $(".span1").click(function(){
  //   $(".span1").css("background","black")
  // })
})


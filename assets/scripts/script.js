    
$(document).ready(function () {
    // переключение табов в 'about'
    $(".tabs__item").not(":first").hide();
    $(".tabs__row .tabs__data").click(function() {
        $(".tabs__row .tabs__data").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    // slick slider для 'products'
    $('.products__slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      arrows: true,
      prevArrow: '<div class="products__prev-arrow"><img src="./assets/images/left_green.png" alt="arrow left" class="prev-arrow"></div>',
      nextArrow: '<div class="products__next-arrow"><img src="./assets/images/right_green.png" alt="arrow right" class="next-arrow"></div>',
      responsive: [{
        breakpoint: 1300,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1000,
            settings: {
              slidesToShow: 1,
            }
        },
      ]
      
    });

     // slick slider для отзывов
    $('.testimonials__slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      prevArrow: '<div class="testimonial__prev-arrow"><img src="./assets/images/left_white.png" alt="arrow left" class="prev-arrow"></div>',
      nextArrow: '<div class="testimonial__next-arrow"><img src="./assets/images/right_white.png" alt="arrow right" class="next-arrow"></div>',
    });

    // плавный переход к секциям
    $(".navigation__menu").on('click', 'a', function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
    })
  
  //переход к секции 'products' по и see more products и переход к секции 'home' по стрелочке
    $(".header__description").on('click', 'a', function (event) {
      event.preventDefault();
      let id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
    })
  
  // бургер меню
  $('.navigation__burger-menu').click(function(){
        $('.navigation__menu').toggleClass('menu-open');
    });
 
    
}) 


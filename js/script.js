 $(document).ready(function () {

    // car details carousel
  // Resize and refresh page. slider-two slideBy bug remove
  var changeSlide = 4; // mobile -1, desktop + 1
  var slide = changeSlide;
  if ($(window).width() < 600) {
    var slide = changeSlide;
    slide--;
  } else if ($(window).width() > 999) {
    var slide = changeSlide;
    slide++;
  } else {
    var slide = changeSlide;
  }

  $(".one").owlCarousel({
    nav: false,
    items: 1,
    margin: 5,
    autoplay: 5000,
    rtl: true,
  });
  $(".two").owlCarousel({
    nav: false,
    margin: 5,
    rtl: true,
    responsive: {
      0: {
        items: changeSlide - 1,
        slideBy: changeSlide - 1,
      },
      600: {
        items: changeSlide,
        slideBy: changeSlide,
      },
      1000: {
        items: changeSlide + 1,
        slideBy: changeSlide + 1,
      },
    },
  });
  var owl = $(".one");
  owl.owlCarousel();
  owl.on("translated.owl.carousel", function (event) {
    $(".right").removeClass("nonr");
    $(".left").removeClass("nonl");
    if ($(".one .owl-next").is(".disabled")) {
      $(".slider .right").addClass("nonr");
    }
    if ($(".one .owl-prev").is(".disabled")) {
      $(".slider .left").addClass("nonl");
    }
    $(".slider-two .item").removeClass("active");
    var c = $(".slider .owl-item.active").index();
    $(".slider-two .item").eq(c).addClass("active");
    var d = Math.ceil((c + 1) / slide) - 1;
    $(".slider-two .owl-dots .owl-dot").eq(d).trigger("click");
  });
  $(".right").click(function () {
    $(".slider .owl-next").trigger("click");
  });
  $(".left").click(function () {
    $(".slider .owl-prev").trigger("click");
  });
  $(".slider-two .item").click(function () {
    var b = $(".item").index(this);
    $(".slider .owl-dots .owl-dot").eq(b).trigger("click");
    $(".slider-two .item").removeClass("active");
    $(this).addClass("active");
  });
  var owl2 = $(".two");
  owl2.owlCarousel();
  owl2.on("translated.owl.carousel", function (event) {
    $(".right-t").removeClass("nonr-t");
    $(".left-t").removeClass("nonl-t");
    if ($(".two .owl-next").is(".disabled")) {
      $(".slider-two .right-t").addClass("nonr-t");
    }
    if ($(".two .owl-prev").is(".disabled")) {
      $(".slider-two .left-t").addClass("nonl-t");
    }
  });
  $(".right-t").click(function () {
    $(".slider-two .owl-prev").trigger("click");
  });
  $(".left-t").click(function () {
    $(".slider-two .owl-next").trigger("click");
  });
});  
$(function () {
    // الكود اللي بيعمل set-bg بعد التنقل بين التابات
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
});


;(function($) {
    "use strict";
    
    var nav_offset_top = $('header').height(); 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.main_header_area, .main_header_three, .box_header_four').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".main_header_area, .main_header_three, .box_header_four").addClass("navbar_fixed");
                } else {
                    $(".main_header_area, .main_header_three, .box_header_four").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
	
	
    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider(){
        if ( $('#main_slider').length ){
            $("#main_slider").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:4000000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:992,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1199,992,767,480],
                gridwidth:[1170,970,750,700,400],
                gridheight:[625,625,550,550,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider();
    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider3(){
        if ( $('#main_slider3').length ){
            $("#main_slider3").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:4000000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:992,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1199,992,767,480],
                gridwidth:[1170,970,750,700,400],
                gridheight:[798,798,600,600,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider3();
    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider4(){
        if ( $('#main_slider4').length ){
            $("#main_slider4").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:4000000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:767,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1370,1199,992,767,480],
                gridwidth:[1170,1170,970,750,540,400],
                gridheight:[767,767,767,600,600,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider4();
    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider5(){
        if ( $('#main_slider5').length ){
            $("#main_slider5").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:4000000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:992,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1370,1199,992,767,480],
                gridwidth:[1170,1170,970,750,700,400],
                gridheight:[620,620,620,550,550,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider5();
    
    /*----------------------------------------------------*/
    /*  Cake Feature Slider
    /*----------------------------------------------------*/
    function cake_carousel(){
        if ( $('.cake_feature_slider').length ){
            $('.cake_feature_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 4,
                nav:true,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                navContainerClass: 'cake_feature_slider',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    430: {
                        items: 2, 
                    },
                    768: {
                        items: 3, 
                    },
                    992: {
                        items: 4,
                    }
                }
            })
        }
    }
    cake_carousel();
	
    /*----------------------------------------------------*/
    /*  Cake Feature Slider
    /*----------------------------------------------------*/
    function client_say_slider(){
        if ( $('.client_says_slider').length ){
            $('.client_says_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 1,
                nav:true,
                autoplay: true,
                smartSpeed: 1500,
                dots:false,
                navContainerClass: 'client_says_slider',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
            })
        }
    }
    client_say_slider();
	
    /*----------------------------------------------------*/
    /*  Cake Feature Slider
    /*----------------------------------------------------*/
    function arivals_slider(){
        if ( $('.arivals_slider').length ){
            $('.arivals_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 2,
                nav:false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    420: {
                        items: 2,
                    },
                }
            })
        }
    }
    arivals_slider();
    
    /*----------------------------------------------------*/
    /*  Special Recipe Slider
    /*----------------------------------------------------*/
    function recipe_slider(){
        if ( $('.special_recipe_slider').length ){
            $('.special_recipe_slider').owlCarousel({
                loop:true,
                margin: 0,
                items: 1,
                nav:false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                responsiveClass: true,
            })
        }
    }
    recipe_slider();	
	
	/*----------------------------------------------------*/
    /*  portfolio_isotope
    /*----------------------------------------------------*/
    
    
    /*----------------------------------------------------*/
    /*  Portfolio Isotope js
    /*----------------------------------------------------*/
    function portfolio_isotope(){
        if ( $('.portfolio_filter ul li').length ){
            // Add isotope click function
            $(".portfolio_filter ul li").on('click',function(){
                $(".portfolio_filter ul li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".grid_portfolio_area").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    
    portfolio_isotope();
	
	
	$( function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 10, 250 ],
			slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	});
    
})(jQuery)

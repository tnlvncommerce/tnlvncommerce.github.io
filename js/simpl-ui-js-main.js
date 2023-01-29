(function ($) {
    "use strict";
    /*=================== home slider ===================*/
    jQuery('#home-slider-one').sliderPro({
        autoplayDelay: 7000,
        autoplayOnHover: 'none',
        width: 2000,
        height: 700,
        fade: true,
        arrows: true,
        aspectRatio: -1,
        fullScreen: true,
        shuffle: false,
        smallSize: 500,
        mediumSize: 1000,
        largeSize: 2000,
        autoplay: true,
        buttons: true,
        autoScaleLayers: false,
        forceSize: 'fullWidth',
        autoHeight: false,
        imageScaleMode: 'cover',
		/*==== delete this part if you want to the slider images to be responsive in mobile =====*/
        breakpoints: {
            1300: {
                aspectRatio: 2
            },
            1024: {
                aspectRatio: 1.5
            },
            900: {
                aspectRatio: 1.5
            },
            650: {
                aspectRatio: 1
            },
            480: {
                aspectRatio: .6
            }
        }
		/*==== delete this part if you want to the slider images to be responsive in mobile =====*/
		
    });


    /*=================== Bootstrap native tool tip(must be at the top-near position) ===================*/
    jQuery('[data-toggle="tooltip"]').tooltip();
	
    /*=================== magnific pop portfolio home ===================*/
    jQuery('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });
	
    /*=================== Responsive Main Top Menu ===================*/
    jQuery(document).on('click', '.rett .dropdown-menu', function (e) {
        e.stopPropagation();
    });

    // on hover dropdown	
    if (jQuery(window).width() > 760) {
        jQuery('ul.nav li.dropdown', this).on("mouseenter", function () {
            jQuery('.dropdown-menu', this).stop(true, true).fadeIn(500);
        });
        jQuery('ul.nav li.dropdown', this).on("mouseleave", function () {
            jQuery('.dropdown-menu', this).stop(true, true).fadeOut(500);
        });
    }

    /*=================== owlCarousel ===================*/
    jQuery(".testimonials-slider").owlCarousel({
        autoPlay: true,
        singleItem: true,
        navigation: true,
        navigationText: ["<span><i class=\"lnr lnr-chevron-left\"></i></span>", "<span><i class=\"lnr lnr-chevron-right\"></i></span>"]
    });
    jQuery(".core-features-slider").owlCarousel({
        autoPlay: 2000, //Set AutoPlay to 2 seconds
        singleItem: true,
        navigation: false,
        navigationText: ["<span><i class=\"lnr lnr-chevron-left\"></i></span>", "<span><i class=\"lnr lnr-chevron-right\"></i></span>"]
      	
    });
	
    /*=================== scroll to top ===================*/
    jQuery(".scrollToTop").hide();
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.scrollToTop').fadeIn();
        } else {
            jQuery('.scrollToTop').fadeOut();
        }
    });
    jQuery(".scrollToTop").on("click", function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
   
	/*=================== on scroll element animation // will not work when window width is less than 400px ===================*/
	    if (jQuery( window ).width() < 990) {			
			var $foo = jQuery('#css3-animate-it-css');
			$foo.attr("href","");
			var $foop = jQuery('#css3-animate-it-js'); 
			$foop.attr("src","");		
    }

    /*=================== preloader ===================*/
    //<![CDATA[
    jQuery(window).load(function () { // makes sure the whole site is loaded
        jQuery('#status').fadeOut(); // will first fade out the loading animation
        jQuery('#preloader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
    });
    //]]>
	
    /*=================== auto counter up ===================*/
    jQuery(document).ready(function (jQuery) {
        jQuery('.counter').counterUp({
            delay: 20,
            time: 3000
        });
    });
	
    /*=================== one page navigation ===================*/
    jQuery(document).ready(function (jQuery) {
        jQuery('#nav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 750,
          	offsetHeight: 70,
        });
    });

})(jQuery);
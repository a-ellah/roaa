/*
  [JS Index]
*/


/*
  1. preloader
  2. fadeIn.element
  3. navigation
    3.1. page scroll
	3.2. highlight navigation
	3.3. close mobile menu
	3.4. highlight navigation
	3.5. collapse navigation
  4. to top arrow animation
  5. home fadeOut animation
  6. modal
  7. slick slider
    7.1. slick fullscreen slideshow ZOOM/FADE
	7.2. slick featured work
  8. owl slider
    8.1. owl news carousel slideshow
	8.2. owl testimonials carousel slider
  9. magnificPopup
    9.1. magnificPopup works gallery
	9.2. magnificPopup works gallery slider
  10. facts counter
  11. skills bar
  12. contact form
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(600).css({
                display: "none"
            }).fadeIn(800);
        }, 0);
    });
	
    // 3. navigation
    // 3.1. page scroll
    $(".page-scroll").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 57
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
    // 3.2. highlight navigation
    $("body").scrollspy({
        target: ".navbar",
        offset: 58
    });
    // 3.3. close mobile menu
    $(".navbar-collapse ul li a").on("click", function() {
        $(".navbar-toggle:visible").click();
    });
    // 3.4. highlight navigation
    $(".link-underline-menu").on("click", function() {
        $(".link-underline-menu").removeClass("active");
        $(this).addClass("active");
    });
	
    $(window).on("scroll", function() {
        // 3.5. collapse navigation
        if ($(".navbar").offset().top > 50) {
            $(".navbar-bg-switch").addClass("main-navigation-bg");
        } else {
            $(".navbar-bg-switch").removeClass("main-navigation-bg");
        }
		
        // 4. to top arrow animation
        if ($(this).scrollTop() > 400) {
            $(".to-top-arrow").addClass("show");
        } else {
            $(".to-top-arrow").removeClass("show");
        }
		
        // 5. home fadeOut animation
        $(".introduction-wrapper, .social-icons-wrapper, .scroll-indicator-wrapper, .copyright-home").css("opacity", 1 - $(window).scrollTop() / 500);
    });
	
    // 6. modal
    $(".contact-modal-launcher, .contact-modal-closer").on("click", function() {
        if ($(".contact-modal").hasClass("open")) {
            $(".contact-modal").removeClass("open");
        } else {
            $(".contact-modal").addClass("open");
        }
    });
	
    // 7. slick slider
    // 7.1. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	// 7.2. slick featured work
    $(".slick-left").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: ".slick-right",
        autoplay: false,
        autoplaySpeed: 3500,
        cssEase: "ease",
        speed: 500
    });
    $(".slick-right").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: ".slick-left",
        autoplay: false,
        autoplaySpeed: 3500,
        cssEase: "ease",
        speed: 500
    });
    $(".slick-bottom").slick({
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'ease',
        speed: 500,
        useCss: true,
        focusOnSelect: true,
        dots: true,
        responsive: [{
            breakpoint: 1023,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "0px",
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "0px",
                slidesToShow: 3
            }
        }]
    });
    $(".slick-left").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        var classname = "bar" + nextSlide;
        document.getElementById("bar").className = classname;
        $(".slick-bottom").slick("slickGoTo", nextSlide);
    });
    $(".slick-bottom").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        $(".slick-left, .slick-right").slick("slickGoTo", nextSlide);
    });
	
    // 8. owl slider
    // 8.1. owl news carousel slideshow
    $("#news-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
    // 8.2. owl testimonials carousel slider
    $(".testimonials-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: false
    });
	
    // 9. magnificPopup
    // 9.1. magnificPopup works gallery
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: false,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
        fixedContentPos: false
    });
	// 9.2. magnificPopup works gallery slider
    $(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
			removalDelay: 100,
			mainClass: "mfp-fade",
			fixedContentPos: false
        });
    });
	
    // 10. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
	
    // 11. skills bar
    $(".show-skillbar").appear(function() {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });
	
	// 12. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });


});
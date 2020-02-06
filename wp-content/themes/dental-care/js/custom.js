/*--------------------------------------------------------------
 >>> TABLE OF CONTENTS:
 ----------------------------------------------------------------
 1.0 Mobile Menu
 2.0 Back to top
 3.0 Sticky Header
 4.0 Search Toggle
 5.0 Fit Vids
 6.0 Lightbox
 7.0 Isotope
 8.0 Blog Gallery
 9.0 Blog Grid Gallery Slider
 10.0 Animations
 11.0 Smooth Scrolling 
 12.0 Counter
 13.0 Icon Box
 14.0 Testimonials Widget
 15.0 Before & After
 16.0 Blog Carousel
 17.0 Brand Carousel
 18.0 Product Carousel
 19.0 Service Carousel
 20.0 Team Carousel
 21.0 Testimonial Carousel
 --------------------------------------------------------------*/

jQuery(document).ready(function ($) {
    "use strict";

    /*--------------------------------------------------------------
     1.0 Mobile Menu
     --------------------------------------------------------------*/
    var side = $(".mobile-header").data('side');
    var displace_en = $(".mobile-header").data('displace');
    var displace;
    
    if(displace_en == ''){
        displace_en = 'on';
    }
    
    if(side == ''){
        side = 'right';
    }

    if(displace_en == 'off'){
        displace = false;
    }else{
        displace = true
    }
    $('#mobile-menu-toggle-icon').sidr({
        side: side,
        speed: 500,
        name: 'mobile-menu',
        source: '.mobile-menu',
        displace: displace
    });

    $('body').on("click", function () {
        $.sidr('close', 'mobile-menu');
    });

    /*--------------------------------------------------------------
     2.0 Back to top
     --------------------------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 450) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }
    });
    $('#to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });

    /*--------------------------------------------------------------
     3.0 Sticky Header
     --------------------------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            var offset = $(".sticky-header-wrapper").data('offset');
            $(".sticky-header-wrapper").css({"visibility": "visible", "opacity": "1", "position": "fixed", "top": offset});
        } else {
            $(".sticky-header-wrapper").css({"visibility": "hidden", "opacity": "0", "top": "-30px"});
        }
    });

    /*--------------------------------------------------------------
     4.0 Search Toggle
     --------------------------------------------------------------*/
    $(".search-toggle").click(function () {
        $(".search-box-wrapper").toggle();
    });

    /*--------------------------------------------------------------
     5.0 FitVids
     --------------------------------------------------------------*/
    $("#main-content").fitVids();
    $("#content").fitVids();

    /*--------------------------------------------------------------
     6.0 Lightboxes
     --------------------------------------------------------------*/
    baguetteBox.run('.gallery-lightbox-en', {animation: 'fadeIn', });
    baguetteBox.run('.stronghold-masonry-gallery', {animation: 'fadeIn', });

    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        opacity: 0.95,
        show_title: false,
        social_tools: false
    });

    /*--------------------------------------------------------------
     7.0 Isotope
     --------------------------------------------------------------*/
    var $container = $('.isotope-cat-container');
    $container.imagesLoaded(function () {

        $container.fadeIn(1500).isotope({
            filter: '*',
            itemSelector: '.iso-cat-item',
            layoutMode: 'fitRows',
            transitionDuration: '0.85s',
        });
    });

    var $container2 = $('.isotope-images-container');
    $container2.imagesLoaded(function () {

        $container2.fadeIn(1500).isotope({
            filter: '*',
            itemSelector: '.iso-cat-item',
            layoutMode: 'fitRows',
            transitionDuration: '0.85s',
            percentPosition: true,
            fitRows: {
                columnWidth: 364,
                gutter: 10
            }
        });
    });

    $('.isotope-filter a').click(function () {
        $('.isotope-filter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container2.isotope({
            filter: selector,
        });
         $container.isotope({
            filter: selector,
        });
        return false;
    });


    /*--------------------------------------------------------------
     8.0 Blog Gallery
     --------------------------------------------------------------*/
    if ($('.gallery-featured-slider').children('.gallery-slide-img').length > 1) {
        var $loopSet = true;
    } else {
        var $loopSet = false;
    }

    $(".gallery-featured-slider").owlCarousel({
        items: 1,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        //autoHeight: false,
        loop: $loopSet,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: true,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ]
    });


    /*--------------------------------------------------------------
     9.0 Blog Grid Gallery Slider
     --------------------------------------------------------------*/
    if ($('.gallery-featured-slider-grid-widget').children('.gallery-slide-img').length > 1) {
        var $loopSet = true;
    } else {
        var $loopSet = false;
    }

    $(".gallery-featured-slider-grid-widget").owlCarousel({
        items: 1,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        autoHeight: false,
        loop: $loopSet,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: false
    });


    /*--------------------------------------------------------------
     10.0 Animations
     --------------------------------------------------------------*/
    if ($(window).width() > 800) {
        $('.comments-area, .search-content, .above-shop, .widget-area, .single-gallery-wrapper, .service-content, .team-member-main-info, .team-member-additional-details, .team-member-detail, .tech-life-blog-grid .col-md-4, .service-block, .service-block-block-item, .team-member-block-list-img-wrapper, .team-member-block, .dental-care-blog-item, .blog-grid-widget-item-left, .blog-grid-widget-item-right, .dental-care-brands, .dental-care-product-item, .service-block, .dental-care-gallery-widget, .team-member-block, .dental-care-testimonials-item, .article-wrapper, .shop-content, .product_item, .author-box, .related-posts, .company-info-wid, .opening-hours-wid, .recent-widget, .social-widget').viewportChecker({
            classToAdd: 'animated fadeIn',
            offset: 10
        });
    }

    /*--------------------------------------------------------------
     11.0 Smooth Scrolling 
     --------------------------------------------------------------*/
    $(function () {
        $('.masthead a[href*="#"]:not([href="#"]), .header-three .main-navigation a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 100
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /*--------------------------------------------------------------
     12.0 Counter
     --------------------------------------------------------------*/
    var runonce = true;
    $('.stronghold-counter-wrapper').waypoint(function () {
        if (runonce == true) {
            $('.counter-number-val').countTo({
                delay: 60,
                speed: 2500,
                refreshInterval: 30,
                time: 4000
            });
            runonce = false;
        }
    }, {offset: '80%', triggerOnce: true});


    /*--------------------------------------------------------------
     13.0 Icon Box
     --------------------------------------------------------------*/
    $(".single-icon-box").hover(function () {

   
        var hover = $(this).data('hoveren');

     

        if(hover == 'yes'){
        $(this).css("bottom", "10px");
        }


    }, function () {

             
        var hover = $(this).data('hoveren');
  

        if(hover == 'yes'){
        $(this).css("bottom", "0");
        }


    });
    
    
    /*--------------------------------------------------------------
     14.0 Testimonials Widget
     --------------------------------------------------------------*/
var speed = 5000;
var carousel_speed = $(".dental-care-testimonials-widget").data("speed");
    
if(carousel_speed != null){
speed = carousel_speed;
}

    
    $(".dental-care-testimonials-widget").owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay: true,
    autoplayTimeout: speed,   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    
    });
                
 
/*--------------------------------------------------------------
    15.0 Before & After
--------------------------------------------------------------*/  
    
$(".stronghold-before-after").imagesLoaded( function() {    
$(".stronghold-before-after").twentytwenty();
});


/*--------------------------------------------------------------
    16.0 Blog Carousel
--------------------------------------------------------------*/ 
var blogSpeed =  $(".dental-care-blog-items").data('speed');  
var blogItems =  $(".dental-care-blog-items").data('items');
var blogCount =  $(".dental-care-blog-items").data('count');
var blogLoop = true;
var blogAuto = 5000;
var blogItemCount = 3;

if(blogCount < 1){
  blogLoop = false;
}

if(blogSpeed != null || blogSpeed != ""){
   blogAuto = blogSpeed;  
}

if(blogItems != null || blogItems != ""){
   blogItemCount = blogItems;  
}

$(".dental-care-blog-items").owlCarousel({
    loop: blogLoop,
    margin: 30,
    autoplay: true,
    autoplayTimeout: blogAuto,            
    navigation: false,
    dots: false,
    autoplayHoverPause: true,
    items: blogItemCount,
    responsiveClass:true,
    responsive:{
    0:{
    items:1,           
     },
    800:{
    items:2,            
    },
    1100:{
    items: blogItemCount, 
    }
    }
        });
    
     $(".dental-care-blog-wrapper .arrow_next_top").click(function(){
     $(".dental-care-blog-items").trigger("next.owl.carousel");
     });
     $(".dental-care-blog-wrapper .arrow_prev_top").click(function(){
     $(".dental-care-blog-items").trigger("prev.owl.carousel");
     });
     
     
/*--------------------------------------------------------------
    17.0 Brand Carousel
--------------------------------------------------------------*/ 
var brandSpeed =  $(".dental-care-brands").data('speed');  
var brandItems =  $(".dental-care-brands").data('items');
var brandCount =  $(".dental-care-brands").data('count');
var brandLoop = true;
var brandAuto = 5000;
var brandItemCount = 3;

if(brandCount < 1){
  brandLoop = false;
}

if(brandSpeed != null || brandSpeed != ""){
   brandAuto = brandSpeed;  
}

if(brandItems != null || brandItems != ""){
   brandItemCount = brandItems;  
}

$(".dental-care-brands").owlCarousel({
    loop: brandLoop,
    margin: 30,
    autoplay: true,
    autoplayTimeout: brandAuto,            
    navigation: false,
    dots: false,
    autoplayHoverPause: true,
    items: brandItemCount,
    responsiveClass:true,
    responsive:{
    0:{
    items:1,           
     },
    800:{
    items:2,            
    },
    1100:{
    items: brandItemCount, 
    }
    }
        });
    
     $(".dental-care-brands-wrapper .arrow_next_top").click(function(){
     $(".dental-care-brands").trigger("next.owl.carousel");
     });
     $(".dental-care-brands-wrapper .arrow_prev_top").click(function(){
     $(".dental-care-brands").trigger("prev.owl.carousel");
     });
     
     
 /*--------------------------------------------------------------
    18.0 Product Carousel
--------------------------------------------------------------*/ 
var productSpeed =  $(".dental-care-products").data('speed');  
var productItems =  $(".dental-care-products").data('items');
var productCount =  $(".dental-care-products").data('count');
var productLoop = true;
var productAuto = 5000;
var productItemCount = 3;

if(productCount < 1){
  productLoop = false;
}

if(productSpeed != null || productSpeed != ""){
   productAuto = productSpeed;  
}

if(productItems != null || productItems != ""){
   productItemCount = productItems;  
}

$(".dental-care-products").owlCarousel({
    loop: productLoop,
    margin: 30,
    autoplay: true,
    autoplayTimeout: productAuto,            
    navigation: false,
    dots: false,
    autoplayHoverPause: true,
    items: productItemCount,
    responsiveClass:true,
    responsive:{
    0:{
    items:1,           
     },
    800:{
    items:2,            
    },
    1100:{
    items: productItemCount, 
    }
    }
        });
    
     $(".products-wrapper .arrow_next_top").click(function(){
     $(".dental-care-products").trigger("next.owl.carousel");
     });
     $(".products-wrapper .arrow_prev_top").click(function(){
     $(".dental-care-products").trigger("prev.owl.carousel");
     });

/*--------------------------------------------------------------
    19.0 Service Carousel
--------------------------------------------------------------*/ 
var serviceSpeed =  $(".dental-care-service-carousel").data('speed');  
var serviceItems =  $(".dental-care-service-carousel").data('items');
var serviceCount =  $(".dental-care-service-carousel").data('count');
var serviceLoop = true;
var serviceAuto = 5000;
var serviceItemCount = 3;

if(serviceCount < 1){
  serviceLoop = false;
}

if(serviceSpeed != null || serviceSpeed != ""){
   serviceAuto = serviceSpeed;  
}

if(serviceItems != null || serviceItems != ""){
   serviceItemCount = serviceItems;  
}

$(".dental-care-service-carousel").owlCarousel({
    loop: serviceLoop,
    margin: 30,
    autoplay: true,
    autoplayTimeout: serviceAuto,            
    navigation: false,
    dots: false,
    autoplayHoverPause: true,
    items: serviceItemCount,
    responsiveClass:true,
    responsive:{
    0:{
    items:1,           
     },
    800:{
    items:2,            
    },
    1100:{
    items: serviceItemCount, 
    }
    }
        });
    
     $(".dental-care-services-wrapper .arrow_next_top").click(function(){
     $(".dental-care-service-carousel").trigger("next.owl.carousel");
     });
     $(".dental-care-services-wrapper .arrow_prev_top").click(function(){
     $(".dental-care-service-carousel").trigger("prev.owl.carousel");
     });


/*--------------------------------------------------------------
    20.0 Team Carousel
--------------------------------------------------------------*/ 
var teamSpeed =  $(".dental-care-team-members-carousel").data('speed');  
var teamItems =  $(".dental-care-team-members-carousel").data('items');
var teamCount =  $(".dental-care-team-members-carousel").data('count');
var teamLoop = true;
var teamAuto = 5000;
var teamItemCount = 3;

if(teamCount < 1){
  teamLoop = false;
}

if(teamSpeed != null || teamSpeed != ""){
   teamAuto = teamSpeed;  
}

if(teamItems != null || teamItems != ""){
   teamItemCount = teamItems;  
}

$(".dental-care-team-members-carousel").owlCarousel({
    loop: teamLoop,
    margin: 30,
    autoplay: true,
    autoplayTimeout: teamAuto,            
    navigation: false,
    dots: false,
    autoplayHoverPause: true,
    items: teamItemCount,
    responsiveClass:true,
    responsive:{
    0:{
    items:1,           
     },
    800:{
    items:2,            
    },
    1100:{
    items: teamItemCount, 
    }
    }
        });
    
     $(".dental-care-team-wrapper .arrow_next_top").click(function(){
     $(".dental-care-team-members-carousel").trigger("next.owl.carousel");
     });
     $(".dental-care-team-wrapper .arrow_prev_top").click(function(){
     $(".dental-care-team-members-carousel").trigger("prev.owl.carousel");
     });
     
     
/*--------------------------------------------------------------
    21.0 Testimonial Carousel
--------------------------------------------------------------*/ 
var testimonialSpeed =  $(".dental-care-testimonials").data('speed');  
var testimonialItems =  $(".dental-care-testimonials").data('items');
var testimonialCount =  $(".dental-care-testimonials").data('count');
var testimonialLoop = true;
var testimonialAuto = 5000;
var testimonialItemCount = 3;

if(testimonialCount < 1){
  testimonialLoop = false;
}

if(testimonialSpeed != null || testimonialSpeed != ""){
   testimonialAuto = testimonialSpeed;  
}

if(testimonialItems != null || testimonialItems != ""){
   testimonialItemCount = testimonialItems;  
}

$(".dental-care-testimonials").owlCarousel({
    loop: testimonialLoop,
    margin: 30,
    autoplay: true,
    autoplayTimeout: testimonialAuto,            
    navigation: false,
    dots: false,
    autoplayHoverPause: true,
    items: testimonialItemCount,
    responsiveClass:true,
    responsive:{
    0:{
    items:1,           
     },
    800:{
    items:2,            
    },
    1100:{
    items: testimonialItemCount, 
    }
    }
        });
    
     $(".dental-care-testimonials-wrapper .arrow_next_top").click(function(){
     $(".dental-care-testimonials").trigger("next.owl.carousel");
     });
     $(".dental-care-testimonials-wrapper .arrow_prev_top").click(function(){
     $(".dental-care-testimonials").trigger("prev.owl.carousel");
     });
     
     /*--------------------------------------------------------------
     Partners Carousel
     --------------------------------------------------------------*/
    var array = jQuery.makeArray($(".container").find(".partners-carousel"));
    $(array).each(function () {

        var speed = $(this).data("speed");
        var items = $(this).data("items");
        var count = $(this).data("count");
        var loop = true;

        if (count < 1) {
            loop = false;
        }

        if (speed == "") {
            speed = 5000;
        }

        if (items == "") {
            items = 3;
        }

        if (items == 1) {
            var itemsRes = 1;
        } else {
            var itemsRes = 2;
        }

        $(this).owlCarousel({
            loop: loop,
            margin: 30,
            autoplay: true,
            autoplayTimeout: speed,
            nav: false,
            dots: false,
            navContainer: 'carousel_arrow_nav',
            autoplayHoverPause: true,
            items: items,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                800: {
                    items: itemsRes,
                },
                1100: {
                    items: items,
                }
            }
        });
    });
    
    
    /*--------------------------------------------------------------
     Masonry Gallery
     --------------------------------------------------------------*/  
        var masonry_Gallery_Array = jQuery.makeArray($(".container").find(".stronghold-masonry-gallery-widget"));
    $(masonry_Gallery_Array).each(function () {

        var gutter_Size = $(this).data("gutter-size");

        if (gutter_Size == "") {
            gutter_Size = 10;
        }

        $('.stronghold-masonry-gallery').imagesLoaded(function () {
            $('.stronghold-masonry-gallery').packery({
                // options
                itemSelector: '.masonry-gallery-item',
                gutter: gutter_Size,
                percentPosition: true,
                transitionDuration: '0.65s'
            });
        });

    });
     
});





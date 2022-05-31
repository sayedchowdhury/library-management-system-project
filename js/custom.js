// All jquery files
(function ($) {
    
         // Preloader
        "use strict";
        window.onload = function () {
            $('#loader').fadeOut(1500, function () { $('#loader').remove(); });
        };
        // Header slider
        $('.header-slider').owlCarousel({
            loop:true,
            nav:true,
            dots:true,
            autoplay:true,
            margin:0,
            autoplayTimeout:5000,
            autoplayHoverPause:false,
            navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
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
        // Magnific video
        $('.video-preview').magnificPopup({
            type:'iframe',
            iframe: {
                patterns: {
                     youtube: {
                      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                      id: 'v=', // String that splits URL in a two parts, second part should be %id%
                      // Or null - full URL will be returned
                      // Or a function that should return %id%, for example:
                      // id: function(url) { return 'parsed id'; }

                      src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                    }
                },
                srcAction: 'iframe_src',
            }
        });
         // counter plugin
        $('.counter').counterUp({
                    delay: 10,
                    time: 1000
                });


  
          // Smooth Scroll
        var scroll = new SmoothScroll('a[href*="#"]', {
            // Selectors
            ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
            header: null, // Selector for fixed headers (must be a valid CSS selector)

            // Speed & Easing
            speed: 1500, // Integer. How fast to complete the scroll in milliseconds
            offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
            easing: 'easeInOutCubic', // Easing pattern to use
            customEasing: function (time) {

                // Function. Custom easing pattern
                // If this is set to anything other than null, will override the easing option above

                // return <your formulate with time as a multiplier>

                // Example: easeInOut Quad
                return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

            },

        // Callback API
        before: function (anchor, toggle) {}, // Callback to run before scroll
        after: function (anchor, toggle) {} // Callback to run after scroll
             });
        //book slider
        $('.book-slider').owlCarousel({
        center: true,
        dots:false,
        nav:true,
        items:2,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            300:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });

    
})(jQuery);

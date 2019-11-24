(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: '/assets/images/slide-image01.jpg' },
            { src: '/assets/images/slide-image02.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });

})(jQuery);

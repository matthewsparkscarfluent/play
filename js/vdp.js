document.addEventListener("DOMContentLoaded", function() {
    var vdpExtraFeaturesToggle = document.querySelector('.vdp-features-toggle');

    vdpExtraFeaturesToggle.addEventListener('click', function() {
        document.querySelectorAll('.vdp-extra-features__wrapper').forEach(function(vdpExtraFeatures){
            if (vdpExtraFeatures.classList.contains('features-display')) {
                vdpExtraFeatures.classList.remove('features-display');
                vdpExtraFeaturesToggle.innerHTML='+ Show More';
    
            } else {
                vdpExtraFeatures.classList.add('features-display');
                vdpExtraFeaturesToggle.innerHTML='- Show Less';
            }
        });
  
      });

    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var headerHeight = $('.heading').outerHeight();
        if (scroll >= headerHeight) {
            $('body').addClass('heading--scroll');
        } else {
            $('body').removeClass('heading--scroll');
        }
    });


lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true

})


  
  



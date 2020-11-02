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
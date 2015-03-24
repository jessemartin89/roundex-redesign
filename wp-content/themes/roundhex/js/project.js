jQuery(document).ready(function($) {
	
	//get count of sliders, while loop starting with 0 and for each of them start the slider with these settings
	var sliderCount = jQuery('.bxslider').length;
	// var sliderIndex = sliderCount - 1;
	var k = 0;
	var project_bx_array = [];
	while(k < sliderCount){
		project_bx_array[k] = jQuery('.bxslider#slider' + k).bxSlider({captions: true, pager: false, nextText: ' ', prevText: ' ', infiniteLoop: false, hideControlOnEnd: true});
		k++;
	}

    $('.zoom-slide').click(function(e){
        e.preventDefault();
        //get current slide index/id
        var currentSlider = $(this).parents('.bx-controls').prev('.bx-viewport').children('.bxslider');
        // console.log(currentSlider);
        var currentSliderId = currentSlider.attr('id');
        currentSliderId = parseInt(currentSliderId.replace('slider', ''));
        // console.log(currentSliderId);
        var currentSlideId = project_bx_array[currentSliderId].getCurrentSlide();
        // console.log(currentSlideId);

        $('.gallery' + currentSliderId + '.photo' + currentSlideId).trigger("click");

    });

    $('.bx-controls').each(function(){
        // console.log($(this).prev('.bxslider').find('li a img'));
       var sliderHeight =  $(this).prev('.bxslider').find('img').height() + 10;
       // console.log(sliderHeight);
       $(this).css('top', sliderHeight + 'px');
    });

  
  $(".animsition-overlay").animsition({
  
    inClass               :   'overlay-slide-in-left',
    outClass              :   'overlay-slide-out-left',
    inDuration            :    1500,
    outDuration           :    800,
    linkElement           :   '.animsition-link',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    
    overlay               :   true,
    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });

});


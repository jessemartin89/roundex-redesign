jQuery(document).ready(function($) {
    // Inside of this function, $() will work as an alias for jQuery()
    // and other libraries also using $ will not be accessible under this shortcut
    $('input').bind('input propertychange', function() {
    	if($(this).val().length > 0){ //if email field has value
    		$('#mc_submit').addClass('orange');
    	} //if email field has value
    }); // #mc4wp_email blur

    $('li.contact a').click(function(e){
    	e.preventDefault();
    	$('#contact-header').slideDown();

    }); //li a click

    $('#close-contact img').click(function(){
    	$('#contact-header').slideUp();
    }) //close contact

    $('.photo-container .bx-controls-direction').each(function(){
        if($(this).children('a.disabled').length > 1){
            // console.log($(this).closest());
            $(this).closest('.bx-controls').addClass('disabled-directions');
            $(this).closest('.bx-controls').removeClass('bx-has-controls-direction');
        } // .disabled ~ .disabled
    }) //each bx controls

    $('.bx-controls').each(function(){
        if(!$(this).hasClass('bx-has-controls-direction')){
            $(this).prev('.bx-viewport').find('.bx-caption').addClass('full-caption');
        }

    }); // each bx-caption

    var jump=function(e)
    {
       if (e){
           e.preventDefault();
           var target = $(this).attr("href");
       }else{
           var target = location.hash;
       }

       $('html,body').animate(
       {
           scrollTop: $(target).offset().top
       },2000,function()
       {
           location.hash = target;
       });

    }

    $('html, body').hide();

    $(document).ready(function()
    {
        $('a[href^=#]').bind("click", jump);

        if (location.hash){
            setTimeout(function(){
                $('html, body').scrollTop(0).show();
                jump();
            }, 0);
        }else{
            $('html, body').show();
        }
    });
}); //jQuery(document).ready(function($) 
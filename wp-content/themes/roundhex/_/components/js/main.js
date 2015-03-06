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
}); //jQuery(document).ready(function($) 
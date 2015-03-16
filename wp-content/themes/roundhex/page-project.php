<?php
/* Template Name: Project Page */
get_header(); ?>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/picturefill.min.js"></script>
<section id="content" role="main">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<section class="entry-content">
	<div id="intro-blurb" class="layout">
	<?php the_content(); ?>
</div>
	<?php
/*
Credits:
Snippet by Laurence Lord (http://laurencelord.co.uk) 
extends Wordpress Codex (http://codex.wordpress.org/Next_and_Previous_Links).
Credit goes to Rory Powis (https://github.com/rpowis) for the lambdase.
*/

$ancestors = get_post_ancestors( $post->ID );
/* Get the top Level page->ID count base 1, array base 0 so -1 */ 
$parent = ($ancestors) ? $ancestors[0]: $post->ID;

$pagelist = get_pages('child_of='. $parent .'&sort_column=menu_order&sort_order=asc');
$pages = array();
foreach ($pagelist as $page) {
   $pages[] += $page->ID;
}

$current = array_search(get_the_ID(), $pages);
$prevID = ( isset($pages[$current-1]) ) ? $pages[$current-1] : '';
$nextID = ( isset($pages[$current+1]) ) ? $pages[$current+1] : '';

?>
 
<nav id="project-pagination">
    <?php if (!empty($prevID)) { ?>
    <div class="prev-arrow">
	    <a href="<?php  echo get_permalink($prevID); ?>"
	      title="<?php  echo get_the_title($prevID); ?>" class="previous-page"></a>
    </div>
    <?php }
    if (!empty($nextID)) { ?>
    <div class="next-arrow">
	    <a href="<?php echo get_permalink($nextID); ?>" 
	     title="<?php  echo get_the_title($nextID); ?>" class="next-page"></a>
    </div>
    <?php } ?>
</nav><!-- #pagination --> 
<div id="project-story">
	<?php if( have_rows('identity_design_story') ): ?>
	<h2><span>Identity Design</span></h2>
	<?php if(get_field('identity_design_image')){ ?>
		<img class="layout wide-size" src="<?php the_field('identity_design_image'); ?>">
	<?php } ?>
		<?php 
		$j =0;
		while( have_rows('identity_design_story') ): the_row(); ?>
		<?php if ($j % 2 == 0){ ?>
			<div class="project-step even step<?php echo $j;?> layout">
		<?php } else { ?>
			<div class="project-step step<?php echo $j;?> odd layout">
		<?php } ?>
			<div class="story-text">
				<?php the_sub_field('identity_design_step'); ?>
			</div>
			<div class="story-gallery">
				<?php 
				if(have_rows('step_gallery')):
					while(have_rows('step_gallery')): the_row(); 
					$gallery_photos = get_sub_field('gallery_images');
					$photoArray = array();
					foreach( $gallery_photos as $photos){
						foreach($photos as $photo){
							//get caption, thumbnail, and fullsize image for lightbox
							$photoArray[] = array($photo['caption'], $photo['url']);
						}
						// pa($photos);
					} 
					// pa($photoArray);
				?>
				<div class="photo-container">
					<ul class="bxslider identity-slider" id="<?php echo 'slider' . $j; ?>">
					<?php for($i=0; $i < count($photoArray); $i++){ ?>
						<li><img class="<?php echo 'photo' . $i; ?>" title="<?php echo $photoArray[$i][0];?>" src="<?php echo $photoArray[$i][1];?>"></li>
					<?php } ?> <!-- for -->
					</ul>
				</div>
			</div> <!-- story-gallery -->
		</div> <!-- project-step -->
		<?php $j++; endwhile; ?>
	<?php endif; ?>
	<?php if(have_rows('website_design_story')): ?>
		<h2><span>Website Design</span></h2>
		<?php if(get_field('website_design_image')){ ?>
			<img class="layout wide-size" src="<?php the_field('website_design_image'); ?>">
		<?php } ?>
		<?php 
		$w = 0;
		while( have_rows('website_design_story') ): the_row(); ?>
		<?php if ($w % 2 == 0){ ?>
			<div class="web-step even step<?php echo $w;?> layout">
		<?php } else { ?>
			<div class="web-step odd step<?php echo $w;?> layout">
		<?php } ?>
			<div class="story-text">
				<?php the_sub_field('website_design_step'); ?>
			</div>
			<div class="story-gallery">
				<?php 
					$web_gallery_photos = get_sub_field('web_step_gallery');
					$webPhotoArray = array();
					foreach( $web_gallery_photos as $photos){
						foreach($photos as $photo){
							//get caption, thumbnail, and fullsize image for lightbox
							$webPhotoArray[] = array($photo['caption'], $photo['url']);
						}
						// pa($photos);
					} 
					// pa($photoArray);
				?>
				<div class="photo-container">
					<ul class="bxslider website-slider" id="<?php echo 'slider' . $w; ?>">
					<?php for($i=0; $i < count($webPhotoArray); $i++){ ?>
						<li><img class="<?php echo 'photo' . $i; ?>" title="<?php echo $webPhotoArray[$i][0];?>" src="<?php echo $webPhotoArray[$i][1];?>"></li>
					<?php } ?> <!-- for -->
					</ul>
				</div>
			</div> <!-- story-gallery -->
		</div>
	
		<?php 
		$w++;
		endwhile; ?> <!-- while website_design_story -->

	<?php endif; ?> <!-- end website_design_story -->
</div> <!-- project-story -->
<?php if(get_field('testimonial')){ ?>
<div id="testimonial" style="background-image:url('<?php echo get_field('testimonial_image'); ?>');">
	<blockquote id="project-testimonial">
		<?php the_field('testimonial') ?>
	</blockquote>
	<div id="testimonial-source">
		<?php the_field('testimonial_source'); ?>
	</div>
	<?php if(get_field('client_site')){ ?>
		<div id="client-site">
			<a href="<?php the_field('client_site'); ?>">visit website <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/double-arrows.png"></a>
		</div>
	<?php } ?>
</div> <!-- testimonial -->

<?php } ?>
<div class="entry-links"><?php wp_link_pages(); ?></div>
</section>
</article>
<?php endwhile; endif; ?>
<?php get_footer('project'); ?>
</section>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/jquery.bxslider.js"></script>
<script>jQuery(document).ready(function(){
	jQuery('body').append('<div class="lightbox-overlay"></div>');
	//get count of sliders, while loop starting with 0 and for each of them start the slider with these settings
	var identitySliderCount = jQuery('.bxslider.identity-slider').length;
	var webSliderCount = jQuery('.bxslider.website-slider').length;
	// var sliderIndex = sliderCount - 1;
	var k = 0;
	var identity_bx_array = [];
	while(k < identitySliderCount){
		identity_bx_array[k] = jQuery('.bxslider.identity-slider#slider' + k).bxSlider({captions: true, pager: false, nextText: ' ', prevText: ' ', infiniteLoop: false, hideControlOnEnd: true});
		k++;
	}

	var ws = 0;
	var web_bx_array = [];
	while(ws < webSliderCount){
		web_bx_array[ws] = jQuery('.bxslider.website-slider#slider' + ws).bxSlider({captions: true, pager: false, nextText: ' ', prevText: ' ', infiniteLoop: false, hideControlOnEnd: true});
		ws++;
	}

	//slideshow zoom
	jQuery('.zoom-slide').click(function(e){
        e.preventDefault();
        //get this slideshows current slide
        //change for just one type of slider, no longer 2. get current slide, add popup div with new slideshow (duplicate of original) starting with current slide
        var getSlide = jQuery(this).parents('.bx-controls').siblings('.bx-viewport').find('.bxslider');
        var currentSlideIndex = parseInt(getSlide.attr('id').replace('slider' , ''));
        if(getSlide.hasClass('identity-slider')){
        	var currentSlide = identity_bx_array[currentSlideIndex].getCurrentSlideElement();
        } else if(getSlide.hasClass('website-slider')){
        	var currentSlide = web_bx_array[currentSlideIndex].getCurrentSlideElement();
        }
        
        // get slide image
        currentImgSrc = currentSlide.find('img').attr('src');
        console.log(currentImgSrc);
        //add overlay
        jQuery('.lightbox-overlay').addClass('visible');
        jQuery('body').append('<div class="lightbox"><a id="close-lightbox" href="">close</a><img src="' + currentImgSrc + '"></div>');
        centerContent();

        jQuery('#close-lightbox').click(function(e) {
        	e.preventDefault();
			clearPopup();	
		});	

		jQuery(document).keyup(function(e) {
	        if (e.keyCode == 27 && jQuery('.lightbox-overlay').hasClass('visible')) {
	            clearPopup();
	        }
	    });

	    function clearPopup(){
	    	if(jQuery('.lightbox-overlay.visible').length >0){
				jQuery('.lightbox-overlay').toggleClass('visible');
				jQuery('.lightbox').toggleClass('hide');
			}
	    }

        //add image to center of screen at 95% width
        //add close button
        function centerContent(){
			var overlayImageWidth = jQuery('.lightbox img').width();
			var overlayImageHeight = jQuery('.lightbox img').height();
			var windowWidth = jQuery(window).width();
			var windowHeight = jQuery(window).height();
			var overlayTop = (windowHeight/2) - (overlayImageHeight/2);
			var overlayLeft = (windowWidth/2) - (overlayImageWidth/2);

			jQuery('.lightbox').css({'left': overlayLeft, 'top': overlayTop, 'width': overlayImageWidth + 20});
			
		}
    }) ; //zoom-slide click  
  
});</script>
<?php get_footer(); ?>
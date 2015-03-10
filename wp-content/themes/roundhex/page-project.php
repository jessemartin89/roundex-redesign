<?php
/* Template Name: Project Page */
get_header(); ?>
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
      title="<?php  echo get_the_title($prevID); ?>" class="previous-page"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/prev-project-mobile.png"></a>
    </div>
    <?php }
    if (!empty($nextID)) { ?>
    <div class="next-arrow">
    <a href="<?php echo get_permalink($nextID); ?>" 
     title="<?php  echo get_the_title($nextID); ?>" class="next-page"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/next-project-mobile.png"></a>
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
		<div class="project-step layout">
			<div class="story-text">
				<?php the_sub_field('identity_design_step'); ?>
			</div>
			<div class="story-gallery">
				<?php 
					$gallery_photos = get_sub_field('step_gallery');
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
		<div class="web-step layout">
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
<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/jquery.bxslider.min.js"></script>
<script>jQuery(document).ready(function(){
	//get count of sliders, while loop starting with 0 and for each of them start the slider with these settings
	var identitySliderCount = jQuery('.bxslider.identity-slider').length;
	var webSliderCount = jQuery('.bxslider.website-slider').length;
	// var sliderIndex = sliderCount - 1;
	var k = 0;
	while(k < identitySliderCount){
		jQuery('.bxslider.identity-slider#slider' + k).bxSlider({captions: true, pager: false, nextText: ' ', prevText: ' ', infiniteLoop: false, hideControlOnEnd: true});
		k++;
	}

	var ws = 0;
	while(ws < webSliderCount){
		jQuery('.bxslider.website-slider#slider' + ws).bxSlider({captions: true, pager: false, nextText: ' ', prevText: ' ', infiniteLoop: false, hideControlOnEnd: true});
		ws++;
	}

  
});</script>
<?php get_footer(); ?>
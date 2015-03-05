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
		<?php while( have_rows('identity_design_story') ): the_row(); ?>
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
					<ul>
					<?php for($i=0; $i < count($photoArray); $i++){ 
						if( $i == 0) { ?>
							<li style="display: block;"><img src="<?php echo $photoArray[$i][1];?>">
						<?php } else { ?>
							<li><img src="<?php echo $photoArray[$i][1];?>">
						<?php } ?>
					<div class="gallery-caption">
						<?php echo $photoArray[$i][0]; ?>
					</div>
					<?php if(count($photoArray) > 1){ //if gallery ?> 
					<div class="gallery-controls">
						<div class="gskip_left">
							<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/left-arrow-med-grey.png">
						</div>
						<div class="gskip_right">
							<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/right-arrow-med-orange.png" alt="">
						</div>

						<?php } ?> <!-- if gallery -->
					</div> <!-- gallery controls -->
					</li>
					<?php } ?> <!-- for -->
				</ul>
					
				</div>
				
				
			</div> <!-- story-gallery -->
		</div> <!-- project-step -->
		<?php endwhile; ?>
	<?php endif; ?>
	<?php if(have_rows('website_design_story')): ?>
		<h2><span>Website Design</span></h2>
		<?php while( have_rows('website_design_story') ): the_row(); ?>
		<div class="web-step layout">
			<div class="story-text">
				<?php the_sub_field('website_design_step'); ?>
			</div>
			<div class="story-gallery">
				<?php 
					$gallery_photos = get_sub_field('web_step_gallery');
					$webPhotoArray = array();
					foreach( $gallery_photos as $photos){
						foreach($photos as $photo){
							//get caption, thumbnail, and fullsize image for lightbox
							$webPhotoArray[] = array($photo['caption'], $photo['url']);
						}
						// pa($photos);
					} 
					// pa($photoArray);
				?>
				<div class="photo-container">
					<img src="<?php echo $webPhotoArray[0][1];?>">
				</div>
				<div class="gallery-caption">
					<?php echo $webPhotoArray[0][0]; ?>
				</div>
				<?php if(count($webPhotoArray) > 1){ //if gallery ?> 
				<div class="gallery-controls">
					<div class="gskip_left">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/left-arrow-med-grey.png">
					</div>
					<div class="gskip_right">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/right-arrow-med-orange.png" alt="">
					</div>

					<?php } ?>
				</div> <!-- gallery controls -->
			</div> <!-- story-gallery -->
		</div>

		<?php endwhile; ?> <!-- while website_design_story -->

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
</section>
<?php get_footer(); ?>
<?php
/* Template Name: Home Page */
get_header(); ?>
<section id="content" role="main">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<section class="entry-content">
<?php if ( has_post_thumbnail() ) { the_post_thumbnail(); } ?>
<div class="home-blurb layout">
	<?php the_content(); ?>
</div>
<div id="featured-work-container">
	<h2><span>Featured Work</span></h2>
	<?php if( have_rows('featured_works') ): ?>
		<?php while( have_rows('featured_works') ): the_row(); ?>
		<div class="featured-work layout">
			<?php the_sub_field('featured_work'); ?>
		</div>
		<?php endwhile; ?>

	<?php endif; ?>
</div>
<div id="why-roundhex">
	<h2><span>Why Roundhex?</span></h2>
	<?php if(get_field('why_roundhex')) { ?>
		<div class="layout"><?php the_field('why_roundhex'); ?></div>
	<?php } ?>
</div>
<div class="entry-links"><?php wp_link_pages(); ?></div>
</section>
</article>
<?php endwhile; endif; ?>
</section>
<?php get_footer(); ?>
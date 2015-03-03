<?php
/* Template Name: Portfolio Page */
get_header(); ?>
<section id="content" role="main">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<section class="entry-content">
	<?php if( have_rows('portfolio_items') ): ?>
	<div id="portfolio">
		<?php while( have_rows('portfolio_items') ): the_row(); ?>
		<div class="feature layout">
			<?php the_sub_field('portfolio_item'); ?>
		</div>
		<?php endwhile; ?>
	</div>
	<?php endif; ?>
<div class="entry-links"><?php wp_link_pages(); ?></div>
</section>
</article>
<?php endwhile; endif; ?>
</section>
<?php get_footer(); ?>
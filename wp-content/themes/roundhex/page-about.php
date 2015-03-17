<?php
/* Template Name: About Page */
get_header(); ?>
<section id="content" role="main">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<section class="entry-content">
<?php if ( has_post_thumbnail() ) { the_post_thumbnail(); } ?>
<div class="home-blurb layout">
	<?php the_content(); ?>
</div>
<div id="our-team">
	<h2><span>Our Team</span></h2>
	<?php if( have_rows('our_team') ): ?>
		<?php while( have_rows('our_team') ): the_row(); ?>
		<div class="team-member layout">
			<?php the_sub_field('team_member'); ?>
		</div>
		<?php endwhile; ?>
	<?php endif; ?>
</div>
<div id="roundhex-alum">
	<h2><span>Round Hex Alums</span></h2>
	<?php if( have_rows('round_hex_alums') ): ?>
		<?php while( have_rows('round_hex_alums') ): the_row(); ?>
		<div class="alum layout">
			<?php the_sub_field('alum'); ?>
		</div>
		<?php endwhile; ?>
	<?php endif; ?>
</div>
<div id="talent-pool">
	<h2><span>Talent Pool</span></h2>
	<div class="layout">
		<?php the_field('talent_pool'); ?>
	</div>
</div>
<div id="why-roundhex-full">
	<h2><span>Why "Round Hex"?</span></h2>
	<?php if(get_field('why_round_hex_long')) { ?>
		<div class="layout"><?php the_field('why_round_hex_long'); ?></div>
	<?php } ?>
</div>
<div class="entry-links"><?php wp_link_pages(); ?></div>
</section>
</article>
<?php endwhile; endif; ?>
</section>
<?php get_footer(); ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( ' | ', true, 'right' ); ?></title>
<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/styles.css" />
<?php wp_head(); ?>
</head>
<?php global $post; $post_slug=$post->post_name; ?>
<body <?php body_class($post_slug); ?>>
<div id="wrapper" class="hfeed">
<header id="header" role="banner">
<nav id="menu" role="navigation">
	<?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
</nav>
<div class="branding">
	<a href="<?php get_home_url(); ?>">
		<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/rh-logo-scribbled.png" alt="Round Hex">
	</a>
</div><!-- branding -->
<?php 
//add if mobile
if(get_field('hero_image')){ ?>
	<div class="hero" style="background-image:url('<?php the_field('hero_image'); ?>');">
		<?php if(is_page_template( 'page-project.php' )){ ?>
			<div id="project-header">
				<h1><?php echo get_the_title(); ?></h1>
				<h3><?php the_field('work'); ?></h3>
			</div>
		<?php } ?>
	</div>
<?php 
		} //get_field('hero_image')
?>

</header>
<div id="container">

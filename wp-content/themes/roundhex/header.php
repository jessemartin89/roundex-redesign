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
</header>
<div id="container">

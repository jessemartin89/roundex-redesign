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
	<div id="contact-header" class="layout">
		<div id="close-contact"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/contact-exit.png"></div>
		<div id="contact-email">
			<a href="mailto:hello@roundhex.com">hello@roundhex.com</a>
		</div>
		<div id="contact-phone">
			<span>+1-212-694-4667</span>
		</div>
	</div> <!-- contact-header -->
	<div class="branding wide-size">
	<a href="<?php echo home_url(); ?>">
	</a>
</div><!-- branding -->
<nav id="menu" role="navigation">
	<?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
</nav>
</header>
<div class="branding portrait">
	<a href="<?php echo home_url(); ?>">
	</a>
</div><!-- branding -->

<?php 
//add if mobile
if(get_field('hero_image')){ ?>
<?php if(!is_page_template( 'page-project-new.php' )){ ?>
	<div id="hero" class="hero" style="background-image:url('<?php the_field('hero_image'); ?>');">
	</div>
<?php 
		}} //get_field('hero_image')
?>

<div id="container">
	<?php if(is_page_template( 'page-project-new.php' )){ ?>
		<div id="hero" class="hero" style="background-image:url('<?php the_field('hero_image'); ?>');">
			<div id="project-header">
				<h1><?php echo get_the_title(); ?></h1>
				<h3><?php the_field('work'); ?></h3>
			</div> <!-- project-header -->
		</div>
	<?php } ?>

<div id="more-work-footer">
	<h2><span>More Work</span></h2>
	<div class="layout">
	<?php

		$ancestors = get_post_ancestors( $post->ID );
		/* Get the top Level page->ID count base 1, array base 0 so -1 */ 
		$parent = ($ancestors) ? $ancestors[0]: $post->ID;

		$pagelist = get_pages('child_of='. $parent .'&sort_column=menu_order&sort_order=asc');
		$pages = array();
		foreach ($pagelist as $page) {
		   $pages[] += $page->ID;
		}

		// pa($pages);

		foreach($pages as $pageID){ 
			if(get_the_ID() == $pageID){ ?>
			<div class="more-work current-work">
				<p id="now-viewing">Now Viewing</p>

			<?php } else { ?>
				<div class="more-work">
			<?php }
			if(get_field('hero_image', $pageID)){ ?>
				<img src="<?php the_field('hero_image', $pageID); ?>">
			<?php } ?>
				<div class="more-work-details">
					<a href="<?php echo get_permalink( $pageID); ?>"><?php echo get_the_title($pageID) ;?></a>
					<?php if(get_field('work', $pageID)){ ?>
						<p><?php the_field('work', $pageID); ?></p>
					<?php } ?>
				</div>
			</div>
		<?php }

	?>
	</div> <!-- layout -->
</div> <!-- more-work-footer -->
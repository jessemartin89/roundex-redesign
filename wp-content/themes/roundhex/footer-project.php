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
				<div class="overlay">
					<p id="now-viewing">Now Viewing</p>
				</div>
			<?php } else { ?>
				<div class="more-work">
			<?php } ?>
			
				<picture>
					<?php if (get_field('wide_preview_image', $pageID)){ ?>
						<source srcset="<?php the_field('wide_preview_image', $pageID); ?>" media="(min-width: 768px)">
					<?php } ?>
					<?php if (get_field('mobile_preview_image', $pageID)){ ?>
						<img srcset="<?php the_field('mobile_preview_image', $pageID); ?>">
					<?php } ?>		
				</picture>
				<div class="more-work-details">
					<?php if(get_the_ID() == $pageID){ ?>
						<p class="title-nolink"><?php echo get_the_title($pageID) ;?></p>
					<?php } else { ?>
						<a href="<?php echo get_permalink( $pageID); ?>"><?php echo get_the_title($pageID) ;?></a>
					<?php 
					}
					if(get_field('work', $pageID)){ ?>
						<p><?php the_field('work', $pageID); ?></p>
					<?php } ?>
				</div>
			</div>
		<?php }

	?>
	</div> <!-- layout -->
</div> <!-- more-work-footer -->
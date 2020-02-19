<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package atl-v1
 */

get_header();
?>

	<div id="primary" class="content-area">
		<div class="page-thumbnail">
			<?php echo get_the_post_thumbnail(12333) ?>
			<div class="caption">
				<h1 class="icon-inline">
					<img src="<?php echo get_template_directory_uri() ?>/images/icons/events-icon.svg" alt="Events"><?php echo get_the_post_thumbnail_caption(12333); ?>
				</h1>
			</div>
		</div>
		<main id="main" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();

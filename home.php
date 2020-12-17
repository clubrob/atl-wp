<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package atl-v1
 */

get_header();
?>

	<div id="primary" class="content-area">
		<div class="page-thumbnail">
			<?php echo get_the_post_thumbnail(12082) ?>
			<div class="caption">
				<h1 class="icon-inline">
					<img src="<?php echo get_template_directory_uri() ?>/images/icons/blog-icon.svg" alt="Blog"><?php echo get_the_post_thumbnail_caption(12082); ?>
				</h1>
			</div>
		</div>
		<main id="main" class="site-main single-column">
			<h2>Recent Posts</h2>
		<?php
		if ( have_posts() ) :

			if ( is_home() && ! is_front_page() ) :
				?>
				<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>
				<?php
			endif;

			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', get_post_type() );

			endwhile;

			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>
		</main><!-- #main -->
		<div class="wp-block-group three-book-block full-width">
            <div class="wp-block-group__inner-container">
                <h2 class="has-text-align-center text-light"> Explore Ashley T Lee’s 3 Books Available on Amazon</h2>
                <p class="has-text-align-center button button-primary"><a
                        href="https://www.amazon.com/Ashley-T-Lee/e/B081TJ4BQQ?ref_=dbs_p_ebk_r00_abau_000000">Shop
                        Now</a></p>
                <figure class="wp-block-image size-full"><a
                        href="https://i2.wp.com/localhost/wp-content/uploads/2020/12/3-books-mobile-992px.jpg"><img
                            src="https://i2.wp.com/localhost/wp-content/uploads/2020/12/3-books-mobile-992px.jpg?w=640"
                            alt="" class="wp-image-12432" data-recalc-dims="1"></a></figure>
            </div>
        </div>
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();

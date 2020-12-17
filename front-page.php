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
		<div class="home-slider slider">
			<div class="slide slide-ashley" id="home-slide-1" style="background-image: url(<?php echo get_site_url(); ?>/wp-content/uploads/2020/02/Photo65-scaled.jpg);">
				<div class="single-column">
					<p>
						Learn more about Ashley T Lee, Christian Author and Speaker.
					</p>
					<p><a href="<?php echo get_site_url(); ?>/about" class="button button-primary">About Ashley</a></p>
				</div>
			</div>
			<div class="slide slide-new-book" id="home-slide-2" style="background-image: url(<?php echo get_site_url(); ?>/wp-content/uploads/2020/12/Background-1920px.jpg);">
				<div class="background-assets">
					<div class="col1">
						<div><img src="<?php echo get_site_url(); ?>/wp-content/uploads/2020/12/AshleyTLee_BookTitle.png" alt=""></div>
						<div><img src="<?php echo get_site_url(); ?>/wp-content/uploads/2020/12/AshleyTLee-author-signature.png" alt=""></div>
					</div>
					<div class="col2">
						<img src="<?php echo get_site_url(); ?>/wp-content/uploads/2020/12/Book3.png" alt="">
					</div>
				</div>
				<div class="call-to-action">
					<div class="col1">
						<p>
							<a href="https://www.amazon.com/gp/aw/d/0578760517/ref=dbs_a_w_dp_0578760517" class="button button-info">Purchase on Amazon</a>
						</p>
					</div>
				</div>
			</div>
			<div class="slide slide-book" id="home-slide-3" style="background-image: url(<?php echo get_site_url(); ?>/wp-content/uploads/2020/02/AshleyTLee_Assets_BannerBackground.jpg);">
				<div class="background-assets">
					<div class="col1">
						<div><img src="<?php echo get_site_url(); ?>/wp-content/uploads/2020/02/AshleyTLee_Assets_LeanOnGodsUnderstanding.png" alt=""></div>
						<div><img src="<?php echo get_site_url(); ?>/wp-content/uploads/2020/02/book-logo.jpg" alt=""></div>
					</div>
					<div class="col2">
						<img src="<?php echo get_site_url(); ?>/wp-content/uploads/2020/02/AshleyTLee_Assets_Book.png" alt="">
					</div>
				</div>
				<div class="call-to-action">
					<div class="col1">
						<p>
							<a href="https://www.amazon.com/Lean-Gods-Understanding-have-stress-free-ebook/dp/B084L7M4GF" class="button button-info">Purchase on Amazon</a>
						</p>
					</div>
				</div>
			</div>
			<div class="slide slide-prayer" id="home-slide-4" style="background-image: url(<?php echo get_site_url(); ?>/wp-content/uploads/2019/08/home-banner-2560px-e1566397314330.jpg);">
				<div class="single-column">
					<p>Prayer Request Journal - These compact books are organized to keep your daily prayer on-the-go and designed to easily fit in a bag.</p>
					<p>
						<a href="https://www.amazon.com/Prayer-Request-Book-Ashley-Lee/dp/B01N5AYH69" class="button button-primary">See more details</a>
					</p>
				</div>
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

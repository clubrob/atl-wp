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

		<?php
      $args = array(
        'post_type'   => 'atl_audio_clips',
        'post_status' => 'publish'
      );

      $testimonials = new WP_Query( $args );
      if( $testimonials->have_posts() ) :
      ?>
        <div class="minutes-container single-column">
          <?php
            while( $testimonials->have_posts() ) :
              $testimonials->the_post();
              ?>
                <div class="minute-audio">
                  <div class="minute-audio__inner">
                    <div class="minute-audio__image">
                      <?php the_post_thumbnail(); ?>
                    </div>
                  </div>
                  <div class="minute-audio__main">
                    <div class="minute-audio__main--header">
                      <div class="minute-audio__main--header-title">
                        <h3><?php the_title(); ?></h3>
                      </div>
                    </div>
                    <div class="minute-audio__main--audio">
                      <?php the_content(); ?>
                    </div>
                  </div>
                </div>
              <?php
            endwhile;
            wp_reset_postdata();
          ?>
        </div>
      <?php
      else :
        esc_html_e( 'No testimonials in the diving taxonomy!', 'text-domain' );
      endif;
      ?>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();

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
while (have_posts()):
    the_post();

    get_template_part('template-parts/content', 'page');

    // If comments are open or we have at least one comment, load up the comment template.
    if (comments_open() || get_comments_number()):
        comments_template();
    endif;

endwhile; // End of the loop.
?>

		<?php
$args = array(
    'post_type' => 'atl_audio_clips',
    'post_status' => 'publish',
);

$audio_clips = new WP_Query($args);
if ($audio_clips->have_posts()):
?>
        <div class="minutes-container single-column pb">
          <?php
while ($audio_clips->have_posts()):
    $audio_clips->the_post();
    ?>
	                <div class="minute-audio">
	                  <div class="minute-audio__inner">
	                    <div class="minute-audio__image">
	                      <?php the_post_thumbnail();?>
	                    </div>
	                  </div>
	                  <div class="minute-audio__main">
	                    <div class="minute-audio__main--header">
	                      <div class="minute-audio__main--header-title">
	                        <h3><?php the_title();?></h3>
	                      </div>
	                    </div>
	                    <div class="minute-audio__main--audio">
	                      <?php the_content();?>
	                    </div>
	                  </div>
	                </div>
	              <?php
endwhile;
wp_reset_postdata();
?>
        </div>
      <?php
else:
    esc_html_e('No audio clips...', 'text-domain');
endif;
?>
        <script>
          document.addEventListener("DOMContentLoaded", function() {
            const audioElements = document.querySelectorAll('.wp-block-audio > audio');

            audioElements.forEach(elem => {
              elem.removeAttribute('controls');
            });

            GreenAudioPlayer.init({
              selector: '.wp-block-audio',
              stopOthersOnPlay: true
            });
          });
        </script>
        <div class="wp-block-group full-width bg-secondary no-flow prayer-book-block"><div class="wp-block-group__inner-container">
          <div class="wp-block-columns container single-column">
            <div class="wp-block-column flow" style="flex-basis:66.66%">
              <h3 class="has-text-align-center text-light"> Prayer Request Book – by Ashley T Lee! Available now on Amazon.</h3>
              <p class="has-text-align-center"><a href="https://www.amazon.com/Prayer-Request-Book-Ashley-Lee/dp/B01N5AYH69" class="button button-info">Purchase on Amazon</a></p>
            </div>
            <div class="wp-block-column" style="flex-basis:33.33%">
              <div class="wp-block-image">
                <figure class="aligncenter size-medium">
                  <img src="http://localhost:8080/wp-content/uploads/2020/02/prayer-request-book-189x300.png" alt="" class="wp-image-12293" srcset="http://localhost:8080/wp-content/uploads/2020/02/prayer-request-book-189x300.png 189w, http://localhost:8080/wp-content/uploads/2020/02/prayer-request-book-645x1024.png 645w, http://localhost:8080/wp-content/uploads/2020/02/prayer-request-book-768x1218.png 768w, http://localhost:8080/wp-content/uploads/2020/02/prayer-request-book-968x1536.png 968w, http://localhost:8080/wp-content/uploads/2020/02/prayer-request-book-1291x2048.png 1291w, http://localhost:8080/wp-content/uploads/2020/02/prayer-request-book.png 1690w" sizes="(max-width: 189px) 100vw, 189px">
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();

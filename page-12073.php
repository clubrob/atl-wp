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
</div>
</main><!-- #main -->
</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package atl-v1
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer bg-primary">
		<section class="indicia single-column">
		<div class="container">
			<div class="footer-info">
						<div class="footer-copyright">
							<p>
								Copyright © <?php echo date('Y'); ?> | Ashley T Lee Ministries
							</p>
						</div>
						<div class="footer-site-credit">
							<p>Site Created By <a href="https://longlivesimple.com">Long Live Simple</a></p>
						</div>
					</div>
			<div class="footer-action">
						<div class="footer-giving">
							<a href="<?=get_permalink(12064);?>" class="button button-info">
								<img
									src="<?php echo get_template_directory_uri() ?>/images/icons/contact-icon.svg"
									class=""
									alt=""
								/>
								Contact
							</a>
						</div>
						<div class="footer-social">
							<a href="https://www.instagram.com/ashleytlee"><img src="//localhost:8080/wp-content/uploads/2020/02/SocialMedia_Icons_Instagram-01.svg" alt="Instagram"></a>
							<a href="https://www.facebook.com/ashley.t.leeministry/"><img src="//localhost:8080/wp-content/uploads/2020/02/SocialMedia_Icons_Facebook-04.svg" alt="Facebook"></a>
							<a href=""><img src="//localhost:8080/wp-content/uploads/2020/02/SocialMedia_Icons_YouTube-03.svg" alt="YouTube"></a>
							<a href="https://www.pinterest.com/AshleyTLee/"><img src="//localhost:8080/wp-content/uploads/2020/02/SocialMedia_Icons_Pinterest-02.svg" alt="Pinterest"></a>
						</div>
					</div>
		</div>
		</section>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer();?>

</body>
</html>

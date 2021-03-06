<?php
/**
 * View: Default Template for Events
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/v2/default-template.php
 *
 * See more documentation about our views templating system.
 *
 * @link {INSERT_ARTCILE_LINK_HERE}
 *
 * @version 5.0.0
 */

use Tribe\Events\Views\V2\Template_Bootstrap;

get_header();
?>
<div class="page-thumbnail">
	<img src="https://www.ashleytlee.com/wp-content/uploads/2019/08/events-banner-2560px.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="events" srcset="https://www.ashleytlee.com/wp-content/uploads/2019/08/events-banner-2560px.jpg 2560w, https://www.ashleytlee.com/wp-content/uploads/2019/08/events-banner-2560px-300x169.jpg 300w, https://www.ashleytlee.com/wp-content/uploads/2019/08/events-banner-2560px-768x432.jpg 768w, https://www.ashleytlee.com/wp-content/uploads/2019/08/events-banner-2560px-1024x576.jpg 1024w" sizes="(max-width: 2560px) 100vw, 2560px" width="2560" height="1440">			<div class="caption">
		<h1 class="icon-inline"><img src="<?php echo get_template_directory_uri() ?>/images/icons/events-icon.svg" alt="Events">Events</h1>
	</div>
</div>
<div class="single-column">
	<?php
	echo tribe( Template_Bootstrap::class )->get_view_html();
	?>
</div>

<?php
get_footer();

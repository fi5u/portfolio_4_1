<?php $args = array( 'post_type' => 'portfolio', 'numberposts' => $postQty, 'offset' => $offset ); ?>
<?php $postslist = get_posts( $args ); ?>

<?php foreach ($postslist as $post) :  setup_postdata($post); ?>

    <?php $rows = get_field('images'); ?>
    <?php $first_row = $rows[0]; ?>
    <?php $first_row_image = $first_row['image']; ?>

    <?php $img_url = wp_get_attachment_image_src( $first_row_image, 'home' ); ?>

    <div class="portfolio__item">
        <h3 class="portfolio__item__title"><?php the_title(); ?></h3>
        <div class="portfolio__item__visual" style="background-image:url(<?php echo $img_url[0]; ?>);">
        </div>

        <div class="portfolio__item__textblock">
            <?php if( get_field("employer") ) : ?>
            <p class="portfolio__item__employer"><a href="http://www.kirnauskis.com" data-tooltip="Visit the Kirnauskis website">A Kirnauskis project</a></p>
            <?php endif; ?>

            <?php the_excerpt(); ?>
            <p><a href="<?php the_permalink(); ?>">More &raquo;</a></p>
        </div>
    </div>

<?php endforeach; ?>
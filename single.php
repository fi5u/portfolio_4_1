<?php get_header(); ?>

        <div class="single__inwrap">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <div class="single__imagetext">
                <div class="single__imageblock" id="imageblock">
                    <h3 class="portfolio__item__title"><?php the_title(); ?></h3>

                    <?php $rows = get_field('images'); ?>
                    <?php $first_row = $rows[0]; ?>
                    <?php $first_row_image = $first_row['image']; ?>
                    <?php $first_row_desc = $first_row['description']; ?>

                    <?php $large_img_url = wp_get_attachment_image_src( $first_row_image, 'single-large' ); ?>
                    <?php $med_img_url = wp_get_attachment_image_src( $first_row_image, 'single-med' ); ?>

                    <a href="<?php echo $large_img_url[0]; ?>" id="imageblock-link">
                        <img src="<?php echo $med_img_url[0]; ?>" alt="<?php echo $first_row_desc; ?>">
                    </a>
                </div>

                <div class="single__textblock">
                    <div class="single__text">
                        <?php the_content(); ?>
                    </div>

                    <div class="single__buttonblock">
                        <p>
                            <?php if( get_field("github") ) : ?>
                                <a href="<?php the_field("github"); ?>">GitHub</a><br>
                            <?php endif; ?>
                            <a href="<?php home_url(); ?>">back home</a>
                        </p>
                    </div>
                </div>
            </div>
            <?php endwhile; else: ?>
                <p><?php _e( "Sorry, but the portfolio work you were looking for could not be found." ); ?></p>
            <?php endif; ?>

            <div class="single__filmstrip-contact">
                <div class="single__filmstrip" id="filmstrip">
                    <?php if( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                        <?php if( get_field("images") ): ?>
                            <?php while( has_sub_field("images") ) : ?>
                                <?php $img_id = get_sub_field("image"); ?>
                                <?php $img_desc = get_sub_field("description"); ?>
                                <?php $img_large_url = wp_get_attachment_image_src( $img_id, 'single-large' ); ?>
                                <?php $img_med_url = wp_get_attachment_image_src( $img_id, 'single-med' ); ?>
                                <?php $img_small_url = wp_get_attachment_image_src( $img_id, 'single-small' ); ?>
                            <a href="<?php echo $img_large_url[0]; ?>" class="filmstrip-link"><img src="<?php echo $img_small_url[0]; ?>" data-medium="<?php echo $img_med_url[0]; ?>" alt="<?php echo $img_desc; ?>" class="single__preview"></a>
                            <?php endwhile; ?>
                        <?php endif; ?>
                    <?php endwhile; endif; ?>
                </div>

                <?php get_template_part("part-contact"); ?>
            </div>
        </div>

<?php get_footer(); ?>
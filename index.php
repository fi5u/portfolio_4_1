<?php get_header(); ?>

        <div class="main__inwrap">
            <div class="portfolio">

                <?php $portfolio_posts = wp_count_posts("tyot"); ?>
                <?php $portfolio_post_count = $portfolio_posts->publish; ?>

                <div class="portfolio__column--1">
                    <?php $postQty = ceil($portfolio_post_count / 2); $offset = 0; ?>
                    <?php include(locate_template("part-portfolio-item.php")); ?>
                </div>

                <div class="portfolio__column--2">
                    <?php $postQty = floor($portfolio_post_count / 2); $offset = ceil($portfolio_post_count); ?>
                    <?php include(locate_template("part-portfolio-item.php")); ?>
                </div>
            </div>
        </div>

        <div class="main__bio-mailgroup">
            <?php get_template_part("part-bio"); ?>
            <?php get_template_part("part-contact"); ?>
        </div>

<?php get_footer(); ?>
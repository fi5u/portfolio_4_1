<?php get_header(); ?>

    <div class="single__inwrap">
        <div class="single--404__block1">
            <h1>404</h1>
            <p>The page you were looking for does not exist.</p>
            <p>You may find what you were looking for by checking out some recent projects I've been working on <span class="sentence--below">below</span><span class="sentence--right">to the right</span>.</p>

            <?php get_template_part( "part-contact" ); ?>
        </div>

        <div class="single--404__block2">

            <?php $postQty = 3; $offset = 0; ?>
            <?php include(locate_template("part-portfolio-item.php")); ?>

        </div>
    </div>


<?php get_footer(); ?>
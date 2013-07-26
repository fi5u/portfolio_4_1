<!DOCTYPE html>

<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title><?php if(is_home()) { echo bloginfo("name"); echo " | "; echo bloginfo("description"); } else { echo wp_title(" » ", false, right); echo bloginfo("name"); } ?></title>

    <meta name="title" content="<?php if(is_home()) { echo bloginfo("name"); echo " | "; echo bloginfo("description"); } else { echo wp_title(" » ", false, right); echo bloginfo("name"); } ?>">
    <meta name="description" content="The online portfolio of responsive web developer Tommy Fisher (Helsinki, Finland).">
    <meta name="author" content="Tommy Fisher">
    <meta name="Copyright" content="Copyright 2013. All Rights Reserved.">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" type="image/x-icon" href="<?php bloginfo('template_url'); ?>/favicon.ico">
    <link rel="apple-touch-icon-precomposed" href="<?php bloginfo('template_url'); ?>/apple-touch-icon-precomposed.png">

    <link rel='stylesheet' href='<?php bloginfo('template_url'); ?>/style.css'>

    <script src='<?php bloginfo('template_url'); ?>/assets/js/lib/modernizr.full.2.6.2.js'></script> <!-- change to production before launch: -->

    <!--[if lt IE 9]>
        <link rel='stylesheet' href='<?php bloginfo('template_url'); ?>/assets/sass/lteie8.css'>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="<?php bloginfo('template_url'); ?>/assets/js/lib/jquery-1.10.1.min.js"><\/script>')</script>
        <script src='<?php bloginfo('template_url'); ?>/assets/js/lib/respond.min.js'></script>
        <script src='<?php bloginfo('template_url'); ?>/assets/js/lib/selectivizr-min.js'></script>
    <![endif]-->

    <?php wp_head(); ?>
</head>
<body>
    <div class="outer-wrap">
        <div class="inner-wrap">
            <header class="header page-header">
                <div class="page-header__inwrap">
                    <nav class="nav header-nav">

                        <ul>
                            <li class="header-nav__message"><a href="#">Message</a></li>
                            <li class="header-nav__twitter"><a href="https://twitter.com/tommybfisher/">Twitter</a></li>
                            <li class="header-nav__linkedin"><a href="fi.linkedin.com/in/tommybfisher/">LinkedIn</a></li>
                        </ul>
                    </nav>

                    <div class="page-header-menutrigger" id="menu-trigger">
                        menu
                    </div>
                    <div class="page-header__logo">
                        <a class='current' href="<?php echo get_bloginfo('url'); ?>">Tommy Fisher web developer</a>
                    </div>
                </div>
            </header>

            <div class="main <?php echo(is_single() ? "single" : ""); ?> <?php echo(is_404() ? "single--404" : ""); ?>" role="main">
<?php

//REGISTER/DEREGISTER
    //deregister jquery
/*function tommyfisher_deregister_common_js() {
    if(!is_admin()) {
        wp_deregister_script('jquery');
    }
}
add_action('init', 'tommyfisher_deregister_common_js');*/


    //register menus
/*function register_menus() {
    register_nav_menus(
        array( 'primary-menu' => __( 'Primary Menu' ) )
    );
}
add_action( 'init', 'register_menus' );*/


    //register custom post types
add_action( 'init', 'create_post_type' );
function create_post_type() {
    register_post_type( 'portfolio',
        array(
            'labels' => array(
                'name' => __( 'Portfolio' )
            ),
        'public' => true,
        'has_archive' => true,
        'supports'   => array('title', 'editor', 'excerpt')
        )
    );
/*    register_post_type( 'blogi',
        array(
            'labels' => array(
                'name' => __( 'Blogi' )
            ),
        'public' => true,
        'has_archive' => true,
        'supports'   => array('title', 'editor', 'tags', 'excerpt'),
        'taxonomies' => array('post_tag')
        )
    );*/
}

    //set image import sizes
add_image_size( "home", 767, 160, true );
add_image_size( "single-large", 1439 );
add_image_size( "single-med", 767 );
add_image_size( "single-small", 249 );



    //register sub options pages
if(function_exists("register_options_page")) {
    register_options_page('Primary info');
}


    //remove admin pages
/*add_action( 'admin_menu', 'my_remove_menu_pages' );
function my_remove_menu_pages() {
    remove_menu_page('link-manager.php');
    remove_menu_page('edit.php');
    remove_menu_page('edit.php?post_type=page');
    remove_menu_page('edit-comments.php');
}*/


add_filter( 'pre_get_posts', 'tommyfisher_add_custom_types' );
function tommyfisher_add_custom_types( $query ) {
  if( is_category() || is_tag() && empty( $query->query_vars['suppress_filters'] ) ) {
    $query->set( 'post_type', array(
     'post', 'portfolio'
        ));
      return $query;
    }
}

<?php
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'quadra-aberta-pai',
        get_template_directory_uri() . '/style.css'
    );

    wp_enqueue_style(
        'quadra-aberta-filho',
        get_stylesheet_uri(),
        array('quadra-aberta-pai'),
        wp_get_theme()->get('Version')
    );
});

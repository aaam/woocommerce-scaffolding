<?php 

/*********************
15. WOOCOMMERCE FUNCTIONS
*********************/
//Remove default WooCommerce styles
add_filter( 'woocommerce_enqueue_styles', '__return_false' );
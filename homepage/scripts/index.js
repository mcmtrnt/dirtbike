(function(context) {
    jQuery(document).ready(function($) {
        $(".clickable-row").click(function() {
            window.location = $(this).data("href");
        });
    });
    // utc_epoch comes from index.py
    console.log('Current epoch in UTC is ' + context.utc_epoch);
    
})(DMP_CONTEXT.get());



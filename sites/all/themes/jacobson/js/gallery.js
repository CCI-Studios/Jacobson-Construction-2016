(function($){    
    $(function(){

    var wall = new Freewall(".view-gallery-images .view-content");

    wall.reset({
        selector: '.views-row',
        animate: true,
        cellW: 250,
        cellH: 'auto',
        onResize: function() {
            wall.fitWidth();
        }
    });

    var images = wall.container.find('.views-row');

    images.find('img').load(function() {
        wall.fitWidth();
    });

    $('.view-gallery-images  .field-content a').swipebox();

    });

})(jQuery);

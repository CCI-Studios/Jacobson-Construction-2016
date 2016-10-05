(function($){    
    $(function(){

        var max1= $('.view-slideshow .views-row').length;
        for(var i=1; i<=max1; i++)
        {   
            $('.view-slideshow .views-row-'+i+' .views-field-field-image-slideshow').replaceImgtag();
        }  

        $('.view-slideshow .view-content').slick(
        {
            infinite: true,
            arrows: false,
            dots: true,
            autoplay: true,
            pauseOnHover: false

        }); 

         $('.view-slideshow .view-content').on('click',function(){

             $('.view-slideshow .view-content').slick('slickPause');

         });
  
    });

    $.fn.replaceImgtag = function( action ) {
        
        var img = $(this).find('img');
        var imgSrc = img.attr('src');
        var div = $(this).find('div');
        img.remove();
        div.html('<div class="backbg"></div>');
        $(this).find('.backbg').css('background-image', 'url(' + imgSrc + ')');
    };


})(jQuery);

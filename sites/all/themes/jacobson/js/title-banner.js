(function($){    
    $(function(){

     var img = $('.node-type-gallery .banner-inner-image img').attr('src');
     $('.node-type-gallery .banner-inner-image img').remove();
     $('.node-type-gallery #page-title').css({"background-image":'url(' + img + ')'});

      var img = $('.node-type-catalogue .banner-inner-image img').attr('src');
     $('.node-type-catalogue .banner-inner-image img').remove();
     $('.node-type-catalogue #page-title').css({"background-image":'url(' + img + ')'});


    var img = $('#block-block-9 img').attr('src');
    $('#block-block-9 img').remove();
    $('#block-block-9').css({"background-image":'url(' + img + ')'});

     var img = $('#block-block-10 img').attr('src');
    $('#block-block-10 img').remove();
    $('#block-block-10').css({"background-image":'url(' + img + ')'});

    var img = $('.page-node .field-name-field-banner-image img').attr('src');
    $('.node-type-page .field-name-field-banner-image img').remove();
    $('.node-type-page #page-title').css({"background-image":'url(' + img + ')'});
});

})(jQuery);

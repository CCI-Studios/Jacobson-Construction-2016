(function($){    
    $(function(){


        $('#block-system-main .node-readmore a').text('LEARN MORE');
        $('#block-system-main .node-readmore a').attr('href', 'about-jacobson');

        $('h2').each(function() {

            var word = $(this).html();
            var index = word.lastIndexOf(' ');
            var wl = word.split(' ');
            var len = word.length;

            if(index == -1) {
             index = word.length;
            }

            if(wl.length > 1)
            {
                $(this).html('<span class="first-word">' + word.substring(0, index) + '</span>' + word.substring(index, word.length));
            }

            if(wl.length == 1)
            {
               $(this).html('<span class="single-word">' + word.substring(0, index) + '</span>');
            }
        });

       /* var ob = "#block-system-main-menu li.expanded";

        $(ob).bind(
          "mouseenter mouseleave",
          function( event ){
              
              if($(window).width()>1280)
              $(this).find('> ul.menu').slideToggle();
          }
        );*/

        $('#block-block-2').click(function(){

            window.location.href = "/catalogue-page";

        });

         $('#block-block-3').click(function(){

            window.location.href = "/gallery-page";

        });

         function moveImg(){

          if($(window).width() < 720)
          {
             $('#node-3 .image img').insertAfter('#node-3 .field-name-body h2');
             $('#node-12 .image img').insertAfter('#node-12 .field-name-body h2');
             $('#node-19 .image img').insertAfter('#node-19 .field-name-body h2');
             $('#block-block-6 .image img').insertAfter('#block-block-6 .section h2');
             $('#block-block-11 .image img').insertAfter('#block-block-11 .section h2');
             $('#block-block-12 .image img').insertAfter('#block-block-12 .section h2');
             $('#block-block-13 .image img').insertAfter('#block-block-13 .section h2');
             $('#block-block-14 .image img').insertAfter('#block-block-14 .section h2');
             $('#block-block-8 .image img').insertAfter('#block-block-8 .section h2');
          }
          else if($(window).width() > 720)
          {  

            var $img1 = $('#node-3 .field-name-body img');
            var $img2 = $('#node-12 .field-name-body img');
            var $img3 = $('#block-block-6 img');
            var $img4 = $('#block-block-8 img');
            var $img5 = $('#node-19 .field-name-body img');
            var $img6 = $('#block-block-11 img');
            var $img7 = $('#block-block-12 img');
            var $img8 = $('#block-block-13 img');
            var $img9 = $('#block-block-14 img');

        
            $('#node-3 .image').append($img1);
            $('#node-12 .image').append($img2);
            $('#node-19 .image').append($img5);
            $('#block-block-6 .image').append($img3);
            $('#block-block-8 .image').append($img4);
            $('#block-block-11 .image').append($img6);
            $('#block-block-12 .image').append($img7);
            $('#block-block-13 .image').append($img8);
            $('#block-block-14 .image').append($img9);
          }
        }
      
        moveImg();

        $(window).resize(function(){

           moveImg();

        });


    });

})(jQuery);

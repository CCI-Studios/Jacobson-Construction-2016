(function($){    
    $(function(){

        if($(window).width() > 1080)
        {   
   
            $("#navigation").before($("#navigation").clone().addClass("animateIt"));
            $(window).on("scroll", function () {

                 var t = $(window).scrollTop() - $('#content').offset().top;
                 console.log($('#content').offset().top);
                 $("body").toggleClass("down", (t > 0));
            });
        }
    });

})(jQuery);

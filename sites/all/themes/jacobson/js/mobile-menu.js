(function($){    
    $(function(){

        $('#mobile-menu a').click(function(){

            $("#block-system-main-menu").slideToggle();
        });

        $('#block-system-main-menu li.expanded>a, #block-system-main-menu li.expanded>span').click(function(e){

    	 	if($(window).width()<767)
            {
            	e.preventDefault();
            }
            $(this).parent().find('ul.menu').slideToggle();

        });
    });

})(jQuery);

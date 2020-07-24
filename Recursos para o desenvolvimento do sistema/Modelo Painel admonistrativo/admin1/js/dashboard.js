$(document).ready(function (){
    $('.sidebar-toggle').on('click', function(){
        $('.sidebar').toggleClass('toggled');
    });

    var menu_tivo = $('.sidebar .active');
    if(menu_tivo.length && menu_tivo.parent('.collapse').length){

        var apresenstar_menu = menu_tivo.parent('.collapse');

        apresenstar_menu.prev('a').attr('aria-expanded', true);
        apresenstar_menu.addClass('show');
    }
});
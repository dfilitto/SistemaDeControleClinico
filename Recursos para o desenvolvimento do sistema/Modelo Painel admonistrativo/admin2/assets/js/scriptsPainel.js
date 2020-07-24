$(document).ready(function(){
    $('.sidebarToggler').on('click', function(){
        $('.sidebarLeft').toggleClass('toggled');
    });

});
//Ativa o tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
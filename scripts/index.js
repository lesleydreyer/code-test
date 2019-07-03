$(document).ready(function() {
    $(".js-btn").click(function(){
        alert("clicked");
    }); 
    $(".button").click(function(){
        alert("clicked");
    }); 
    

        /* Mobile Menu */
    const menu = $(".mobile-nav-menu");

    menu.addClass('fa-bars');//add the burger menu bars icon

    menu.on('click', function () {
        $('.js--main-nav').slideToggle(200);//toggle the menu links shown or hiddin
        if (menu.hasClass('fa-bars')) {
            menu.removeClass('fa-bars').addClass('fa-times');//replace bars with X
        } else {
            menu.removeClass('fa-times').addClass('fa-bars');//replace X with bars
        }
    });
    
});
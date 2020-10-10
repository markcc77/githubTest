$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        $('.nav div.logo img').addClass('affix2');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
        $('.nav div.logo img').removeClass('affix2');
    }
});


  
$(document).ready(() => {
    var a = 0;
    $(window).scroll(function() {
    var oTop = $(".count").offset().top - window.innerHeight;
    if (a === 0 && $(window).scrollTop() > oTop) {
        $(".count").each(function () {
            $(this).prop("Counter",0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: "swing",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        $(".process-video video").trigger("play");
        a = 1;
    }
    });

     
});
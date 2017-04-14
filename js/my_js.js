$(document).ready(function() {
    var totalItems = $("#carousel-example-generic").find(".carousel-inner").children().length;
    var currentIndex = $('.active').index() + 1;

    $('.num').html('' + currentIndex + '/' + totalItems + '');

    // $('#carousel-example-generic').carousel({
    //     interval: false;
    // });

    $('#carousel-example-generic').on('slid.bs.carousel', function(e) {
        var secondIndex = $(e.relatedTarget).index();
        $('.num').html('' + (currentIndex + secondIndex) + '/' + totalItems + '');
    })

    $('#play-pause-button').click(function() {
        // if ($("#media-video")[0].paused) {
        //     $("#media-video")[0].play();
        // } else {
        //     $("#media-video")[0].pause();
        // }
        $("#media-video")[0].play();
        $("#play-pause-button").hide();
        $('video').attr("controls", " ");
    });
})
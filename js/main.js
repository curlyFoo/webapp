console.log('!!!HACKATHON!!!');

$('a.news').click(function() {
// get from API http://json.bild.de/servlet/search/android/query=gesundheit,num=25,start=0,type=article
    $.getJSON('http://json.bild.de/servlet/json/android/48281036', function(result){
        console.log(result);
        $('.news-container').html('');
        clearMain();
        $('.news-container').css('opacity', '1');
        $.each(result, function(i, field){
                $('.news-container').append(field + ' ');
            });
    });
});


$('a.geo').click(function() {
    clearMain();
    $('.geo-container').css('opacity', '1');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        $('.geo-container').html('Geolocation is not supported by this browser.');
    }
});


function showPosition(position) {
    $('.geo-container').html('Latitude: ' + position.coords.latitude.toString() + '<br>Longitude: ' + position.coords.longitude);
    console.log(position.coords.latitude);
}


$('a.foo').click(function() {
    clearMain();
});


$('.sticon.menu').click(function() {
  $('header').toggleClass('animate');
});


function clearMain() {
    $('.geo-container').css('opacity', '0');
    $('.foo-container').css('opacity', '0');
    $('.news-container').css('opacity', '0');
}

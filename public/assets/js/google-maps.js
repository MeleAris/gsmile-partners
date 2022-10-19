function initMap() {
    // Latitude and Longitude
    var myLatLng = {
        lat: 6.163284296223614,
        lng: 1.2161105679585265
    };
    var locations = [
        myLatLng,
        [6.873284296223614, 1.7201105679585265, 'lolo'],
        [6.753394286223614, 1.5761105679585265,'xtoaa'],
        [6.178284296223614, 1.2361105679585265,'xtob'],
        [6.169284296223614, 1.2561105679585265,'xton'],
    ]

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 8,
        center: myLatLng
    });

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][0], locations[i][1]),
            map: map,
            title: locations[i][2]
        });
    }
}
function initMap() {
    // Latitude and Longitude
    var myLatLng = { lat: 6.163284296223614, lng: 1.2161105679585265 };
    var locations = [
        [6.163284296223614, 1.2161105679585265],
        [6.873284296223614, 1.7201105679585265],
        [6.753394286223614, 1.5761105679585265],
        [6.178284296223614, 1.2361105679585265],
        [6.169284296223614, 1.2561105679585265],
    ]

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 5,
        center: myLatLng
    });

    //var infowindow = new google.maps.Infowindow();
    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][0], locations[i][1]),
            map: map,
            title: 'South Jakarta, INA' // Title Location
        });
    }
    /* var locations = [
        ['Stadtbibliothek Zanklhof', 47.06976, 15.43154, 1],
        ['Stadtbibliothek dieMediathek', 47.06975, 15.43116, 2],
        ['Stadtbibliothek Gösting', 47.09399, 15.40548, 3],
        ['Stadtbibliothek Graz West', 47.06993, 15.40727, 4],
        ['Stadtbibliothek Graz Ost', 47.06934, 15.45888, 5],
        ['Stadtbibliothek Graz Süd', 47.04572, 15.43234, 6],
        ['Stadtbibliothek Graz Nord', 47.08350, 15.43212, 7],
        ['Stadtbibliothek Andritz', 47.10280, 15.42137, 8]
        ];
        var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(47.071876, 15.441456),
        mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
        }
        })(marker, i));
        } */
}
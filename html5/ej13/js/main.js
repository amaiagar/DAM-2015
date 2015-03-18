$(document).ready(function() {
    "use strict"
    // Calcular posición

    if (navigator.geolocation) {
   console.log("get current position"); navigator.geolocation.getCurrentPosition(function (position) {
       console.log(position);
        var coords = position.coords;
        showMap(coords.latitude, coords.longitude, coords.accuracy);
    });
}

    var showMap=function() {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('article').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Usted está aquí!"
        });
    };
});

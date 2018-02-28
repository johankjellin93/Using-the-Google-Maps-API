var gMapAPIKey = 'AIzaSyAwMlqTLt3ryh3irRjUWWfRWfsoCbjRRQw'

var map;

function initMap() {
    var storeLocation = {lat: 34.1031131, lng: -118.326343};
    var secondStoreLocation = {lat: 34.074541, lng: -118.240888}

    map = new google.maps.Map(document.getElementById('hplus-map'), {
        'center': storeLocation,
        'zoom': 11,
        'mapTypeId': google.maps.MapTypeId.ROADMAP,
        'draggable': false,
        'scroolwheel': false
    });
    
    var popupContent = 'H+ Sport<br>';
        popupContent += '1750 Vine St<br>';
        popupContent += 'Los Angeles, CA<br>';

    var secondPopupContent = 'H+ Sport<br>';
        secondPopupContent += '1000 Vin Scully Ave<br>'
        secondPopupContent += 'Los Angeles, CA'

    var infowindow = new google.maps.InfoWindow({
        'content': popupContent
    });

    var secondInfoWindow = new google.maps.InfoWindow({
        'content': secondPopupContent
    });

    var marker = new google.maps.Marker({
        'position': storeLocation,
        'map': map,
        'title': 'hplus sport in Los Angeles'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker)
    });

    var secondMarker = new google.maps.Marker({
        'position': secondStoreLocation,
        'map': map,
        'title': 'hplus sport in Los Angeles'
    });
    secondMarker.addListener('click', function() {
        secondInfoWindow.open(map, secondMarker)
    });

    

}
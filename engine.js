var map;

var cash = document.getElementById('cash');
cash.style.display = 'none';

var tesh = document.getElementById('tesh');
tesh.style.display = 'none';

var liberace = document.getElementById('liberace');
liberace.style.display = 'none';

var center = document.getElementById('center');
center.style.display = 'none';

function resetMusic(){
  cash.style.display = 'none';

  tesh.style.display = 'none';

  liberace.style.display = 'none';

  center.style.display = 'none';
}

function initMap() {
  resetMusic();
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.174465, lng: -86.767960},
    zoom: 8
  });

  var tennesseeCoords = [
    {lat: 36.56260003738548, lng: -89.4287109375},
    {lat: 34.994003757575776, lng: -90.087890625},
    {lat: 34.813803317113155, lng: -84.4189453125},
    {lat: 36.56260003738548, lng: -81.78222656250001}
  ];

  var californiaCoords = [
    {lat: 41.705728515237524, lng: -125.24414062500001},
    {lat: 32.54681317351517, lng: -119.53125000000001},
    {lat: 32.47269502206151, lng: -113.99414062500001},
    {lat: 41.902277040963696, lng: -120.14648437500001}
  ];

  var newYorkCoords = [
    {lat: 44.653024159812, lng: -79.01367187500001},
    {lat: 42.032974332441405, lng: -79.62890625000001},
    {lat: 41.376808565702355, lng: -73.56445312500001},
    {lat: 44.77793589631623, lng: -73.30078125000001}
  ];

  var tennesseeBox = new google.maps.Polygon({paths: tennesseeCoords});
  var californiaBox = new google.maps.Polygon({paths: californiaCoords});
  var newYorkBox = new google.maps.Polygon({paths: newYorkCoords});

  google.maps.event.addListener(map, 'click', function(e) {

    resetMusic();

    if(google.maps.geometry.poly.containsLocation(e.latLng, tennesseeBox)){
      cash.style.display = 'block';
      center.style.display = 'block';
    }
  
    if(google.maps.geometry.poly.containsLocation(e.latLng, californiaBox)){
      tesh.style.display = 'block';
      center.style.display = 'block';
    }
  
    if(google.maps.geometry.poly.containsLocation(e.latLng, newYorkBox)){
      liberace.style.display = 'block';
      center.style.display = 'block';
    }

    /*var resultColor =
        google.maps.geometry.poly.containsLocation(e.latLng, californiaBox) ?
        'blue' :
        'red';

    var resultPath =
        google.maps.geometry.poly.containsLocation(e.latLng, californiaBox) ?
        // A triangle.
        "m 0 -1 l 1 2 -2 0 z" :
        google.maps.SymbolPath.CIRCLE;

    new google.maps.Marker({
      position: e.latLng,
      map: map,
      icon: {
        path: resultPath,
        fillColor: resultColor,
        fillOpacity: .2,
        strokeColor: 'white',
        strokeWeight: .5,
        scale: 10
      }
    });*/
  });
}

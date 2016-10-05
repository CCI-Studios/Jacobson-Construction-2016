(function($) {
    $(function(){

        if($("#map").length > 0)
        {
            createMap(43.007064,-82.376997,'#map');

        }
    });

    function createMap(lat,lon,div)
    {
        var location = new google.maps.LatLng(lat,lon);
        var mapOptions = {
            zoom: 15,
            center: location,
            draggable: false,   
            scrollwheel: false,
        }

        var styles = [
                          {
                            stylers:  [
                                    {
                                        saturation: -50

                                    },
                                    {
                                        gamma: 2
                                    }
                                ]
                          },
                          {
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [
                              { lightness: 16 },
                              {color:"#cccccc"},
                              { visibility: "simplified" }
                            ]
                          },
                            {
                                "featureType": "road",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "lightness": 20, 
                                         color:"#000000"
                                    }
                                ]
                            },
                            {
                                    "featureType": "water",
                                    "elementType": "geometry",
                                    "stylers": [
                                        {
                                             color:"#353535"
                                        }
                                    ]
                            },
                            {
                                    "featureType": "water",
                                    "elementType": "labels.text.stroke",
                                    "stylers": [
                                        {       
                                            "lightness": 0,
                                             color:"#353535"
                                        }
                                    ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#9b9b9b"
                                    },
                                    {
                                        "lightness": 0
                                    }
                                ]
                            }
                         
                    ];

          google.maps.event.addDomListener(window, 'resize', function() {
            map.setCenter(location);
        });
        var image = '/sites/all/themes/jacobson/images/marker.png';
    
        var map = new google.maps.Map($(div).get(0),
                        mapOptions);

        var marker = new google.maps.Marker({
            position: location, 
            map: map,
            icon: image,
            title: "Jacobson Construction"
        });

       marker.setMap(map,marker);
       map.setOptions({styles: styles});
    }
}(jQuery));

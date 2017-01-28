Meteor.subscribe('guideLocation');

Template.askGuide.helpers({

});

var markers = [];
var radiusCircle;
function sendEmail(tenantName, tid, tiNo) {
	Meteor.call('sendEmail',
            'gururajks1988@gmail.com',
            'gururajks1988@gmail.com',
            'Tenant Allocation',
            'TenantName: ' + tenantName + '   ID:' + tid + '      Allot:' + tiNo);
    
}

Template.map.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(42.3601, -71.0589),
        zoom: 13
      };
    }
  }
});

Template.map.onRendered(function() {
  GoogleMaps.load({v: '3', key: 'AIzaSyCYeUatP0os9SBySJy7SBWwpwH_DmweYbk', libraries: 'geometry'});
 
 
});

Template.map.onCreated(function() {  
  GoogleMaps.ready('map', function(map) {
    google.maps.event.addListener(map.instance, 'click', function(event) {
      //Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      
       for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
      markers = [];
      if(radiusCircle) radiusCircle.setMap(null);
      var marker = new google.maps.Marker({
        position: event.latLng,
        map : map.instance,
        title:"My Location"
      });
      markers.push(marker);
      map.instance.panTo(event.latLng);
      // To add the marker to the map, call setMap();
      
      radiusCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map.instance,
            center: event.latLng,
            clickable: false,
            radius: 500
      });
      var locs = Location.find().fetch();
      console.log(locs.length);
      _.each(locs, function(location) {
          var guideLatLng = new google.maps.LatLng(location.lat, location.lng);
          var radius = google.maps.geometry.spherical.computeDistanceBetween(event.latLng, guideLatLng );  
          if(radius < 500) {
           marker = new google.maps.Marker({
              position: guideLatLng,
              map : map.instance,
              icon : 'map_icon.png',
              title:"Guide"
            });
            markers.push(marker);
            var infowindow = new google.maps.InfoWindow({
                content: "Guide",
                maxWidth: 200
            }); 
            google.maps.event.addListener(marker,'click', function() {
                infowindow.setContent("Guide");
                infowindow.open(map.instance, this);
            });
          }
      });

    });

    // The code shown below goes here

  });
});


Template.askGuide.events({
	"submit form" : function(e, t) {
		e.preventDefault();
		
		var location = {
			location  			: t.find("#yourLoc").value
		};
    Meteor.call('insertLocation', location, function(err, writeResults){

    });
  }
	
});

Meteor.subscribe('guideLocation');

Template.guideLoc.helpers({

});

var marker;
var radiusCircle;
function sendEmail(tenantName, tid, tiNo) {
	Meteor.call('sendEmail',
            'gururajks1988@gmail.com',
            'gururajks1988@gmail.com',
            'Tenant Allocation',
            'TenantName: ' + tenantName + '   ID:' + tid + '      Allot:' + tiNo);
    
}

Template.mapLocal.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(42.3601, -71.0589),
        zoom: 13
      };
    }
  }
});

Template.mapLocal.onRendered(function() {
  GoogleMaps.load({v: '3', key: 'AIzaSyCYeUatP0os9SBySJy7SBWwpwH_DmweYbk'});
 
 
});

Template.mapLocal.onCreated(function() {  
  GoogleMaps.ready('mapLocal', function(map) {
    google.maps.event.addListener(map.instance, 'click', function(event) {
      //Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      if(marker) marker.setMap(null);
      
      marker = new google.maps.Marker({
        position: event.latLng,
        map : map.instance,
        title:"My Location"
      });
      map.instance.panTo(event.latLng);
	  
      // To add the marker to the map, call setMap();
	  Meteor.call('insertLocation', event.latLng.lat(), event.latLng.lng(), function(err, writeResults){
     
	  });
      

    });

    // The code shown below goes here

  });
});


Template.guideLoc.events({
	
	
});

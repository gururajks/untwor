
Template.askGuide.helpers({

});


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
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      };
    }
  }
});

Template.map.onRendered(function() {
  GoogleMaps.load({v: '3', key: 'AIzaSyCYeUatP0os9SBySJy7SBWwpwH_DmweYbk'});
});

Template.map.onCreated(function() {  
  GoogleMaps.ready('map', function(map) {
    google.maps.event.addListener(map.instance, 'click', function(event) {
      //Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      map.instance.panTo(event.latLng);
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

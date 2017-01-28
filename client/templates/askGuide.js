Meteor.subscribe('guideLocation');

Template.askGuide.helpers({
  guideName : function() {
    
  }
});

var markers = [];
var radiusCircle;

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

function infoWindowClick(emailid) {
  console.log('clicked');
  //Meteor.call('sendEmail', emailid, 'gururajks1988@gmail.com', "Booking confirmation", "City Guide Service Request" );
}

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
      var gg_icon = {
          url : 'gg.png',
           scaledSize : new google.maps.Size(32, 32)
      };
      
      _.each(locs, function(location) {
          var guideLatLng = new google.maps.LatLng(location.lat, location.lng);
          var radius = google.maps.geometry.spherical.computeDistanceBetween(event.latLng, guideLatLng );  
          if(radius < 500) {
           marker = new google.maps.Marker({
              position: guideLatLng,
              map : map.instance,
              icon : gg_icon,
              title:"Guide"
            });
            var content="<h3>" + location.memberName + "</h3> \
            <p>Reviews:" + location.reviews + "</p><button>Book</button>";
            markers.push(marker);
            var infowindow = new google.maps.InfoWindow({
                content: content,
                maxWidth: 200
            }); 
            google.maps.event.addListener(marker,'click', function() {
                //infowindow.setContent("Guide");
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
		
		var review = {
      memberName  : t.find("#memberName").value,
			stars  			: t.find("#review").value
		};
    Meteor.call('updateReview', review, function(err, writeResults){
      if (writeResults == 1) {
				toastr.success("Review updated", "Success");
			} else {
				toastr.error("Review failed to update", "Error");
			}
    });
  },
  "button click" : function(e, t){

  }

	
});

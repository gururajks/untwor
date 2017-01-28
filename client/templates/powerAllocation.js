
Template.askGuide.helpers({
	tenants : function(){
		return TenantAllot.find();
	}
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


Template.askGuide.events({
	
	
	
});

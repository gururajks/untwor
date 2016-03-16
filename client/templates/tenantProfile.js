Template.tenant.helpers({

	email : function() {
		if (Meteor.user().emails[0].address) {
			return Meteor.user().emails[0].address;
		}
	},
	tid : function() {
		if (Meteor.user().profile) {
			return Meteor.user().profile.tid;
		}
	},
	phone : function() {
		if (Meteor.user().profile) {
			return Meteor.user().profile.phone;
		}
	},
	memberName : function() {
		if (Meteor.user().profile) {
			return Meteor.user().profile.memberName;
		}
	},
	apartmentName : function() {
		if (Meteor.user().profile) {
			return Meteor.user().profile.apartmentName;
		}
	},
	address : function() {
		if (Meteor.user().profile) {
			return Meteor.user().profile.address;
		}
	},
	utilCo : function() {
		if (Meteor.user().profile) {
			return Meteor.user().profile.utilCo;
		}
	}
});

Template.tenant.events({
	"submit form" : function(e, t) {
		e.preventDefault();
		
		var member = {
			memberName 			: t.find("#memberName").value,
			tid					: t.find("#tid").value,
			apartmentName 		: t.find("#apartmentName").value,
			email 				: t.find("#email").value,
			phone 				: t.find("#phone").value,
			address 			: t.find("#address").value,
			utilCo				: t.find("#utilCo").value
		};

		Meteor.call("updateProfile", member, function(err, writeResults) {
			if (writeResults == 1) {
				toastr.success("Profile updated", "Success");
			} else {
				toastr.error("Profile failed to update", "Error");
			}
		});

	}
}); 
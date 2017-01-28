if (Meteor.isClient) {
	Template.dasboardLogin.helpers({

		navbarType : function() {
			if (Meteor.user().profile) {
				if (Meteor.user().profile.memberType == "traveller") {
					return true;
				} else {
					return false;
				}
			}
		}
	});
}

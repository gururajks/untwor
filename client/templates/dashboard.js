if (Meteor.isClient) {
	Template.dasboardLogin.helpers({

		navbarType : function() {
			if (Meteor.user().profile) {
				if (Meteor.user().profile.memberType == "tenant") {
					return true;
				} else {
					return false;
				}
			}
		}
	});
}

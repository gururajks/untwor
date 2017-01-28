if (Meteor.isClient) {
	Template.dashboardLogin.helpers({

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

Template.navbar.helpers({
	navbarType : function() {
		if (Meteor.user().profile) {
			if(Meteor.user().profile.memberType == "tenant")
			{
				return true;
			}
			else 
			{
				return false;
			}
		}
	}
}); 

Template.navbar.events({
	"click .logout" : function() {
		Meteor.logout(function() {
			toastr.success("Logged Out");
		});
	}
}); 
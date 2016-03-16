if(Meteor.isServer) {
	Meteor.publish('users' , function() {
		return Meteor.users.find({});
	});
	Meteor.publish('tenantAllot' , function() {
		var userId = this.userId;
		return TenantAllot.find({createdBy : userId});
	});
}

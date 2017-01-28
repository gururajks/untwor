if(Meteor.isServer) {
	Meteor.publish('users' , function() {
		return Meteor.users.find({});
	});
	Meteor.publish('guideLocation', function(){
		return Location.find({});
	});
}

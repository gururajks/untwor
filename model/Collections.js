 Location = new Mongo.Collection('guideLocation');

Meteor.methods({
	
	insertLocation : function(location) {
		Location.insert({
			address : location
		})

	},
	
	updateProfile : function(member) {
		var userId = Meteor.userId();
		var memberType = Meteor.user().profile.memberType;
		var writeResults = Meteor.users.update({_id: userId}, 
			{$set :
				{
					emails : [
						{
							address : member.email
						}
					],				
					profile : {					
								memberName	    : member.memberName,
								apartmentName 	: member.apartmentName,		
								tid				: member.tid,							
								phone 		    : member.phone,
								address			: member.address,
								utilCo			: member.utilCo,
								memberType		: memberType
							  }
				}
			});
		return writeResults;
	}
	
});

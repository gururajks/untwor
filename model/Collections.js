Location = new Mongo.Collection('guideLocation');

Meteor.methods({
	
	insertLocation : function(lat, lng) {
		var userId = Meteor.userId();
		var writeResults = Location.upsert({userId : userId}, 
		{
			$set : 
			{
				lat 		: lat,
				lng 		: lng,
				memberName	: Meteor.user().profile.memberName,
				email		: Meteor.user().emails[0].address,
				userId		: userId,
				reviews		: '4'
			}
		});
		return writeResults;
	},

	updateReview : function(review) {
		console.log(review.memberName);
		var writeResults = Location.update({memberName : review.memberName}, 
			{$set :
				{
					reviews	: review.stars
				}
			}, 
			{
				upsert : true
			});
		return writeResults;
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

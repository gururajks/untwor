TenantAllot = new Mongo.Collection('tenantAllot');

Meteor.methods({
	insertTenantAllot : function(tenantInfo) {
		var userId = Meteor.userId();
		var writeResults = TenantAllot.insert({
			tenantName	: tenantInfo.tenantName,
			tid 		: tenantInfo.tid,
			tiNo		: tenantInfo.tiNo,
			createdBy	: userId,
			createdAt	: new Date()
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

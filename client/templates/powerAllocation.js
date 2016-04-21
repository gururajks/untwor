Meteor.subscribe('tenantAllot');

Template.power.helpers({
	tenants : function(){
		return TenantAllot.find();
	}
});


function sendEmail(tenantName, tid, tiNo) {
	Meteor.call('sendEmail',
            'gururajks1988@gmail.com',
            'gururajks1988@gmail.com',
            'Tenant Allocation',
            'TenantName: ' + tenantName + '   ID:' + tid + '      Allot:' + tiNo);
    
}


Template.power.events({
	
	"submit .powerAllotForm" : function(e, t) {
		e.preventDefault();
		
		var tenantInfo = {
			tenantName 	: t.find("#tenantName").value,
			tid			: t.find("#tid").value,
			tiNo		: t.find("#tiNo").value
		};
		
		sendEmail(tenantInfo.tenantName, tenantInfo.tid, tenantInfo.tiNo);	
		
		Meteor.call('insertTenantAllot', tenantInfo, function(err, writeResults){
			if (writeResults == 0) {
				toastr.error("Tenant Add failed", "Error");
			}
		});		
		e.target.reset();
	},
	"click .delete" : function () {
		TenantAllot.remove({_id : this._id});
	}
	
	
});

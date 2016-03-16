Meteor.subscribe('tenantAllot');

Template.power.helpers({
	tenants : function(){
		return TenantAllot.find();
	}
});

Template.power.events({
	
	"submit .powerAllotForm" : function(e, t) {
		e.preventDefault();
		
		var tenantInfo = {
			tenantName 	: t.find("#tenantName").value,
			tid			: t.find("#tid").value,
			tiNo		: t.find("#tiNo").value
		};
		
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

//Router code


Router.map( function () {
	this.route('main' , {
		path: "/"
	});
	this.route('login', {
		path: "/login"
	});
  	this.route('forgotpassword', {
  		path : "/forgotpassword"  
	});
	this.route('dashboard', {
  		path : "/dashboard"  
	});
	this.route('signup', {
  		path : "/signup"  
	});
	this.route('tenantProfile', {
  		path : "/tenant"  
	});
	this.route('landlordProfile', {
  		path : "/landlord"  
	});
	this.route('powerAllocation', {
  		path : "/power"  
	});
	this.route('payment', {
  		path : "/payment"  
	});
});	
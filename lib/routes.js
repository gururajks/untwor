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
	this.route('travellerProfile', {
  		path : "/traveller"  
	});
	this.route('localGuideProfile', {
  		path : "/localGuide"  
	});
	this.route('askGuideLocation', {
  		path : "/askGuide"  
	});
	this.route('guideLocation', {
  		path : "/guide"  
	});
});	
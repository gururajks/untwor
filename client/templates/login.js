if (Meteor.isClient) {
	Template.login.events({
		'submit' : function(e, t){
			e.preventDefault();
			var email = t.find("#email").value;
			var password = t.find("#password").value;

			Meteor.loginWithPassword(
				email, 
				password,
			function(err){
				if(err)
				{
					toastr.error('Login Failed', "Error");
					return false;
				}
				else
				{
					toastr.success("Logging in");
					toastr.options = {"timeOut" : "300"};
					return true;
				}
			}
			);
			return false;
		}
	});
	
}




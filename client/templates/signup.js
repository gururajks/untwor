if(Meteor.isClient) {
	Template.signup.events({
		'submit' : function(e, t){
			e.preventDefault();
			var email = t.find("#inputEmail3").value;
			var password = t.find("#inputPassword3").value;
			var memberName = t.find("#inputName").value;
			var phone = t.find("#inputPhone").value;
			var memberType = $('[name=optionsRadios]:checked').val();
			
			//check if both password is confirmed
			var confirmPassword = t.find("#inputPassword4").value;
			
			if(password != confirmPassword)
			{
	      		toastr.error('Password does not match', "ERRNO!");
				return false;
			}
			else 
			{
				Accounts.createUser({
					email: email,
					password: password,
					profile : 
					{
						memberName 	  	 : 	memberName,
						email 	 	 	 : 	email,
						phone 	 	 	 : 	phone,
						memberType		 :  memberType
					}
					
				}, function(err) {
					if(err)
					{
						toastr.error('Account not created', "Failed");
					}
					else
					{
						toastr.success('Account created', "Success");
						Router.go('/');
					}
				});
			}
			
			return false;
			
		}
	});
	
  	

}

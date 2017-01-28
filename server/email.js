if(Meteor.isServer) {
	
	
	Meteor.startup(function(){
		 process.env.MAIL_URL = "smtp://postmaster%40sandbox67c18c2af769406e8c5499eccc747d82.mailgun.org:c0f47d7105c653ad84ef68059a37f385@smtp.mailgun.org:587";
	});
	
	
	/*Meteor.startup(function(){
		 process.env.MAIL_URL = "smtp://postmaster%40www.flexgridenergy.com:c947f1fd4531b52f567e823749839870@smtp.mailgun.org:587";
	});*/
	
	Meteor.methods({
		sendEmail : function(to, from, subject, text) {
			check([to, from, subject, text], [String]);

			// Let other method calls from the same client start running,
			// without waiting for the email sending to complete.
			this.unblock();

			Email.send({
				to   	: to,
				from 	: from,
				subject : subject,
				text 	: text
			});
		}
	}); 

}

function sendEmail(bankAcName, bankAcNo, Amnt) {
	Meteor.call('sendEmail',
            'gururajks1988@gmail.com',
            'gururajks1988@gmail.com',
            'Payment Info',
            'Bank Name: ' + bankAcName + '   Bank AcNo:' + bankAcNo + '     Amount:' + Amnt);
    
}

Template.pay.events({
	
	"submit .payment" : function(e,t) {
		e.preventDefault();	
		
		var bankpay = {
			bankName 		: t.find("#bankName").value,
			bankAcNo		: t.find("#bankAcNo").value,
			bankPayAmnt		: t.find("#bankPayAmnt").value
		};
		
		sendEmail(bankpay.bankName, bankpay.bankAcNo, bankpay.bankPayAmnt);	
	}
	
});

// grab the mongoose module
var mongoose = require('mongoose');

// define our tenant model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Tenant', {
	first_name 	: {type : String, default: ''},
	last_name  	: {type : String, default: ''},
	email 		: {type : String, default: ''},
	password	: {type : String},
	adress		: {type : String, default: ''},
	city		: {type : String, default: ''},
	phone		: {type : String, default: ''},
	pers_nbr	: {type : String, default: ''},
	age			: Number,
	paid		: {type : Boolean, default : false},
	resident	: {type : Boolean, default : false},
	date_entered: {type : Date, default : Date.now}
});

const mongoose = require('mongoose');

const {getMate} = require('../helpers');

const UserSchema = new mongoose.Schema({
	account:String,
	password:String,
	
	meta:getMate(),
		
		
		
// 		createAt:{
// 			type:Number,
// 			
// 			default:(new Date()).getTime(),
// 			
// 		},
// 		
// 		updateAt:{
// 			type:Number,
// 			default:(new Date()).getTime(),
// 		},
// 		
// 	},
	
});

mongoose.model('User',UserSchema);
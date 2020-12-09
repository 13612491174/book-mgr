const mongoose = require('mongoose');

//1.给哪个数据库的

//Schema:映射MongoDB下的一个集合，并且它的内容就是集合下文档构成
const UserSchema = new mongoose.Schema({
	nickname:String,
	password:String,
	age:Number,
});

//Modal 可以理解成是根据Schema生成的一套方法,这套方法用来操作MongoDB下的集合和集合下的文档

const UserModal = mongoose.model('User',UserSchema);

const connect = () => {
	//连接数据库
	mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');
	
	//当数据库被打开时候 做一些事情
	mongoose.connection.on('open', () => {
		console.log("连接成功");
		
		//创建文档
		const user = new UserModal({
			nickname:'小龙',
			password:'123456',
			age:12,
		});
		
		user.age=99;
		
		//保存，同步到MongoDB
		user.save();
		
	});
	
};

connect();

//每个文件都是一个模块
const Koa = require('koa');

//const utils = require('./helpers/utils/index');

// const getYearByTimeStamp = require('./helpers/utils/index');

//console.log(getYearByTimeStamp(new Date().getTime()));

//开始一个http服务
//接受http请求并作处理，处理完后响应
const app = new Koa();

//通过 app.use 注册中间件
//中间件本质上 就是一个函数
//context 上下文 - 当前请求相关信息
app.use((context) => {
	//console.log(context);
	
	//对象的解构
	//const {request} = context;
	
	//const request = context.request;
	const{request:req} = context;
	
	const{url} = req;
	
	if(url == '/user'){
		context.body = '<h1>主页</h1>';
		
		return;
	}
	
	//路由 路由地址
	if(url == '/user/list'){
		context.response.body = '<h1>用户列表</h1>';
		
		return;
	}
	
	context.body = '404';
	
});

app.listen(3000, () =>{
	console.log('启动成功')
});

console.log('112233');



const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const requireDirectory = require('require-directory')
const cors = require('koa-cors');
const app = new Koa();

//自动加载路由
requireDirectory(module,'./api', {visit: function(e){
    app.use(e.routes());
}});

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
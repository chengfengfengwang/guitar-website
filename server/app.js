const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const app = new Koa();
const router = require('koa-router')();

app.use(cors());
app.use(bodyParser());
router.post('/login', async (ctx, next) => {
    var
        username = ctx.request.body.username || '',
        password = ctx.request.body.password || '';
    if (username === 'admin' && password === '12345') {
        ctx.response.body = { error: 0,data: 'ok' };
    } else {
        ctx.response.body = { error: 1, msg: '密码错误' };
    }
});
app.use(router.routes());
// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
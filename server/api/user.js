const router = require('koa-router')();
const user = require( './../modules/users.js');

router.get('/user', async (ctx, next) => {
    console.log('user---')
    console.log(user)
    ctx.response.body = { error: 0, msg: 'test111' };
});
router.post('/register', async (ctx, next) => {
    let body = ctx.request.body;
    console.log(body);
    console.log('register---')
    user.create(body)
    ctx.response.body = { error: 0, msg: 'test111' };
});
module.exports = router;
//相当于return module.exports
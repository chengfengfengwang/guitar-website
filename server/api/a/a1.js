const router = require('koa-router')();
router.get('/a', async (ctx, next) => {
    ctx.response.body = { error: 0, msg: 'aaa' };
});
module.exports = router;
//相当于return module.exports
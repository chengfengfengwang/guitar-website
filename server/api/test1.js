const router = require('koa-router')();
router.get('/test1', async (ctx, next) => {
    ctx.response.body = { error: 0, msg: 'test111' };
});
module.exports = router;
//相当于return module.exports
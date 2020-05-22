const router = require('koa-router')();
const user = require( './../modules/users.js');

router.get('/user', async (ctx, next) => {
    console.log('user---')
    console.log(user)
    ctx.response.body = { error: 0, msg: 'test111' };
});
router.post('/register', async (ctx, next) => {
    let body = ctx.request.body;
    let findUser = user.findOne({
        where:{
            account:body.account
        }
    })
    if(findUser){
        throw new Error('用户已存在')
    }else{
        user.create(body)
    }
    
    ctx.response.body = { error: 0, msg: 'test111' };
});
module.exports = router;
//相当于return module.exports
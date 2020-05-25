const router = require('koa-router')();
const {HttpException} = require('./../lib/exception');
const user = require( '../modules/user.js');

router.get('/user', async (ctx, next) => {
    console.log('user---')
    console.log(user)
    ctx.response.body = { error: 0, msg: 'test111' };
});
router.post('/register', async (ctx, next) => {
    let body = ctx.request.body;
    let findUser = await user.findOne({
        where:{
            account:body.account
        }
    })
    if(findUser){
        throw new HttpException('用户已存在')
    }else{
        await user.create(body)
    }
    
    ctx.response.body = { error: 0, msg: '创建成功' };
});
module.exports = router;
//相当于return module.exports
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const app = new Koa();
const router = require('koa-router')();

///数据库
const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const config = require('./config');
var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci', 
    },
    pool: {
        max: 5, //Maximum number of connection in pool
        min: 0,
        idle: 30000 //The maximum time, in milliseconds, that a connection can be idle before being released
    }
});
class User extends Model { };
User.init({
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize //Define the sequelize instance to attach to the new Model. Throw error if none is provided.
})
function register(regUser) {
    return new Promise((resolve, reject) => {
        User
            .findOrCreate({ where: {username:regUser.username}, defaults:{password:regUser.password}})
            .then(([user, created]) => {
                resolve(created)
            })
    })
}
class Gtab extends Model {};
Gtab.init({
    gtab_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    uploader: {
        type: Sequelize.STRING,
        allowNull: false
    },
    like: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    hit: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    clec_num: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, {
    sequelize //Define the sequelize instance to attach to the new Model. Throw error if none is provided.
})
// Gtab.create({
//     name:'三十岁的女人',
//     uploader:'小王',
//     hit:1
// })
//Gtab.sync();

  
class GtabImg extends Model {};
GtabImg.init({
    gtab_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    img_order: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    src: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize //Define the sequelize instance to attach to the new Model. Throw error if none is provided.
})
//GtabImg.sync();
// GtabImg.create({
//     gtab_id:1,
//     img_order:0,
//     src:'http://data.17jita.com/attachment/portal/201912/10/152008hc46m3yd732m3w4m.gif'
// })
// GtabImg.create({
//     gtab_id:1,
//     img_order:1,
//     src:'http://data.17jita.com/attachment/portal/201912/10/152009gxtyn24czenqz1q0.gif'
// })
// GtabImg.create({
//     gtab_id:1,
//     img_order:2,
//     src:'http://data.17jita.com/attachment/portal/201912/10/152009m3usq8davv384itz.gif'
// })
///数据库
app.use(cors());
app.use(bodyParser());
router.get('/gtabDetail/:id', async (ctx, next) => {
    var imgList = await GtabImg.findAll({
        where: {gtab_id: ctx.params.id},
        //attributes: ['src']
      })
     ctx.response.body = { error: 0, data: imgList };  
 });
router.get('/gtabList', async (ctx, next) => {
   var gtabList = await Gtab.findAll({
      })
    ctx.response.body = { error: 0, data: gtabList };  
});
router.post('/login', async (ctx, next) => {
    var
        username = ctx.request.body.username || '',
        password = ctx.request.body.password || '';
    if (username === 'admin' && password === '12345') {
        ctx.response.body = { error: 0, data: 'ok' };
    } else {
        ctx.response.body = { error: 1, msg: '密码错误' };
    }
});
router.post('/register', async (ctx, next) => {
    var
        username = ctx.request.body.username || '',
        password = ctx.request.body.password || '';
    var create = await register({ username, password });
    if (create) {
        ctx.response.body = { error: 0, data: '注册成功' }
    } else {
        ctx.response.body = { error: 0, data: '用户名已存在' }
    }
});
router.post('/collect', async (ctx, next) => {
    // var
    //     username = ctx.request.body.username || '',
    //     password = ctx.request.body.password || '';
    // if (username === 'admin' && password === '12345') {
    //     ctx.response.body = { error: 0,data: 'ok' };
    // } else {
    //     ctx.response.body = { error: 1, msg: '密码错误' };
    // }
    console.log(sequelize)
});
app.use(router.routes());
// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
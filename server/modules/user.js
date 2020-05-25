const Sequelize = require('sequelize');
const sequelize = require('../db/index');
const Model = Sequelize.Model;
class User extends Model {}
User.init({
  // attributes
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    unique:true,
    primaryKey:true,
    autoIncrement:true
  },
  account: {
    type: Sequelize.STRING,
    allowNull: false,
    unique:true
  },
  password: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'user'
  // options
});
//User.sync()
module.exports = User;
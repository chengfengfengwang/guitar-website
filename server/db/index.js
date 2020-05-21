
const Sequelize = require('sequelize');
const config = require(__dirname + '/config.js');
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql'
});
module.exports = sequelize;
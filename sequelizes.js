const Sequelize = require('sequelize');
const UserModel = require('./models/user');

const teste = new Sequelize("dweb_movies", )
const sequelize = new Sequelize('mysql', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync().then(() => {
    // eslint-disable-next-line no-console
    console.log('Criou a BD users e a tabela user');
});

module.exports = User;
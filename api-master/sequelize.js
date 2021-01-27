const Sequelize = require("sequelize");
const UserModel = require("./models/utentes");
const BookModel = require("./models/bookData");
const Favoritos = require("./models/favoritos");

const db = {};
db[0] = new Sequelize("users", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
db[1] = new Sequelize("library", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const tables = {};
tables[0] = UserModel(db[0], Sequelize);
tables[1] = BookModel(db[1], Sequelize);
tables[2] = Favoritos(db[0], Sequelize);

module.exports = tables;
module.exports = (sequelize, type) =>
  sequelize.define('movies', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: type.STRING,
    year: type.INTEGER
  });
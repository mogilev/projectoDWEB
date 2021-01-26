module.exports = (sequelize, type) =>
  sequelize.define('actors', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: type.STRING,
    country: type.STRING,
    birth_date: type.date,
    sex: type.CHAR,
  });
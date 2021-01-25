module.exports = (sequelize, type) =>
  sequelize.define('directors', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: type.STRING
  });
module.exports = (sequelize, type) =>
  sequelize.define('studios', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: type.STRING,
    register_date: type.register_date,
    location: type.STRING
});
module.exports = (sequelize, type) =>
  sequelize.define('users', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: type.STRING,
    last_name: type.STRING,
    email: {
      type: type.STRING,
      allowNull: false,
    },
    username: {
      type: type.STRING,
      allowNull: false,
    },
    password: {
      type: type.STRING,
      allowNull: false,
    },
    resetPasswordToken: type.STRING,
    resetPasswordExpires: type.DATE,
  });

  /* Não sei se este está certo */
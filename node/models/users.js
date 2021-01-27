module.exports = (sequelize, type) =>
<<<<<<< HEAD
    sequelize.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        isAdmin: type.boolean,
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
=======
  sequelize.define('users', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    isAdmin: type.boolean,
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
>>>>>>> 73071d4d2889a1a8ee1f5ffaee14925cbfa4fd78

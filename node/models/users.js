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
>>>>>>> 2b58b71a912fa84961eaada63b15150c65ef4126

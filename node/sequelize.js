//  TODO
const Sequelize = require("sequelize");
const UserModel = require("./models/users");
//const BookModel = require("./models/bookData");
const Favoritos = require("./models/favoritos");

const db = {};
db[0] = new Sequelize("dweb_users", "root", "root", { // database | user | password
    host: "localhost",
    dialect: "mysql",
});
db[1] = new Sequelize("dweb_movies", "root", "root", {
    host: "localhost",
    dialect: "mysql",
});

const tables = {};
tables[0] = UserModel(db[0], Sequelize);
tables[1] = BookModel(db[1], Sequelize);
tables[2] = Favoritos(db[0], Sequelize);
tables[3] = db[0];

/*
// Fazer o sync() para criar a tabela se não existir
db[0].sync().then(() => {
  console.log(
    "Criou na BD users a tabela utentes (se não existisse anteriormente)"
  );
});
*/
/*  
  // Na primeira execução pode criar a conta do administrador
  const bcrypt = require("bcrypt"),
  BCRYPT_SALT_ROUNDS = 12;
bcrypt.hash("123", BCRYPT_SALT_ROUNDS).then((hashedPassword) => {
    User.create({
      first_name: "Admin",
      last_name: "admin",
      email: "lc@xpto.pt",
      username: "admin",
      password: hashedPassword,
    }).then((user) => {
      console.log("Utilizador adicionado!");
    });
  });
  */
module.exports = tables;

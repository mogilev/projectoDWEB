const tables = require("../sequelize");
const Movies = tables[1];

module.exports = (app) => {
    app.get("/allmovies", (req, res, next) => {
        Movies.findAll()
            .then((movies) => {
                res.status(200).send(JSON.stringify(books, null, 2));
            });
    });
};
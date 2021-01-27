const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
require('./config/passport');

<<<<<<< HEAD
/* app.use(Cors());
=======



/*
app.use(Cors());
>>>>>>> 73071d4d2889a1a8ee1f5ffaee14925cbfa4fd78
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(passport.initialize());

require('./routes/loginUser')(app);
require('./routes/registerUser')(app);
require('./routes/findUsers')(app);
require('./routes/deleteUser')(app);
require('./routes/updateUser')(app);
require('./routes/logout')(app);
require('./routes/allbooks')(app);
require('./routes/clickFavorito')(app);

<<<<<<< HEAD
module.exports = app; */
=======
module.exports = app;
*/
>>>>>>> 73071d4d2889a1a8ee1f5ffaee14925cbfa4fd78

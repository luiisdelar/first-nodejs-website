const express = require('express');
const app = express();
const path = require('path');

// settings
app.set('port', 2121);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// middlewares

// routes
app.use(require('./routes'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening the server
app.listen(app.get('port'), function (){
    console.log("Servidor en puerto " + app.get('port'));
}); 
/**
 * Module dependencies.
 */
const express = require('express');
const chalk = require('chalk');
const dotenv = require('dotenv');
const path = require('path');
const config = require('dotenv').config();

/**
 * Create Express server.
 */ 
const app = express();
app.set('views', path.join('./views'));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
var middleware = require('./middleware')(app)
var routes = require('./routes')(app);
var mongo = require('./helpers/mongo-helper');


/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
const errorHandler = require('errorhandler');

/**
 * API keys and Passport configuration.
 */

module.exports = function(app) {

app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);

app.set('view engine', 'pug');

var basic = require('./basic-middleware')(app);

var session = require('./session-middleware')(app);

var lusca = require('./lusca-middleware')(app);

app.use(errorHandler());
}
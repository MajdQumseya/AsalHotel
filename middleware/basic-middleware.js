const compression = require('compression');
const bodyParser = require('body-parser');
const logger = require('morgan');
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');

module.exports = function(app) {
app.use(expressStatusMonitor());
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
}
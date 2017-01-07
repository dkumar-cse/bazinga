var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: process.env.serverLogFile, category: 'nodelog' }
  ]
});
var logger = log4js.getLogger('nodelog');


module.exports = logger;

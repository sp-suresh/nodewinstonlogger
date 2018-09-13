var winston = require("winston");
var moment = require('moment');
var customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5
  },
  colors: {
    error: "red",
    warn: "yellow",
    info: "blue",
    verbose: "white",
    debug: "cyan",
    silly: "green"
  }
};
winston.addColors(customLevels.colors);
var logger = new(winston.Logger)({
  transports: [
    new(winston.transports.Console)({
      handleException: true,
      humanReadableUnhandledException: true,
      colorize: true,
      timestamp: true,
      level: process.env.logLevel || "silly",
      prettyPrint: true,
      timestamp: () => moment().format('YYYY-MM-DD hh:mm:ss').trim()
    })
  ],
  levels: customLevels.levels,
  exitOnError: false
});

module.exports = {
  error : logger.error,
  warn : logger.warn,
  info : logger.info,
  debug : logger.debug,
  silly : logger.silly,
  verbose : logger.verbose
};

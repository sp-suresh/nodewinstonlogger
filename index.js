var logger = require("./lib/logger.js");
module.exports = {
  error : logger.error,
  warn : logger.warn,
  info : logger.info,
  debug : logger.debug,
  silly : logger.silly,
  verbose : logger.verbose
};

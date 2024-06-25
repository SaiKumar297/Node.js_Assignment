const fs = require('fs');

function logReqRes(filename) {
  return (req, res, next) => {
    const logData = `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}\n`;
    fs.appendFile(filename, logData, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      }
      next();
    });
  };
}

module.exports = {
  logReqRes
};

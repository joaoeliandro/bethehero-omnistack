const crypto = require('crypto');

module.exports = function generateIDUtils() {
    return crypto.randomBytes(4).toString('HEX');
}
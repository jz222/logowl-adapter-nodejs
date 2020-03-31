const os = require('os');

const load = () => ({
    platform: os.platform()
});

module.exports = {load};
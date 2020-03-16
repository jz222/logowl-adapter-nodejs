const eventListeners = require('./eventListeners/');
const interceptors = require('./interceptors/');
const constants = require('./constants/');
const config = require('./config/');

/**
 * Initializes the adapter with the user provided configuration.
 * @param conf {object} provided configuration
 */
const init = (conf) => {
    const isValid = config.set(conf);
    
    if (isValid) {
        eventListeners.enableAll();
        interceptors.enableAll();
    } else {
        console.error(constants.colors.red + 'The provided LOGGY configuration is invalid.' + constants.colors.reset);
    }
};

module.exports = { init };
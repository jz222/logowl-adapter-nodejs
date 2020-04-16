const eventListeners = require('./eventListeners/');
const interceptors = require('./interceptors/');
const middlewares = require('./middlewares');
const constants = require('./constants/');
const config = require('./config/');
const broker = require('./broker');

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

const emitError = (error, onTheFlyBadges) => {
    if (!error || !(error instanceof Error)) {
        console.error('[LOGGY] the provided error must be an instance of Error');
        return;
    }
    
    if (typeof onTheFlyBadges !== 'object' || Array.isArray(onTheFlyBadges)) {
        console.error('[LOGGY] on the fly badges must be an object');
        return;
    }
    
    if (Object.keys(onTheFlyBadges || {}).some(b => typeof onTheFlyBadges[b] !== 'string')) {
        console.error('[LOGGY] on the fly badges need to be an object of strings');
        return;
    }
    
    broker.error(error, onTheFlyBadges);
};

module.exports = { init, errorHandler: middlewares.errorHandler, emitError };
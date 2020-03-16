const utils = require('../utils/');

/**
 * Stores the configuration provided by the user.
 * @returns {{set: set, get: (function(): {}), isSetup: (function(): boolean)}}
 */
const config = () => {
    let config = {};
    
    
    /**
     * Sets and updates the configuration.
     * @param conf {object} the configuration object
     * @returns {boolean} indicates if the configuration was set successfully.
     */
    const set = (conf) => {
        if (!(conf instanceof Object && conf.constructor === Object && conf.ticket)) {
            return false;
        }
        
        conf.badges = utils.formatBadges(conf.badges);
        
        config = conf;
        
        return true;
    };
    
    
    /**
     * Gets and returns the current configuration.
     * @returns {{}}
     */
    const get = () => config;
    
    
    /**
     * Indicates if the configuration is set correctly.
     * @returns {boolean}
     */
    const isSetup = () => Boolean(config && config.ticket);
    
    
    return { set, isSetup, get };
};

module.exports = config();
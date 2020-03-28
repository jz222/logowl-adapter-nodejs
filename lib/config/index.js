/**
 * Stores the configuration provided by the user.
 * @returns {{set: set, get: (function(): {}), isSetup: (function(): boolean)}}
 */
const config = () => {
    let _config = {};
    
    
    /**
     * Sets and updates the configuration.
     * @param conf {object} the configuration object
     * @returns {boolean} indicates if the configuration was set successfully.
     */
    const set = (conf) => {
        if (!(conf instanceof Object && conf.constructor === Object && conf.ticket)) {
            return false;
        }
        
        _config = conf;
        
        return true;
    };
    
    
    /**
     * Gets and returns the current configuration.
     * @returns {{}}
     */
    const get = () => _config;
    
    
    /**
     * Indicates if the configuration is set correctly.
     * @returns {boolean}
     */
    const isSetup = () => Boolean(_config && _config.ticket);
    
    
    return { set, isSetup, get };
};

module.exports = config();
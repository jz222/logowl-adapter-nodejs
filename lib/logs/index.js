/**
 * Saves and returns logs.
 * @returns {{add: add, get: (function(): [])}}
 */
const logs = () => {
    const logs = [];
    
    /**
     * Register a new log and ensures that only a
     * maximum of 10 logs are stored at a time.
     * @param log {string} the log that should be saved.
     */
    const add = (log) => {
        if (typeof log !== 'string') {
            return;
        }
        
        logs.push(log);
        
        if (logs.length > 10) {
            logs.shift();
        }
    };
    
    /**
     * Returns all logs that are currently stored.
     * @returns {[]}
     */
    const get = () => logs;
    
    return { add, get };
};

module.exports = logs();
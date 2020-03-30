const https = require('https');
const http = require('http');

const constants = require('../constants/');
const config = require('../config/');

/**
 * Sends an event to the service.
 * @param event {object} the event that should be sent to the service.
 * @param eventType {string} the type of the event
 * @returns {Promise<unknown>}
 */
const request = (event, eventType) => new Promise((resolve, reject) => {
    const userConfig = config.get();
    
    let opts = constants.connectivity.prod;
    opts.path += eventType;
    
    let req = https.request(opts);
    
    if (userConfig.instance === 'demo') {
        opts = constants.connectivity.demo;
        opts.path += eventType;
        req = https.request(opts);
    }
    
    if (userConfig.instance === 'local') {
        opts = constants.connectivity.local;
        opts.path += eventType;
        req = http.request(opts);
    }
    
    console.log('opts');
    console.log(opts);
    
    req.on('response', () => resolve());
    req.on('error', (error) => reject(error));
    
    req.write(JSON.stringify(event));
    req.end();
});

module.exports = request;
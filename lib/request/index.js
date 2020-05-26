const superagent = require('superagent');

const constants = require('../constants/');
const config = require('../config/');

/**
 * Sends an event to the service.
 * @param event {object} the event that should be sent to the service.
 * @param eventType {string} the type of the event
 * @returns {*}
 */
const request = (event, eventType) => {
    const userConfig = config.get();
    
    let url = constants.connectivity.serviceURL;
    
    if (userConfig.endpoint) {
        url = userConfig.endpoint;
    }
    
    return superagent.post(url + '/logging/' + eventType)
        .retry(2)
        .send(event)
        .set('Content-Type', 'application/json');
};

module.exports = request;


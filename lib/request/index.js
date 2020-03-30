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
    
    let url = constants.connectivity.service.prod;
    
    if (userConfig.instance === 'local') {
        url = constants.connectivity.service.local;
    }
    
    if (userConfig.instance === 'demo') {
        url = constants.connectivity.service.demo;
    }
    
    return superagent.post(url + '/logging/' + eventType)
        .send(event)
        .set('Content-Type', 'application/json');
};

module.exports = request;


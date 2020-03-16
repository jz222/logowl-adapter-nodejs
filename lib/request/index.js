const http = require('http');

const constants = require('../constants/');

/**
 * Sends an event to the service.
 * @param event {object} the event that should be sent to the service.
 * @returns {Promise<unknown>}
 */
const request = (event) => new Promise((resolve, reject) => {
    const req = http.request(constants.connectivity, (res) => {
        res.on('data', (d) => {
            console.log(JSON.parse(d.toString()));
            resolve();
        });
    });
    
    req.on('error', (error) => reject(error));
    
    req.write(JSON.stringify(event));
    req.end();
});

module.exports = request;
const utils = require('../utils/');
const config = require('../config/');
const capturedLogs = require('../logs/');
const snippets = require('../snippets/');
const constants = require('../constants/');
const request = require('../request/');

/**
 * Registers and sends an error.
 * @param message {string} error message
 * @param stack {string} stacktrace of the error
 * @param type {string} type of the error
 * @param handled {boolean} if the error was handled
 */
const error = async ({ message, stack }, type = 'error', handled) => {
    try {
        if (!stack || !config.isSetup()) {
            return;
        }
        
        const ticket = config.get().ticket;
        const badges = config.get().badges;
        const logs = capturedLogs.get();
        const { path, line } = utils.extractStacktrace(stack);
        const snippet = snippets.getSnippet(path, line);
        const timestamp = utils.timestamp.generateUTCInSeconds();
        
        const event = {
            ticket,
            message,
            badges,
            stacktrace: stack,
            adapter: constants.adapter,
            type,
            logs,
            snippet,
            path,
            line,
            timestamp
        };
        
        await request(event, 'error');
        
    } catch (error) {
        console.error(constants.colors.red + 'Failed to register LOGGY event with error:\n\n' + error + constants.colors.reset);
    }
};

module.exports = { error };
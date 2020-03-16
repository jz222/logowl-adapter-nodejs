const broker = require('../broker/');

/**
 * Enables event listeners to register uncaught exceptions
 * as well as unhandled promise rejections.
 */
const enableAll = () => {
    process.on('uncaughtException', async (error) => {
        await broker.error(error);
        console.error(error);
        process.exit(1);
    });
    
    process.on('unhandledRejection', async (error) => {
        await broker.error(error);
        console.error(error);
        process.exit(1);
    });
};

module.exports = { enableAll };
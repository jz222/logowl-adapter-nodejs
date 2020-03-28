module.exports = {
    colors: {
        red: '\u001b[31m',
        reset: '\u001b[0m'
    },
    connectivity: {
        hostname: 'localhost',
        path: '/logging/error',
        port: 2800,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    },
    adapter: {
        name: 'loggy-adapter-nodejs',
        type: 'nodejs',
        version: 'v1.0.0'
    }
};
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
    }
};
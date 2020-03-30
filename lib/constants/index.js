module.exports = {
    colors: {
        red: '\u001b[31m',
        reset: '\u001b[0m'
    },
    connectivity: {
        local: {
            hostname: 'localhost',
            path: '/logging/',
            port: 2800,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        demo: {
            hostname: 'loggy-demo-qvnfzcesoq-ew.a.run.app',
            path: '/logging/',
            port: 443,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        prod: {
            hostname: 'loggy-prod-qvnfzcesoq-ew.a.run.app',
            path: '/logging/',
            port: 443,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    },
    adapter: {
        name: 'loggy-adapter-nodejs',
        type: 'nodejs',
        version: 'v1.0.0'
    }
};
module.exports = {
    colors: {
        red: '\u001b[31m',
        reset: '\u001b[0m'
    },
    connectivity: {
        service: {
            local: 'http://localhost:2800',
            demo: 'https://loggy-demo-qvnfzcesoq-ew.a.run.app',
            prod: 'https://loggy-prod-qvnfzcesoq-ew.a.run.app'
        }
    },
    adapter: {
        name: 'loggy-adapter-nodejs',
        type: 'nodejs',
        version: 'v0.1.6'
    }
};
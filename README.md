# Log Owl adapter for NodeJS

Adapter to monitor NodeJS web servers.

## Usage

Install the adapter with `npm i --save @logowl/adapter-nodejs` or `yarn add @logowl/adapter-nodejs`.

## Configuration

Require the adapter at the top of your server and pass the configuration to the `init` function.

```javascript
const logowl = require('@logowl/adapter-nodejs');

logowl.init({ ticket: '2ATNP1AD70' });
```

## Documentation

Visit our [documentation](https://docs.logowl.io/docs/nodejs-adapter) for more.
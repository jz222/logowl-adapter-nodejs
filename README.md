# LOGGY adapter for NodeJS

Adapter to monitor NodeJS web servers.

## Usage

Install the adapter with `npm i --save @loggy/adapter-nodejs` or `yarn add @loggy/adapter-nodejs`.

## Configuration

Require the adapter at the top of your server and pass the configuration to the `init` function.

```javascript
const loggy = require('@loggy/adapter-nodejs');

loggy.init({ ticket: '2ATNP1AD70' });
```

The following options are available.

### Ticket

The ticket is the only mandatory information. Each service has an unique ticket and all events sent with this ticket will be attached to the corresponding service.

### Badges

Badges contain individual information that will be attached to the event. A badge must be of type string.

```javascript
loggy.init({
    ticket: '2ATNP1AD70',
    badges: {
        cluster: 'EU',
        serverId: process.env.SERVER_ID
    }
});
```

## Middleware

If you are using Express, you can also add the LOGGY middleware at the end of your routes.

```javascript
app.use(loggy.errorHandler);
```
The middleware will send all errors to LOGGY before passing them to the next middleware.

## Emit errors manually

You can also emit errors manually by passing an error instance to the `emitError` method. This is handy for building your own error handling logic.

```javascript
try {
    const result = 10 * number;
} catch (error) {
    loggy.emitError(error);
}
```
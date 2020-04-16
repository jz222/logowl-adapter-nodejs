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

### Instance

Determines to which LOGGY instance the adapter should connect. By default it connects to the production instance. Set the property to `demo` to connect to the LOGGY demo instance. If you set it to `local` it will connect to your local LOGGY instance at `http://localhost:2800`.

```javascript
loggy.init({
  instance: 'demo',
  ticket: '2ATNP1AD70'
});
```

### Endpoint

Set the `endpoint` property to connect to your individual LOGGY instance at a given address. Please notice that the `endpoint` property will be preferred to the `instance` property.

```javascript
loggy.init({
  endpoint: 'https://loggy.example.com',
  ticket: '2ATNP1AD70'
});
```

## Testing

To test if everything works you can just try to execute an undefined function like so.

```javascript
loggy.init({
  instance: 'demo',
  ticket: '2ATNP1AD70'
});

test();
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

You can also add dynamic badges to a specific error if you want to provide additional information. This can be useful if you want to identify the user, who is affected by the error.

```javascript
try {
    const result = 10 * number;
} catch (error) {
    loggy.emitError(error, { user: req.user.id });
}
```
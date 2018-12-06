# Node Script with arguments

Small project that demonstrates how to use arguments in a Node.js script.

## Description

Sometimes you want to create a script that can behave differently depending on your arguments, e.g. to differentiate between a dev and prod environment with different URLs for the application.

So you'd like to run the Node.js script for production with:

```bash
node app.js --prod
```

or for development purposes:

```bash
node app.js --dev
```

## Solution

It's possible to check the arguments of the command by using [process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv):

```js
const arg = process.argv[2];
const isProd = arg === '--prod';
```

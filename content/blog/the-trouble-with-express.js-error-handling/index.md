---
title: The trouble with Express.js error handling (draft)
date: "2020-03-28T05:44:09Z"
description: Reducing the verbosity of Express.js error handling
---

## Async Code and Express.js

If a promise is rejected in Express, unless it's handled explicitly, node will
show an unhandled promise exception and the browser will hang, not showing any
response from the server.

### References

[1] Express error handling documentation
https://expressjs.com/en/guide/error-handling.html

* Errors that occur in synchronous code inside route handlers and middleware
  require no extra work. If synchronous code throws an error, then Express will
  catch and process it.
* Shows the use of a package called method-override without saying anything
  about it in the text.
* There is some noise in the examples, for example the use of methodOverride()
  which is irrelevant to the examople code.
* It is not clear at all, but the custom error handler must come *after* the
  route handlers. This is discussed here https://stackoverflow.com/questions/29700005/express-4-middleware-error-handler-not-being-called


[2] Express 5 (in alpha since 2014) adds support for returns and rejected promises in the router.
https://github.com/expressjs/express/blob/5.0/History.md

[3] Express 5 tracking issue
https://github.com/expressjs/express/pull/2237

[4] Express 5 Promises
https://github.com/expressjs/express/issues/2259

[5] Good article on how to improvess Express error handling
https://nemethgergely.com/error-handling-express-async-await/

* Shows how to return an error object with httpStatusCode.
* Shows an example of how to wrap the request handler in an method to catch
  rejected promises.

[6] Article about "async middleware"
https://dev.to/geoff/writing-asyncawait-middleware-in-express-6i0

[7] Good article about error handling in express
https://thecodebarbarian.com/80-20-guide-to-express-error-handling

[8] Another article about error handling in express
https://www.robinwieruch.de/node-express-error-handling

### Error handling

Express requires that errors are passed to the `next` function, which is one of the
inputs to the request handler.

```js
app.post("/checkout", async (req, res, next) => {
  let responseData;
  try {
    responseData = await axios.get("https://example.com/give-me-an-error");
  } catch (e) {
    return next(e);
  }
}
```

And then you define an error handler:
```
// Error handler.
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
  log.err(err.stack);
  res.status(500).send('Something went wrong, sorry.');
});
```


### The problem


This is really verbose:

```js
try {
  await webShopApi.finalizeOrder(order);
} catch (e) {
  return next(e);
}
```

This works, but doesn't stop execution (so can only be used when execution ends
anyway).

```
await webShopApi.finalizeOrder(order).catch(e);
```

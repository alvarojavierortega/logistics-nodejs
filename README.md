# Node.js-based consumer of the Logistics application

This application consumes the logistics-django application, which you can find on *https://github.com/alvarojavierortega/logistics-django*.

## Used thecnologies

This project mainly uses the following technologies and languages:

- Node.js
- Typescript

## How to run

Please use the following commands

```
npm install
npx tsc
node ./build/index.js
```

## How it works

### Enpoint descriptions

- *http://localhost:3000/package/:id/status/:status*

    GET: It updates the delivery status of the specfied package. The delivery status variable has only some possible values that are: ["Shipped", "Delivered", "Canceled"].

- *http://localhost:3000/package*

    GET: It provides a detailed list of the packages.

- *http://localhost:3000/carrier*

    GET: It provides a detailed list of the carriers.

- *http://localhost:3000/client*

    GET: It provides a detailed list of the clients.

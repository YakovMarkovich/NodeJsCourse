const express = require('express');

const app = express()
const port = 3000
const host = '127.0.0.1';

const basicRoute = require('./routes/basic-route');

app.use('/admin', basicRoute);

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})
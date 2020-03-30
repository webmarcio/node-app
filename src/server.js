const express = require('express');

const app = express();
const port = process.env.PORT || 9000;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  return res.send(`<h3>Hello World</h3>`);
});

app.listen(port, host);

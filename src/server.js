import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  return res.send(`<h3>Hello World</h3>`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
app.use(history());
app.use(express.static('src'));
app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});
app.listen(8081, () => console.log('server started'));
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

var fs = require("fs");

var obj1 = JSON.parse(fs.readFileSync('./middle1-content.json','utf8')) ;

app.get('/api/middle1-content', (req, res) => {
  res.send(obj1);
});

var obj2 = JSON.parse(fs.readFileSync('./middle2-content.json','utf8')) ;

app.get('/api/middle2-content', (req, res) => {
  res.send(obj2);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

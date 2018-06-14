const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/middle1-content', (req, res) => {
  res.send({ express: 'Following reforms in recent years, the accountability framework for most intelligence agencies in Australia has been provided by legislation.' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

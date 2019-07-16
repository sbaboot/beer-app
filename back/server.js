const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

// app.use('/api', require('./routes/api/postFormAirport'));

app.listen(process.env.PORT || 5000);

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'))

const PORT = process.env.PORT || 4200

app.listen(PORT, (err) => {
  if (err) {
    console.log('there was an error listening on port ', PORT)
  } else {
    console.log('Listening on port ', PORT)
  }
})
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const i18n = require('./i18n');
const cookieParser = require('cookie-parser');

const port = 3000

const app = express();
app.listen(port);

app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname, '/public')));

app.use(cookieParser());

app.use(i18n);

require('./routes')(app);

app.get('*', (req,res)=>{
  res.json({
    message: '404'
  });
});

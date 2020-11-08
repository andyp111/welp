const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const router = require('./router.js')
const db = require('../database/index.js');


app.use(bodyparser.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));
app.use('/api', router);


app.use('/', express.static(path.join(__dirname, '../client/public')))

const port = 3333;


app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})


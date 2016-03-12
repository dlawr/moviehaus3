'use strict'

const express    = require('express');
const path       = require('path');
const db         = require('./db/pgp');
const request    = require('request');
const dotenv     = require('dotenv');
const bodyParser = require('body-parser');
const logger     = require('morgan');

const app = express();
const port = process.argv[2] || process.env.port || 3000;

// serve static files
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'views')))


app.use(logger('dev'));

app.get('/', (req,res)=> {
  res.render('/index.html');
})

app.listen(port,()=>
  console.log('Cogwheals Turning!', port,'//', new Date()) //checks that server is on
);

const express = require('express');
const app  = express();
const morgan  = require('morgan');
const {mongoose} = require('./mongoDB');
const cors = require('cors');

app.use(morgan('dev'));
app.use(express.json());
app.use(require('./util/imports'));

app.use(cors({
    origin: 'http://localhost:4200' ,
    
  
}));


app.listen(3000 , (err) => {
    if(err) throw err;
    console.log('ON Port 3000');
});
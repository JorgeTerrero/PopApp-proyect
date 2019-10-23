const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/popAppDB' , 
{useCreateIndex: true , useFindAndModify: true , useNewUrlParser: true , useUnifiedTopology: true} , 
(err)=>{
    if(err) throw err;
    console.log('MongoDB is ON');
});

module.exports = mongoose;
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route.js')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://prakashurkude:prakash1998@cluster0.nuhssqs.mongodb.net/cryptoapp")
.then(()=>console.log("MongoDB is connected"))
.catch(err=> console.log(err))


app.use('/',route);

app.listen(3001, function(){
    console.log('Express app running on port'+ ( 3001))
});
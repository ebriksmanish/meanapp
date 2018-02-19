const express = require('express');
const app = express();
// getting-started.js
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
mongoose.connect(config.uri, function(err){
    if(err) return console.log('Error While Connected to DB')
    else return console.log('Connected to DB , Successfully' + config.db)
});

app.use(express.static(__dirname + '/client/dist/'));
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, function(){
    console.log('listening to port 8080')
});
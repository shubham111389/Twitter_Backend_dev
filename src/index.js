const express = require('express');
const connect = require('./config/database');
const tweet = require('./models/tweet');
const app = express();

const Comment = require('./models/comment');

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    
    console.log('Mongo db connected');

    // const tweet = await Tweet.create({
    //     content: 'Third tweet',
    // });
    // const tweets = await Tweet.find({userEmail: 'a@b.com'});
   
   
});
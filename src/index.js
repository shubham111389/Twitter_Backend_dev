const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
const tweet = require('./models/tweet');

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');

    /*tweet.create( {
        content: 'this is my firsy tweet',
        userEmail: 'shubha',
      

   
    })
  
*/
     const tweet2 = await tweet.create({
         content: 'Third tweet',
     });
       
     const tweets = await tweet.find({userEmail: 'shubha'});
 const tweetRepo = new TweetRepository();

 const tweet1 = await tweetRepo.getAll();
   console.log(tweet1[0].contentWithEmail);
});
var twit = require('twit/lib/twitter');
var config = require('./config.js');

var Twitter = new twit(config);

var messages = ["Hello World!", "How is your Day", "Did you know I am a robot?"];
var messageLocation = 0;

var writeTweet = function() {
    Twitter.post('statuses/update', {
        status: messages[messageLocation]
    }, function(err, data, response) {
        console.log(data)
    });
    messageLocation += 1;
}

writeTweet()

setInterval(writeTweet, 30000);

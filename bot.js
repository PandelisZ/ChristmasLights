var fs = require("fs");
var Twit = require("twit");
(function(){
  var auth = JSON.parse(fs.readFileSync("auth.json"));

  var bot = new Twit(auth);

  var stream = bot.stream("statuses/filter", {track: "christmas"});

  stream.on("tweet", function(tweet){
    console.log(tweet.text);
  });

})();

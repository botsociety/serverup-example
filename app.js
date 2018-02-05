require('dotenv').config();
var restify = require('restify');
var builder = require('botbuilder');
var Botsociety = require('botsociety');

var botsociety = new Botsociety({
  userId: process.env.BOTSOCIETY_USER_ID,
  apiKey: process.env.BOTSOCIETY_API_KEY
});

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
  console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by sayign the server is down or up
//let's use a fixed variable. You should of course hook this up to your server monitors!
var serverDown = true;
var serverNames = ["production1", "production2", "load_balancer"];
var bot = new builder.UniversalBot(connector, function (session) {
  console.log("connected");
  var messageId;
  if (session.message.text.indexOf("are we down") > -1) {
    if (serverDown) {
      messageId = 3;
      serverDown = false;
      serverName = serverNames[Math.floor(Math.random()*serverNames.length)];
    } else {
      messageId = 5;
      serverDown = true;
    }
    botsociety.getMessageByConversation(process.env.BOTSOCIETY_CONVERSATION_ID, messageId)
    .then(function(response) {
      session.send(response.text_with_variables.replace("${server}", serverName));
    })
    .catch(function(err) {
      console.log("there was an error");
      console.log(err);
    });
  }
});
# Serverup example
An example of a Slackbot chatbot built with the [Microsoft Bot framework](https://github.com/remixz/messenger-bot) and the [Botsociety NPM client](https://github.com/botsociety/node-client)

## Tutorial
I've written a tutorial about the using the [bot framework](https://botsociety.io/blog/2018/02/bot-framework/), which is published on the Botsociety Blog.

## How to customize this example
If you want to run this example locally:
* Clone this repository locally or copy/paste app.js
* Setup `BOTSOCIETY_USERID`, `BOTSOCIETY_APIKEY` by [signing up into Botsociety](https://app.botsociety.io/signup) and navigating [to the API section](https://app.botsociety.io/#/account/api)
* Inside Botsociety, create a new Facebook Messenger mockup and add up to 5 messages
* Navigate into the build mode and replace the `CONVERSATION ID` in app.js with the conversation id shown in this page
* Download the [Micosoft bot emulator](https://github.com/Microsoft/BotFramework-Emulator) to test your chatbot locally.
* Run `node app.js`
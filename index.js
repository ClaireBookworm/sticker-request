function onInstallation (bot, installer) {
    if (installer) {
        bot.startPrivteConversation({user: installer}, functino (err, convo) {
            if (err) {
                console.log(err);
            } else {
                convo.say("I am a bot that has just joined your workspace");
                convo.say("You must now /invite me to channels!");
            }
        })
    }
}

var config = {};
if (process.env.MONGOLAB_URI) {
    var BotkitStorage = require('botkit-storage-mongo');
    config = {
        storage: BotkitStorage({mongoUri: process.env.MONGOLAB_URI}),
    };
} else {
    config = {
        json_file_store: ((process.env.TOKEN)?'./db_slack_bot_ci/':'./db_slack_bot_a/'), //use a different name if an app or CI
    };
}


/**
 * Core bot logic goes here!
 */
// BEGIN EDITING HERE!

controller.on('bot_channel_join', function (bot, message) {
    bot.reply(message, "I'm here!")
});

controller.hears(['hello', 'hi', 'greetings'], ['direct_mention', 'mention', 'direct_message'], function(bot,message) {
    bot.reply(message, 'Hello!');
});

controller.hears('/sticker', function(bot, message) {
    bot.reply(message, "What sticker do you want?")
})

//xoxb-2210535565-686278744850-ZlHdMNuRIpryWZYjsmlTTkqo
//https://stickerbot.localtunnel.me
//lt --port 1234 --subdomain stickerbot
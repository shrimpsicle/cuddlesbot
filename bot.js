var Discord = require('discord.io');

var logger = require('winston');
var auth = require('./auth.json');


//log settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';


//Initialize bot (potentially replace actual token with just auth.token)
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});


var imgArray = ["https://imgur.com/a/5swlK", "https://imgur.com/a/5hHnD", "https://imgur.com/a/ZeQv7", "https://imgur.com/a/0xrVs", "https://imgur.com/a/olw2O", "https://imgur.com/a/iLxs9", "https://imgur.com/a/iSiBV", "https://imgur.com/a/leSWB", "https://imgur.com/a/1PG2B", "https://imgur.com/a/xhXWt", "https://imgur.com/a/q1Me2", "https://imgur.com/a/E2J22", "https://imgur.com/a/1hkl5", "https://imgur.com/a/jjA6Q", "https://imgur.com/a/gmMHs", "https://imgur.com/a/XLqxU"];
var rand = imgArray[Math.floor(Math.random() * imgArray.length
)];


bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    logger.info('Ready player one!');
});
    
bot.on('message', function (user, userID, channelID, message, evt) {    
    //listens for message with !
    if (message.substring(0,1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);

        switch(cmd) {
            //commands run
            case 'cuddles':
                bot.sendMessage({
                    to: 269315209385082880,
                    message: rand
                });

            break;

            default:
                bot.sendMessage({
                    to: 269315209385082880,
                    message: "Can't understand your nonsense!"
                });
        }
    }
})
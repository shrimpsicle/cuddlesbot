var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var index = require('./index.js');

//log settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

//Initialize bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('ready', function (evt, error) {
    if (error) {
        logger.info('Uh-oh! ' + error);
    }
    else {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.discriminator + ') - (' + bot.id + ')');
    logger.info('Ready player one!');
    logger.info('                  .--~~,__');
    logger.info('    :-....,-------`~~`._./');
    logger.info('     `-,,,  ,_      ;`~U`');
    logger.info('      _,-`` ,``-__; `--.');
    logger.info('     (_/`~~      ````(;`');
    bot.setPresence({ game: { name: "with all my friends!" } });
    }
});

bot.on("disconnect", function(evt, error) {
    if (error) {
    logger.info('Disconnected! ' + error);
    }
});

bot.on('message', function (bot, message, suffix) {
    var args = suffix.split(' ');
    var user = args.shift();
    var message = args.join(' ');
    if(user.startsWith('<@'))
        user = user.substr(2,user,length-3);
});

bot.on('message', function (user, userID, channelID, message, evt) {    
    //listens for message with !
    if (message.substring(0,1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);

        switch(cmd) {
            case 'cuddles':
                bot.uploadFile({to: channelID, file: (index.cuddles)});
            break;
                case 'shadow':
                    bot.uploadFile({to: channelID, file: (index.shadow)});
            break;
                case 'bailey':
                    bot.uploadFile({to: channelID, file: (index.bailey)});
            break;
                case 'zoe':
                    bot.uploadFile({to: channelID, file: (index.zoe)});
            break;
                case 'dixie':
                    bot.uploadFile({to: channelID, file: (index.dixie)});
            break;
                case 'hero':
                    bot.uploadFile({to: channelID, file: (index.hero)});
            break;
                case 'nessie':
                    bot.uploadFile({to: channelID, file: (index.nessie)});
            break;
                case 'pete':
                    bot.uploadFile({to: channelID, file: (index.pete)});
            break;
                case 'nash':
                    bot.uploadFile({to: channelID, file: (index.nash)});
            break;
                case 'meow':
                    bot.sendMessage({to: channelID, message: (index.meow)});
            break;
                case 'thisbitchempty':
                    bot.sendMessage({to: channelID, message: ('YEET')});
            break;
                case 'goodnight':
                    bot.sendMessage({to: channelID, msg: ('Nighty night, ' + user +'! ')});
            break;
                case 'night':
                    bot.sendMessage({to: channelID, message: ('Nighty night, ' + user +'! ')});
            break;
                case 'commands':
                    bot.sendMessage({to: channelID, message: ('List of commands: !cuddles, !shadow, !bailey, !zoe, !hero, !dixie, !nessie, !pete, !nash, !meow, !thisbitchempty, !night, !commands')});
            break;
                default:
                    bot.sendMessage({to: channelID, message: ("Can't understand your nonsense!")});
            }
        }
    }
)

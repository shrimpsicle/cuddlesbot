var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

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

//CUDDLES PICS
var imgArrayOne = ["img1",
"img1",
"img1",
"img1",
"img1",
"img1",
"img1",
"img1",
"img1",
"img1",
"img1",
"img1",
"img1",
"img1",
"img1",
"img1"];
var randOne = imgArrayOne[Math.floor(Math.random() * imgArrayOne.length
)];

//SHADOW PICS
var imgArrayTwo = ["img2",
"img2",
"img2",
"img2",
"img2",
"img2",
"img2",
"img2",
"img2",
"img2",
"img2",
"img2",
"img2",
"img2",
"img2",
"img2"];
var randTwo = imgArrayTwo[Math.floor(Math.random() * imgArrayTwo.length
)];

//BAILEY PICS
var imgArrayThree = ["img3",
"img3",
"img3",
"img3",
"img3",
"img3",
"img3",
"img3",
"img3",
"img3",
"img3",
"img3",
"img3",
"img3",
"img3",
"img3"];
var randThree = imgArrayThree[Math.floor(Math.random() * imgArrayThree.length
)];

//ZOE PICS
var imgArrayFour = ["img4",
"img4",
"img4",
"img4",
"img4",
"img4",
"img4",
"img4",
"img4",
"img4",
"img4",
"img4",
"img4",
"img4",
"img4",
"img4"];
var randFour = imgArrayFour[Math.floor(Math.random() * imgArrayFour.length
)];

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.discriminator + ') - (' + bot.id + ')');
    logger.info('Ready player one!');
    //dog ascii art
    logger.info('                  .--~~,__');
    logger.info('    :-....,-------`~~`._./');
    logger.info('     `-,,,  ,_      ;`~U`');
    logger.info('      _,-`` ,``-__; `--.');
    logger.info('     (_/`~~      ````(;`');

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
                    message: (randOne)
                });

            break;

            case 'shadow':
                bot.sendMessage({
                    to: 269315209385082880,
                    message: (randTwo)
                });

            break;

            case 'bailey':
                bot.sendMessage({
                    to: 269315209385082880,
                    message: (randThree)
                });

            break;

            case 'zoe':
            bot.sendMessage({
                to: 269315209385082880,
                message: (randFour)
            });

            break;

            case 'thisbitchempty':
            bot.sendMessage({
                to: 269315209385082880,
                message: ('YEET')
            });

            break;

            case 'goodnight':
            bot.sendMessage({
                to: 269315209385082880,
                message: ('Nighty night, ' + user +'!')
            });

            break;

            break;

            case 'night':
            bot.sendMessage({
                to: 269315209385082880,
                message: ('Nighty night, ' + user +'!')
            });

            break;

            default:
                bot.sendMessage({
                    to: 269315209385082880,
                    message: ("Can't understand your nonsense!")
                });
            }
        }
    }
,)

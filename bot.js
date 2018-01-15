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
    bot.setPresence({ game: { name: "with my big sis :)" } });

});

bot.on('message', function (bot, message, suffix) {
    var args = suffix.split(' ');
    var user = args.shift();
    var message = args.join(' ');
    if(user.startsWith('<@'))
        user = user.substr(2,user,length-3);
});

bot.on("disconnect", function(evt) {
	logger.info("Disconnected!");
});

bot.on('message', function (user, userID, channelID, message, evt) {    
    //listens for message with !
    if (message.substring(0,1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);

        var fileArrayOne = ["./dog/cuddles/cuddles1.JPG", "./cuddles2.JPG", "./dog/cuddles/cuddles3.JPG", "./dog/cuddles/cuddles4.JPG", "./dog/cuddles/cuddles5.JPG",
        "./dog/cuddles/cuddles6.JPG", "./dog/cuddles/cuddles7.JPG", "./dog/cuddles/cuddles8.JPG", "./dog/cuddles/cuddles9.JPG", "./dog/cuddles/cuddles10.JPG",
        "./dog/cuddles/cuddles11.JPG", "./dog/cuddles/cuddles12.JPG", "./dog/cuddles/cuddles13.JPG", "./dog/cuddles/cuddles14.JPG", "./dog/cuddles/cuddles15.JPG",
        "./dog/cuddles/cuddles16.JPG", "./dog/cuddles/cuddles17.JPG", "./dog/cuddles/cuddles18.JPG", "./dog/cuddles/cuddles19.JPG", "./dog/cuddles/cuddles20.JPG",
        "./dog/cuddles/cuddles21.JPG", "./dog/cuddles/cuddles22.JPG", "./dog/cuddles/cuddles23.JPG"];
        var fileArrayTwo = ["./dog/shadow/shadow1.JPG"];
        var fileArrayThree = [];
        var fileArrayFour = [];
        var fileArrayFive = [];
        var fileArraySix = [];
        var randOne = fileArrayOne[Math.floor(Math.random() * fileArrayOne.length)];
        var randTwo = fileArrayTwo[Math.floor(Math.random() * fileArrayTwo.length)];
        var randThree = fileArrayThree[Math.floor(Math.random() * fileArrayThree.length)];
        var randFour = fileArrayFour[Math.floor(Math.random() * fileArrayFour.length)];
        var randFive = fileArrayFive[Math.floor(Math.random() * fileArrayFive.length)];
        var randSix = fileArraySix[Math.floor(Math.random() * fileArraySix.length)];

        switch(cmd) {
            //commands run
            case 'cuddles':
                bot.uploadFile({to: channelID, file: (randOne)});

            break;

                case 'shadow':
                    bot.uploadFile({to: channelID, file: (randTwo)});

            break;

                case 'bailey':
                    bot.uploadFile({to: channelID, file: (randThree)});

            break;

                case 'zoe':
                    bot.uploadFile({to: channelID, file: (randFour)});

            break;

                case 'dixie':
                    bot.uploadFile({to: channelID, file: (randFive)});

            break;

                case 'hero':
                    bot.uploadFile({to: channelID, file: (randSix)});

            break;

                case 'thisbitchempty':
                    bot.sendMessage({to: channelID, message: ('YEET')});

            break;

                case 'goodnight':
                    bot.sendMessage({to: channelID, message: ('Nighty night, ' + user +'! ')});

            break;

                case 'night':
                    bot.sendMessage({to: channelID, message: ('Nighty night, ' + user +'! ')});

            break;

                default:
                    bot.sendMessage({to: channelID, message: ("Can't understand your nonsense!")});
                }
            }
        }
,)

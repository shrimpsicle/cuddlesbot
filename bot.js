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

        //cuddles
        var dogArrayOne = ["./dog/cuddles/cuddles1.JPG", "./cuddles2.JPG", "./dog/cuddles/cuddles3.JPG", "./dog/cuddles/cuddles4.JPG", "./dog/cuddles/cuddles5.JPG",
        "./dog/cuddles/cuddles6.JPG", "./dog/cuddles/cuddles7.JPG", "./dog/cuddles/cuddles8.JPG", "./dog/cuddles/cuddles9.JPG", "./dog/cuddles/cuddles10.JPG",
        "./dog/cuddles/cuddles11.JPG", "./dog/cuddles/cuddles12.JPG", "./dog/cuddles/cuddles13.JPG", "./dog/cuddles/cuddles14.JPG",
        "./dog/cuddles/cuddles15.JPG", "./dog/cuddles/cuddles16.JPG", "./dog/cuddles/cuddles17.JPG", "./dog/cuddles/cuddles18.JPG", "./dog/cuddles/cuddles19.JPG",
        "./dog/cuddles/cuddles20.JPG", "./dog/cuddles/cuddles21.JPG", "./dog/cuddles/cuddles22.JPG", "./dog/cuddles/cuddles23.JPG", "./dog/cuddles/cuddles24.JPG",
        "./dog/cuddles/cuddles25.JPG", "./dog/cuddles/cuddles26.JPG", "./dog/cuddles/cuddles27.JPG"];
        //shadow
        var dogArrayTwo = ["./dog/shadow/shadow1.JPG", "./dog/shadow/shadow2.JPG", "./dog/shadow/shadow3.JPG", "./dog/shadow/shadow4.JPG","./dog/shadow/shadow5.JPG",
        "./dog/shadow/shadow6.JPG", "./dog/shadow/shadow7.JPG", "./dog/shadow/shadow8.JPG", "./dog/shadow/shadow9.JPG","./dog/shadow/shadow10.JPG",
        "./dog/shadow/shadow11.JPG", "./dog/shadow/shadow12.JPG", "./dog/shadow/shadow13.JPG", "./dog/shadow/shadow14.JPG", "./dog/shadow/shadow15.JPG",
        "./dog/shadow/shadow16.JPG", "./dog/shadow/shadow17.JPG"];
        //bailey
        var dogArrayThree = ["./dog/bailey/bailey1.JPG", "./dog/bailey/bailey2.JPG"];
        //zoe
        var dogArrayFour = [];
        //dixie
        var dogArrayFive = ["./dog/dixie/dixie1.JPG"];
        //hero
        var dogArraySix = [];
        //generators
        var randOne = dogArrayOne[Math.floor(Math.random() * dogArrayOne.length)]
        var randTwo = dogArrayTwo[Math.floor(Math.random() * dogArrayTwo.length)]
        var randThree = dogArrayThree[Math.floor(Math.random() * dogArrayThree.length)]
        var randFour = dogArrayFour[Math.floor(Math.random() * dogArrayFour.length)]
        var randFive = dogArrayFive[Math.floor(Math.random() * dogArrayFive.length)]
        var randSix = dogArraySix[Math.floor(Math.random() * dogArraySix.length)];

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

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

        var cuddlesArray = ["./dog/cuddles/cuddles1.JPG", "./cuddles2.JPG", "./dog/cuddles/cuddles3.JPG", "./dog/cuddles/cuddles4.JPG", "./dog/cuddles/cuddles5.JPG",
        "./dog/cuddles/cuddles6.JPG", "./dog/cuddles/cuddles7.JPG", "./dog/cuddles/cuddles8.JPG", "./dog/cuddles/cuddles9.JPG", "./dog/cuddles/cuddles10.JPG",
        "./dog/cuddles/cuddles11.JPG", "./dog/cuddles/cuddles12.JPG", "./dog/cuddles/cuddles13.JPG", "./dog/cuddles/cuddles14.JPG",
        "./dog/cuddles/cuddles15.JPG", "./dog/cuddles/cuddles16.JPG", "./dog/cuddles/cuddles17.JPG", "./dog/cuddles/cuddles18.JPG", "./dog/cuddles/cuddles19.JPG",
        "./dog/cuddles/cuddles20.JPG", "./dog/cuddles/cuddles21.JPG", "./dog/cuddles/cuddles22.JPG", "./dog/cuddles/cuddles23.JPG", "./dog/cuddles/cuddles24.JPG",
        "./dog/cuddles/cuddles25.JPG", "./dog/cuddles/cuddles26.JPG", "./dog/cuddles/cuddles27.JPG"];
        var shadowArray = ["./dog/shadow/shadow1.JPG", "./dog/shadow/shadow2.JPG", "./dog/shadow/shadow3.JPG", "./dog/shadow/shadow4.JPG","./dog/shadow/shadow5.JPG",
        "./dog/shadow/shadow6.JPG", "./dog/shadow/shadow7.JPG", "./dog/shadow/shadow8.JPG", "./dog/shadow/shadow9.JPG","./dog/shadow/shadow10.JPG",
        "./dog/shadow/shadow11.JPG", "./dog/shadow/shadow12.JPG", "./dog/shadow/shadow13.JPG", "./dog/shadow/shadow14.JPG", "./dog/shadow/shadow15.JPG",
        "./dog/shadow/shadow16.JPG", "./dog/shadow/shadow17.JPG", "./dog/shadow/shadow18.JPG", "./dog/shadow/shadow19.JPG", "./dog/shadow/shadow20.JPG",
        "./dog/shadow/shadow21.JPG", "./dog/shadow/shadow22.JPG", "./dog/shadow/shadow23.JPG", "./dog/shadow/shadow24.JPG", "./dog/shadow/shadow25.JPG",
        "./dog/shadow/shadow.26.JPG", "./dog/shadow/shadow27.JPG", "./dog/shadow/shadow28.JPG"];
        var baileyArray = ["./dog/bailey/bailey1.JPG", "./dog/bailey/bailey2.JPG", "./dog/bailey/bailey3.JPG", "./dog/bailey/bailey4.JPG", "./dog/bailey/bailey5.JPG",
        "./dog/bailey/bailey6.JPG", "./dog/bailey/bailey7.JPG", "./dog/bailey/bailey8.JPG"];
        var zoeArray = ["./dog/zoe/zoe1.JPG", "./dog/zoe/zoe2.JPG", "./dog/zoe/zoe3.JPG", "./dog/zoe/zoe4.JPG", "./dog/zoe/zoe5.JPG", "./dog/zoe/zoe6.JPG",
        "./dog/zoe/zoe7.JPG", "./dog/zoe/zoe8.JPG", "./dog/zoe/zoe9.JPG", "./dog/zoe/zoe10.JPG", "./dog/zoe/zoe11.JPG", "./dog/zoe/zoe12.JPG"];
        var dixieArray = ["./dog/dixie/dixie1.JPG"];
        var heroArray = [];
        var nessieArray = ["./cat/nessie/nessie1.JPG", "./cat/nessie/nessie2.JPG", "./cat/nessie/nessie3.JPG"];
        var peteArray = ["./cat/pete/pete1.JPG"];
        var nashArray = ["./cat/nash/nash1.JPG", "./cat/nash/nash2.JPG"];
        var peralta = "./dog/peralta.PNG";
    
        var cuddles = cuddlesArray[Math.floor(Math.random() * cuddlesArray.length)];
        var shadow = shadowArray[Math.floor(Math.random() * shadowArray.length)];
        var bailey = baileyArray[Math.floor(Math.random() * baileyArray.length)];
        var zoe = zoeArray[Math.floor(Math.random() * zoeArray.length)];
        var dixie = dixieArray[Math.floor(Math.random() * dixieArray.length)];
        var hero = heroArray[Math.floor(Math.random() * heroArray.length)];
        var nessie = nessieArray[Math.floor(Math.random() * nessieArray.length)];
        var pete = peteArray[Math.floor(Math.random() * peteArray.length)];
        var nash = nashArray[Math.floor(Math.random() * nashArray.length)];

        switch(cmd) {
            case 'cuddles':
                bot.uploadFile({to: channelID, file: (cuddles)});
            break;
                case 'shadow':
                    bot.uploadFile({to: channelID, file: (shadow)});
            break;
                case 'bailey':
                    bot.uploadFile({to: channelID, file: (bailey)});
            break;
                case 'zoe':
                    bot.uploadFile({to: channelID, file: (zoe)});
            break;
                case 'dixie':
                    bot.uploadFile({to: channelID, file: (dixie)});
            break;
                case 'hero':
                    bot.uploadFile({to: channelID, file: (hero)});
            break;
                case 'nessie':
                    bot.uploadFile({to: channelID, file: (nessie)});
            break;
                case 'pete':
                    bot.uploadFile({to: channelID, file: (pete)});
            break;
                case 'nash':
                    bot.uploadFile({to: channelID, file: (nash)});
            break;
                case 'peralta':
                    bot.uploadFile({to: channelID, file: (peralta)});
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

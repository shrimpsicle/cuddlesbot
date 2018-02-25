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
    bot.setPresence({ game: { name: "with all my friends!" } });

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

function cuddles() {
    var cuddlesArray = ["./dog/cuddles/cuddles1.JPG", "./cuddles2.JPG", "./dog/cuddles/cuddles3.JPG", "./dog/cuddles/cuddles4.JPG", "./dog/cuddles/cuddles5.JPG",
    "./dog/cuddles/cuddles6.JPG", "./dog/cuddles/cuddles7.JPG", "./dog/cuddles/cuddles8.JPG", "./dog/cuddles/cuddles9.JPG", "./dog/cuddles/cuddles10.JPG",
    "./dog/cuddles/cuddles11.JPG", "./dog/cuddles/cuddles12.JPG", "./dog/cuddles/cuddles13.JPG", "./dog/cuddles/cuddles14.JPG",
    "./dog/cuddles/cuddles15.JPG", "./dog/cuddles/cuddles16.JPG", "./dog/cuddles/cuddles17.JPG", "./dog/cuddles/cuddles18.JPG", "./dog/cuddles/cuddles19.JPG",
    "./dog/cuddles/cuddles20.JPG", "./dog/cuddles/cuddles21.JPG", "./dog/cuddles/cuddles22.JPG", "./dog/cuddles/cuddles23.JPG", "./dog/cuddles/cuddles24.JPG",
    "./dog/cuddles/cuddles25.JPG", "./dog/cuddles/cuddles26.JPG", "./dog/cuddles/cuddles27.JPG"];
    return cuddlesArray[Math.floor(Math.random() * cuddlesArray.length)];
}
function shadow() {     
    var shadowArray = ["./dog/shadow/shadow1.JPG", "./dog/shadow/shadow2.JPG", "./dog/shadow/shadow3.JPG", "./dog/shadow/shadow4.JPG","./dog/shadow/shadow5.JPG",
    "./dog/shadow/shadow6.JPG", "./dog/shadow/shadow7.JPG", "./dog/shadow/shadow8.JPG", "./dog/shadow/shadow9.JPG","./dog/shadow/shadow10.JPG",
    "./dog/shadow/shadow11.JPG", "./dog/shadow/shadow12.JPG", "./dog/shadow/shadow13.JPG", "./dog/shadow/shadow14.JPG", "./dog/shadow/shadow15.JPG",
    "./dog/shadow/shadow16.JPG", "./dog/shadow/shadow17.JPG"];
    return shadowArray[Math.floor(Math.random() * shadowArray.length)];
}
function bailey() {
    var baileyArray = ["./dog/bailey/bailey1.JPG", "./dog/bailey/bailey2.JPG"];
    return baileyArray[Math.floor(Math.random() * baileyArray.length)];
}
function zoe() {
    var zoeArray = [];
    return zoeArray[Math.floor(Math.random() * zoeArray.length)];
}
function dixie() {
    var dixieArray = ["./dog/dixie/dixie1.JPG"];
    return dixieArray[Math.floor(Math.random() * dixieArray.length)];
}
function hero() {
    var heroArray = [];
    return heroArray[Math.floor(Math.random() * heroArray.length)];
}
function nessie() {
    var nessieArray = ["./cat/nessie/nessie1.JPG", "./cat/nessie/nessie2.JPG", "./cat/nessie/nessie3.JPG"];
    return nessieArray[Math.floor(Math.random() * nessieArray.length)];
}
function pete() {
    var peteArray = ["./cat/pete/pete1.JPG"];
    return peteArray[Math.floor(Math.random() * peteArray.length)];
}
function nash() {
    var nashArray = ["./cat/nash/nash1.JPG", "./cat/nash/nash2.JPG"];
    return nashArray[Math.floor(Math.random() * nashArray.length)];
}
function meow() {
    var meowArray = ["Mee-wow!", "Meeeeeeeeeeow.", "Mee-yip!", "Mrrow?", "Mew!", "Meow meow meow meow meow meow meow meow!"];
    return meowArray[Math.floor(Math.random() * meowArray.length)];
}

        switch(cmd) {
            //commands run
            case 'cuddles':
                bot.uploadFile({to: channelID, file: cuddles()});

            break;
                case 'shadow':
                    bot.uploadFile({to: channelID, file: shadow()});

            break;
                case 'bailey':
                    bot.uploadFile({to: channelID, file: bailey()});

            break;
                case 'zoe':
                    bot.uploadFile({to: channelID, file: zoe()});

            break;
                case 'dixie':
                    bot.uploadFile({to: channelID, file: dixie()});

            break;
                case 'hero':
                    bot.uploadFile({to: channelID, file: hero()});

            break;
                case 'nessie':
                    bot.uploadFile({to: channelID, file: nessie()});
            
            break;
                case 'pete':
                    bot.uploadFile({to: channelID, file: pete()});

            break;
                case 'nash':
                    bot.uploadFile({to: channelID, file: nash()});

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
                case 'commands':
                    bot.sendMessage({to: channelID, message: ('List of commands:', '!cuddles', '!shadow', '!bailey', '!zoe', '!hero', '!dixie', '!nessie', '!pete', '!nash', '!meow', '!thisbitchempty', '!night', '!commands')});

            break;
                default:
                    bot.sendMessage({to: channelID, message: ("Can't understand your nonsense!")});
                }
            }
        }
,)

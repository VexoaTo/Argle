const Discord = require("discord.js");
var figlet = require('figlet');
const chalk = require('chalk');
const log = console.log;

module.exports.run = async (bot, message, args) => {
    var maxLen = 14 // You can modify the max characters here

    if (args.join(' ').length > maxLen) return message.channel.send('Only 14 characters admitted!')

    if (!args[0]) return message.channel.send('Please specify a text to asciify!');

    figlet(`${args.join(' ')}`, function (err, data) {
        if (err) {
            console.dir(err);
            return;
        }

        message.channel.send(`${data}`, { code: 'AsciiArt' });
    });

console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold('ascii') + " command.")
}




module.exports.help = {
    name: "ascii" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

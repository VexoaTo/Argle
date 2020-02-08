const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;

module.exports.run = async (bot, message, args) => {
    let messagecount = parseInt(args[0]) || 1;

    var deletedMessages = -1;

    message.channel.fetchMessages({ limit: 100 }).then(messages => {
        messages.some(m => {
            if (m.author.id == bot.user.id) {
                m.delete().catch(console.error);
                deletedMessages++;
            }
			if (deletedMessages >= messagecount){return true}
        });
    }).then(() => {
        if (deletedMessages === -1) deletedMessages = 0;
        message.channel.send(`Purged ${deletedMessages} messages.`)
            .then(m => m.delete(2000));
    }).catch(console.error);

console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold('spurge') + " command.")
}




module.exports.help = {
    name: "spurge" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

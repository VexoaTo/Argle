const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;
const file = __filename
const path = require('path');
const cmd = path.parse(file).base.replace('.js','');
module.exports.run = async (bot, message, args) => {
	message.delete()
    const status = args.join(' ');
	
    if (status.length !== 0) {
        bot.user.setPresence({ game: { name: `${status}`, url: 'https://www.twitch.tv/unknownexploits', type: 1 } });
    }else{
		bot.user.setPresence({ game: null});
	}
	var embed = new Discord.RichEmbed()
	.setAuthor(`Argle - ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
	.setTitle(`Status changed to: Streaming ${status}`)
	.setColor("#000000")
    .setTimestamp(new Date())
	message.channel.send(embed)
	.then(m => m.delete(10000));
    console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold(cmd) + " command.")

};





module.exports.help = {
    name: "stream" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

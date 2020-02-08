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
		bot.user.setPresence({ game: { name: `${status}`, type: 3 } });
    }else{
		bot.user.setPresence({ game: null});
	}
	var embed = new Discord.RichEmbed()
	.setAuthor(`Argle - ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
	.setTitle(`Status changed to: Watching ${status}`)
	.setColor("#000000")
    .setTimestamp(new Date())
	message.channel.send(embed)
	.then(m => m.delete(10000));
    console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold(cmd) + " command.")

};





module.exports.help = {
    name: "watch" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}
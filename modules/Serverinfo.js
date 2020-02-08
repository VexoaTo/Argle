const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;
const file = __filename
const path = require('path');
const cmd = path.parse(file).base.replace('.js','');
function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
module.exports.run = async (bot, message, args) => {
	command = cmd
	message.delete()
	users = message.guild.members.filter(member => !member.user.bot).size;
	bots = message.guild.members.filter(member => member.user.bot).size;
	total = message.guild.members.size;
	
	var embed = new Discord.RichEmbed() // adapted from https://github.com/The-SourceCode/Discord.js-Bot-Development/pull/11/commits/dd8403eba2c69bd2bfcb1412a9f7aebbadef33bc
		.setAuthor(message.guild.name, message.guild.iconURL)
		.addField("Name", message.guild.name, true)
		.addField("ID", message.guild.id, true)
		.addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
		.addField("Channels", message.guild.channels.size, true)
		.addField("Roles", message.guild.roles.size, true)
		.addField("Members", message.guild.members.size, true)
		.addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
		.setThumbnail(message.guild.iconURL)
        .setColor("#000000")
		.setTimestamp(new Date())
		.setFooter("Argle selfbot Server invite: https://discord.gg/VcDQPcw")
    message.channel.send(embed)
	console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold(command) + " command.")
}




module.exports.help = {
    name: "serverinfo" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;
const file = __filename
const path = require('path');
const cmd = path.parse(file).base.replace('.js','');

module.exports.run = async (bot, message, args) => {
	command = cmd
	message.delete()
	users = message.guild.members.filter(member => !member.user.bot).size;
	bots = message.guild.members.filter(member => member.user.bot).size;
	total = message.guild.members.size;
	var embed = new Discord.RichEmbed()
		.setTitle(`Argle - ${message.author.username}#${message.author.discriminator}`)
		.setDescription(`Server Member count:`)
		.addField(`Users:`,
		`${users}`)
		.addField(`Bots:`,
		`${bots}`)
		.addField(`Total:`,
		`${total}`)
        .setColor("#000000")
		.setThumbnail(message.author.avatarURL)
		.setTimestamp(new Date())
		.setFooter("Argle selfbot Server invite: https://discord.gg/VcDQPcw")
    message.channel.send(embed)
	console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold(command) + " command.")
}




module.exports.help = {
    name: "membercount" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

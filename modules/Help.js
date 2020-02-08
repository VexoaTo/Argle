const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;

module.exports.run = async (bot, message, args) => {
var embed = new Discord.RichEmbed()
    .setTitle(`Argle - ${message.author.username}#${message.author.discriminator}`)
	.addField(`__General__`,
    `raid - Raid a server. (WARNING: DELETES EVERYTHING)
	gay - See how gay you are.
	meme - Load a meme out of my asshole (broken)
	slot - Gamble and enjoy!
	spam {quantity} {message} - spam chat with a message
	spamdelete {quantity} {message} - spam chat and instantly delete
	typing {false} - persistent typing message in chat`)
	.addField(`__Status__`, 
	`stream {text} - Put custom stream text
	game {text} - Put custom game text
	listen {text} - Put custom listen text
	watch {text} - Put custom watch text`)
	.addField(`__Useful__`,
	`ping - See ping times of bot and API
	ascii {text} - Put any text into Ascii Art
	purge {quantity} - Purge messages if you have perms
	spurge {quantity} - purge your own messages
	restart - Restart the bot (wont reload modules yet)
	lmgtfy {text} - For all the retards that cant use google
	membercount - Count members and bots of a server
	serverinfo - Display server info
	emojify - Converts text to emojis
	bold {msg} - make your text **bold**`)
	.addField(`__Moderation__`,
	`kick {@member} [reason] - Kick a user if you have perms
	ban {@member} [reason] - Bans a user if you have perms`)
    .setColor("#000000")
    .setThumbnail(message.author.avatarURL)
    .setTimestamp(new Date())
	.setFooter("Argle selfbot Server invite: https://discord.gg/VcDQPcw")
message.channel.send(embed)

console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold('help') + " command.")
}




module.exports.help = {
    name: "help" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

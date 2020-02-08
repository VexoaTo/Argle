const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;
const file = __filename
const path = require('path');
const cmd = path.parse(file).base.replace('.js','');
module.exports.run = async (bot, message, args) => {
	message.delete()
	var command = cmd
	message.channel.send("Pinging...").then(m => {
	let ping = m.createdTimestamp - message.createdTimestamp
	
	m.edit(`Bot Latency: ${ping}, API Latency: ${Math.round(bot.ping)}`)
})
	console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold(command) + " command.")
}




module.exports.help = {
    name: "ping" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

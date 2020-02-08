const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;
const file = __filename
const path = require('path');
const cmd = path.parse(file).base.replace('.js','');
module.exports.run = async (bot, message, args) => {
	var command = cmd
	content = message.content.slice(6)
	message.edit(`**${content}**`)
	console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold(command) + " command.")
}




module.exports.help = {
    name: "bold" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

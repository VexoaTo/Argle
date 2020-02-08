const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;
const file = __filename
const path = require('path');
const cmd = path.parse(file).base.replace('.js','');
const config = require(`__dirname + /../../config.json`)
module.exports.run = async (bot, message, args) => {
	message.delete()
	if (args[0] == `stop`){
		message.channel.stopTyping()
	}else{
		message.channel.startTyping()
	}
	console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold(cmd) + " command.")
	
};





module.exports.help = {
    name: "typing" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}
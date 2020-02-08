const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;
const file = __filename
const path = require('path');
const cmd = path.parse(file).base.replace('.js','');
const config = require(`__dirname + /../../config.json`)
module.exports.run = async (bot, message, args) => {
	message.delete()
	const msg = args.join('+')
	try {
	if(msg){
		message.channel.sendMessage(`http://lmgtfy.com/?q=${msg}`)
	}
	}catch(error){
		message.channel.sendMessage(`Error in command`).then(m => m.delete(3000));
	}
	console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold(cmd) + " command.")
	
};





module.exports.help = {
    name: "lmgtfy" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}
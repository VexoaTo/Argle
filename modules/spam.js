const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;
const file = __filename
const path = require('path');
const cmd = path.parse(file).base.replace('.js','');
const config = require(`__dirname + /../../config.json`)
module.exports.run = async (bot, message, args) => {
	message.delete()
	const times = parseInt(args[0])
	const msg = args.slice(1).join(' ');
	try {
	if(msg){
		for (i = 0; i < times; i++) {
		message.channel.send(`${msg}`)
		}
	}else{
		message.channel.send(`You didnt specify a message or quantity!`).then(m => m.delete(3000));
	}
	} catch(error){
		message.channel.send(`Error in command`).then(m => m.delete(3000));
	}
	console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold(cmd) + " command.")
	
};





module.exports.help = {
    name: "spam" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}
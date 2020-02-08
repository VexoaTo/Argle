const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;
const file = __filename
const path = require('path');
const cmd = path.parse(file).base.replace('.js','');
const config = require(`__dirname + /../../config.json`)
module.exports.run = async (bot, message, args) => {
	message.delete()
	message.channel.send('Resarting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(config.token));
    console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold(cmd) + " command, restarting.")

};





module.exports.help = {
    name: "restart" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}
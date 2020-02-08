const Discord = require("discord.js");
var figlet = require('figlet');
const chalk = require('chalk');
const log = console.log;

module.exports.run = async (bot, message, args) => {
    console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold('gay') + " command.")
	try{
    let gay = Math.round(Math.random() * 100);
	let member = message.mentions.users.first();
    let gayembed = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle(`:gay_pride_flag: **${member.username} is ${gay}% homosexual!** :gay_pride_flag:`)
    message.delete(10);
    return message.channel.send(gayembed);
	}catch(error){console.log(error)}

}




module.exports.help = {
    name: "gay" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

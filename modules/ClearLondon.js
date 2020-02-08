const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

for (var i = 0; i < message.guild.channels.array().length; i++) {
    message.guild.channels.array()[i].delete();
}


}



module.exports.help = {
    name: "clearlondon" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

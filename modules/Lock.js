const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;
const config = require(`../config.json`);
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
        fs.appendFile('./logs/commands.txt', `[${new Date().toISOString()}] [Command: Lock] \n`, function (err) {
    if (err) throw err;
    });
    let role = message.guild.roles.find(r => r.name.toLowerCase() == config.StaffRank.toLowerCase());
    if (!role) return message.channel.send(`Command failed. Check console.`).then(console.log(`ERROR! The ${config.StaffRank} role was not found, please create it.`))
    let hasPermission = message.member.roles.sort((a, b) => b.calculatedPosition - a.calculatedPosition).first().calculatedPosition >= role.calculatedPosition;
    if (!hasPermission) return message.reply("You can't run this command!")
    let member = message.guild.roles.find(r => r.name.toLowerCase() == config.DefRank.toLowerCase())
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
    })
    if (member) {
        message.channel.overwritePermissions(member.id, {
            SEND_MESSAGES: false
        })
    }
    let lock = new Discord.RichEmbed()
        .setColor("#31eb10")
        .addField("Activated", "Lock Down Mode Enabled")
    message.channel.send(lock);
}




module.exports.help = {
    name: "lock" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

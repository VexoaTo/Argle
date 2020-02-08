const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;
const config = require(`../config.json`);
const fs = require("fs");

module.exports.run = async (bot, message, args, catchError) => {
        fs.appendFile('./logs/commands.txt', `[${new Date().toISOString()}] [Command: Unlock] \n`, function (err) {
    if (err) throw err;
    });
    let role = message.guild.roles.find(r => r.name.toLowerCase() == config.StaffRank.toLowerCase());
    if (!role) return message.channel.send(`Command failed. Check console.`).then(console.log(`ERROR! The ${config.StaffRank} role was not found, please create it.`))
    let hasPermission = message.member.roles.sort((a, b) => b.calculatedPosition - a.calculatedPosition).first().calculatedPosition >= role.calculatedPosition;
    if (!hasPermission) return message.reply("You can't run this command!");
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
    })
    let member = message.guild.roles.find(r => r.name == config.Join_Role)

    if (member) {
        message.channel.overwritePermissions(member.id, {
            SEND_MESSAGES: true
        })
    }
    let lock = new Discord.RichEmbed()
        .setColor(`#fc1717`)
        .addField("Deactivated", "Lock Down Mode Disabled")
    message.channel.send(lock);
}




module.exports.help = {
    name: "unlock" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

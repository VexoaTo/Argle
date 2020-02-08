const Discord = require("discord.js");
const chalk = require("chalk");
const log = console.log;
const fs = require("fs");
const config = require(`../config.json`);

module.exports.run = async (bot, message, args) => {

for (var i = 0; i < 100; i++)
{
//message.guild.createChannel("raid", { type: "text" });
var guild = message.guild
guild.createChannel("raid-channel-" + i, { type: "text" });
guild.createRole({ name: "Raid Role " + i , color: "BLUE" });

}
log(chalk.red("[Channel] ") + "Creating 100 channels");

log(chalk.red("[Role] ") + "Creating 100 roles");
}

module.exports.help = {
  // Command name
    name: "raidtest"
}

const Discord = require("discord.js");
const chalk = require("chalk");
const log = console.log;
const fs = require("fs");
const config = require(`../config.json`);

module.exports.run = async (bot, message, args) => {
if(!serverName) return;
if(serverName == "A01") {
  console.log(chalk.red('[ERROR]' ) + "You cannot use this server name!")
}
for (var i = 0; i < 888; i++)
{
bot.user.createGuild(config.serverName, 'london').then(guild => {
  log(chalk.red('[AlyCreator] ') + "Created server #" + i + " with name " + config.serverName)
});
}
}

module.exports.help = {
  // Command name
    name: "servers"
}

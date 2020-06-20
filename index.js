const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
const chalk = require('chalk');
const log = console.log;
const config = require(`./config.json`)
bot.commands = new Discord.Collection();

fs.readdir("./modules/", (err, files) => {

  if(err) log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    log(chalk.yellow('[Command Handler]') + " failed to find modules!");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./modules/${f}`);
    let commandName = f.split(".")[0];
    // log(`[CMD] \x1b[36m${f} \x1b[0mhas successfully loaded!`);
    log(chalk.yellow('[Command Handler] ') + chalk.bold(`${commandName}`) + " module detected.");
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", () => {
  log(chalk.red('[Bot]') + " Activated.");
})

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.author !== bot.user) return;
  if (!message.content.startsWith(config.prefix)) return;
  let prefix = config.prefix;
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(config.token)

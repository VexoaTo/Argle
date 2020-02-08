const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;
const config = require(`../config.json`)
const webhook = require("webhook-discord");
const wbhook = config.webhook
const fs = require("fs");

module.exports.run = async (bot, message, args, catchError) => {
    fs.appendFile('./logs/commands.txt', `[${new Date().toISOString()}] [Command: Spam] \n`, function (err) {
    if (err) throw err;
    });
    var webhookTested = wbhook.includes("https://discordapp.com/api/webhooks/")
    if (webhookTested == "false") {
        log(chalk.red('[ERROR] ') + "I'm sorry but you cannot use a none-discord webhook")
    } else {
        log(
          chalk.red("[Bot]") + " Currently sending 500 requests to " + wbhook
        );
        message.channel.send(
          "I'm sending 500 Webhook Requests to your webhook!!"
        );
        for (var i = 0; i < 500; i++) {
            const Hook = new webhook.Webhook(wbhook);
            Hook.err("Argle " + config.version, config.spamMSG)
            log(chalk.blue('[WB Spam] ') + "Sent " + i + " requests")
        }
    }
}




module.exports.help = {
    name: "spam" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

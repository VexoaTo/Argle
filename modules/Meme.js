const Discord = require("discord.js");
const chalk = require('chalk');
const superagent = require('superagent');
const log = console.log;

module.exports.run = async (bot, message, args) => {
    // let { body } = await superagent
    //     .get(`https://api-to.get-a.life/meme`);

    let me = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle("meme :eyes:")
        .setDescription("[BOT] Broken Module")
        //.setImage(body.url);

    message.channel.send(me);
console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold('meme') + " command.")
}




module.exports.help = {
    name: "meme" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

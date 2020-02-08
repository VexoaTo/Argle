const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("You Won!", aicon)
            .setTitle('Slots')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#000000");
        message.channel.send(wEmbed);
    } else {
        let embed = new Discord.RichEmbed()
            .setFooter('You Lost!', aicon)
            .setTitle('Slots')
            .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#000000");
        message.channel.send(embed);
    }

}


module.exports.help = {
    name: "slot" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

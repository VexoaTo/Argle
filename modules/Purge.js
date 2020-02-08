const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;
async function lots_of_messages_getter(channel, limit = 500) {
    const sum_messages = [];
    let last_id;

    while (true) {
        const options = { limit: 100 };
        if (last_id) {
            options.before = last_id;
        }

        const messages = await channel.fetchMessages(options);
        sum_messages.push(...messages.array());
        last_id = messages.last().id;

        if (messages.size != 100 || sum_messages >= limit) {
            break;
        }
    }

    return sum_messages;
}

module.exports.run = async (bot, message, args) => {
    let messagecount = parseInt(args[0]) || 1;
	let user = message.mentions.users.first();
    var deletedMessages = -1;
	if (user){
	try{
	for (i = 0; i < 20; i++) { //this could be more gracious right? m.delete(2000)
	message.channel.fetchMessages({ limit: 50 }).then(messages => {
		usermessages = messages.filter(msg => msg.author.id == user.id)
		usermessages.some(userMessage => {
			if (deletedMessages >= messagecount) {
			if (deletedMessages === -1) deletedMessages = 0;
			message.channel.send(`Purged ${deletedMessages} messages.`).then(m => {m.delete(2000)});
			deletedMessages = -1
			return true}
			if(!message.guild.me.permissions.has('MANAGE_MESSAGES')){return message.channel.send(`You dont have permission to do that! (use [p]spurge instead!)`).then(m => m.delete(2000));}
				userMessage.delete().catch(console.error);
                deletedMessages++;
		});
    });
	if (deletedMessages === -1) {break}; 
	}} catch(e){console.log(e)}
	}else{
		
    lots_of_messages_getter(message.channel, messagecount + 1).then(messages => {
        messages.some(m => {
			if (deletedMessages >= messagecount){return true}
			if (message.guild.me.permissions.has('MANAGE_MESSAGES')){
				m.delete().catch(console.error);
                deletedMessages++;
			}
            else if (m.author.id == bot.user.id) {
                return message.channel.send(`You dont have permission to do that! (use [p]spurge instead!)`).then(m => m.delete(2000));
            }
        });
    }).then(() => {
        if (deletedMessages === -1) deletedMessages = 0;
        message.channel.send(`Purged ${deletedMessages} messages.`)
            .then(m => m.delete(2000));
    }).catch(console.error);
	}
console.log(chalk.red('[Bot] ') + "You have used the " + chalk.bold('purge') + " command.")
}




module.exports.help = {
    name: "purge" // <<<<<<<<<<<<<<< PUT THE COMMAND NAME HERE NOOB
}

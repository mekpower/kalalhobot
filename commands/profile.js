const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
	let user = message.author;
	
	let xp = await db.fetch(`exp_${user.id}`);
	if(exp === null) exp = 0;
	let level = await db.fetch(`level_${user.id}`);
	if(level === null) level = 0;
	
	let perf = new Discord.RichEmbed()
	.setColor("#be41f4")
	.setAuthor("RANK: "+ user.username, user.avatarURL)
	.addField("LEVEL", level)
	.addField("XP", xp)
    .setTimestamp()
    
    message.channel.send(perf);
}
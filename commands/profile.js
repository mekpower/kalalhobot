const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
	let user = message.author;
    
    let balance = await db.fetch(`userBalance_${user.id}`)
	let exp = await db.fetch(`exp_${user.id}`);
	if(exp === null) exp = 0;
	let level = await db.fetch(`level_${user.id}`);
    if(level === null) level = 0;
    let sobre = await db.fetch(`sobre_${user.id}`);
    if(sobre === null) sobre = "Kalalho is the best";
	
	let perf = new Discord.RichEmbed()
	.setColor("#be41f4")
    .setTitle("<:User:492106844278358031> Profile: "+ user.username)
    .setDescription("<:BulletedList:492195623962017802> Sobre: \n"+sobre)
    .setThumbnail(user.avatarURL)
	.addField("LEVEL", level,true)
    .addField("XP", exp,true)
    .addField("Koins", `<:GG:502478254322614282> ${balance}`)
    .setTimestamp()
    
    message.channel.send(perf);
}
const Discord = require("discord.js");

module.exports.run = (client, message, args) =>{
	
	let menuEmbed = new Discord.RichEmbed()
	
	.setTitle("Help Menu")
	.setColor('36393e')
	.setDescription("Cada emote é uma opção, use as reações para ir para tal menu")
	.addField("Reações", 'Infos = <:BulletedList:492195623962017802> \n Games = <:R2D2:492193706909106176> \n Entreteimento = <:Chat:492191006729437184> \n Música = <:MusicRecord:492106791958740993>')
	.setFooter(`Comando solicitado por: ${message.author.username}`, message.author.avatarURL)
	.setTimestamp();
	
	message.channel.send({menuEmbed})
.then(message => {
   message.react('492195623962017802')
   message.react('492193706909106176')
   message.react('492191006729437184')
   message.react('492106791958740993')
   
var servidor = (reaction, user) => reaction.emoji.name === '492195623962017802' && user.id !== message.author.id
var games = (reaction, user) => reaction.emoji.name === '492193706909106176' && user.id !== message.author.id
var aleatorio = (reaction, user) => reaction.emoji.name === '492191006729437184' && user.id !== message.author.id
var musica = (reaction, user) => reaction.emoji.name === '492106791958740993' && user.id !== message.author.id
})

client.on('messageReactionAdd', servidor => { 

        var embed1 = new Discord.RichEmbed()

        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle("Infos comandos")
        .setDescription("Comandos de info e como usar alguns. \n `ping` , `serverinfo` , `level` , `botinfo` \n `reports` :Ex.: k&reports <@usuario> <motivo_do_report> \n `bugr` :Ex.: k&bugr <nome_do_comando> <problema_do_comando> \n `anime` :Ex>: k&anime <nome_do_anime>") 
        .setColor(0xfffff)
        .setFooter(client.user.username, client.user.avatarURL)
		.setTimestamp();

    message.edit({embed1})
})

client.on('messageReactionAdd', games => { 

        var embed2 = new Discord.RichEmbed()

        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle("Games comandos")
        .setDescription("Comandos e como usar. \n `osu` :Ex.: k&osu <nome_do_jogador> \n `fort` :Ex.: k&fort <nome_do_jogador>") 
        .setColor(0xfffff)
        .setFooter(client.user.username, client.user.avatarURL)
		.setTimestamp();

    message.edit({embed2})
})

client.on('messageReactionAdd', aleatorio => { 

        var embed3 = new Discord.RichEmbed()

        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle("Comandos de entretenimento")
        .setDescription("Comandos simples, apenas digitálos normalmente. \n `frita` , `troll` , `change` , `proverbio`") 
        .setColor(0xfffff)
        .setFooter(client.user.username, client.user.avatarURL)
		.setTimestamp();

    message.edit({embed3})
})

client.on('messageReactionAdd', musica => { 

        var embed3 = new Discord.RichEmbed()

        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle("Comandos de música")
        .setDescription("Comandos e como usar. \n `tocar` :Ex.: k&osu <nome_da_musica \n `pular`") 
        .setColor(0xfffff)
        .setFooter(client.user.username, client.user.avatarURL)
		.setTimestamp();

    message.edit({embed3})
})

}
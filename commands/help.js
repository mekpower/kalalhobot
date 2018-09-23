const Discord = require("discord.js");
const fs= require("fs");

module.exports.run = async (client, message, args) => {

    let menuEmbed = new Discord.RichEmbed()
	
	.setTitle("Help Menu")
	.setColor('36393e')
	.setDescription("Cada emote é uma opção, use as reações para ir para tal menu")
	.addField("Reações", 'Infos = 🗒 \n Games = 👾 \n Entreteimento = 💬 \n Música = 🎧')
	.setFooter(`Comando solicitado por: ${message.author.username}`, message.author.avatarURL)
	.setTimestamp();
	
    
        var embed1 = new Discord.RichEmbed()

        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle("Infos comandos")
        .setDescription("Comandos de info e como usar alguns. \n `ping` , `serverinfo` , `level` , `botinfo` \n `reports` :Ex.: k&reports <@usuario> <motivo_do_report> \n `bugr` :Ex.: k&bugr <nome_do_comando> <problema_do_comando> \n `anime` :Ex>: k&anime <nome_do_anime>") 
        .setColor(0xfffff)
        .setFooter(client.user.username, client.user.avatarURL)
		.setTimestamp();
		
		var embed2 = new Discord.RichEmbed()

        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle("Games comandos")
        .setDescription("Comandos e como usar. \n `osu` :Ex.: k&osu <nome_do_jogador> \n `fort` :Ex.: k&fort <nome_do_jogador>") 
        .setColor(0xfffff)
        .setFooter(client.user.username, client.user.avatarURL)
		.setTimestamp();
		
		var embed3 = new Discord.RichEmbed()

        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle("Comandos de entretenimento")
        .setDescription("Comandos simples, apenas digitálos normalmente. \n `frita` , `troll` , `change` , `proverbio`") 
        .setColor(0xfffff)
        .setFooter(client.user.username, client.user.avatarURL)
		.setTimestamp();
		
		var embed4 = new Discord.RichEmbed()

        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle("Comandos de música")
        .setDescription("Comandos e como usar. \n `tocar` :Ex.: k&osu <nome_da_musica \n `pular`") 
        .setColor(0xfffff)
        .setFooter(client.user.username, client.user.avatarURL)
		.setTimestamp();

        message.channel.send(menuEmbed).then(msg2 => {
            msg2.react('🗒');
            msg2.react('👾');
			msg2.react('💬');
			msg2.react('🎧');
        const collector = msg2.createReactionCollector((r, u) => (r.emoji.name === '🗒' || r.emoji.name === '👾' || r.emoji.name === '💬' || r.emoji.name === '🎧') && (u.id !== client.user.id && u.id === message.author.id))
        collector.on("collect", r=>{
            switch (r.emoji.name) {
            case '🗒':
            r.remove(u);
            r.message.edit(embed1)
			break;
            case '👾': 
            r.remove(u);
            r.message.edit(embed2)
			break;
            case '💬': 
            r.remove(u);
            r.message.edit(embed3)
			break;
            case '🎧': 
            r.remove(u);
            r.message.edit(embed4)
            break;
            }
            })
        }) 

}

module.exports.help = {
    name: "ajuda"
}
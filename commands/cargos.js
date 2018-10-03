const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
    
    let serverembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField("Cargos do Server",` ${message.guild.roles.size} Cargos  \n Nomes : ${message.guild.roles.array()}`,true)
    .setTimestamp()
    .setFooter(`${message.author.username}#${message.author.discriminator}`,message.author.displayAvatarURL);

    message.channel.send(serverembed);

}
const Discord = require("discord.js");
var randomPuppy = require("random-puppy");

module.exports.run = (client, message, args) =>{
    randomPuppy('memes').then(url => {
        var memeEmbed = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle('Meme entregue:')
            .setFooter(`Comando solicitado por: ${message.author.username}`, message.author.avatarURL)
            .setImage(url)
            .setColor('36393e')
        message.channel.send(memeEmbed);
    });
}
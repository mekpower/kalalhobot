const Discord = require('discord.js')
const client = new Discord.Client();


exports.run = (client, message, args) => {
    
    let jg = message.guild.roles.find(c => c.name == 'haigui elu 🔝');

    if(args[0]){

        const a = new Discord.RichEmbed()
        .setTitle("Game Room")
        .setDescription("Bora jogar rapeizeee")
        .setColor('#42f445')
        .addField("Convocados", `${jg}`,true)
        .addField("Game", `${args[0]}`, true)
        .setImage("http://38.media.tumblr.com/tumblr_lyr9gkpYgw1r6yetao3_500.gif")
        .setTimestamp()
        .setFooter(`${message.author.username}#${message.author.discriminator}`,message.author.displayAvatarURL);

        

        a.addField("Vagas", `${args[1]}`, true);
        message.channel.send(a);

    }
    
}
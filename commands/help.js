const Discord = require("discord.js");
const fs= require("fs");

module.exports.run = async (client, message, args,con) => {

    var comandosList = fs.readFileSync('./commands/comandos.txt','utf8');
    let hUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let ajudaEmbed = new Discord.RichEmbed()
    .setTitle("<:BulletedList:492195623962017802> Menu de Ajuda")
    .setThumbnail(client.user.displayAvatarURL)
    .setColor("#00a9ff")
    .addField("Comandos de membros", `<:MoreThan:492193729646428180> \` IMPORTANT: This bot is Brazilian, most of the commands will be in PORTUGUESE. \` \n ${comandosList}`)
    .setFooter("Prefix: k&")
    message.channel.sendEmbed(ajudaEmbed);

}

module.exports.help = {
    name: "ajuda"
}
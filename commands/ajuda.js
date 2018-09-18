const Discord = require("discord.js");
const fs= require("fs");

module.exports.run = async (client, message, args) => {

    var comandosList = fs.readFileSync('./commands/comandos.txt','utf8');
    let hUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let ajudaEmbed = new Discord.RichEmbed()
    .setTitle("Menu de Ajuda 📑")
    .setThumbnail(client.user.displayAvatarURL)
    .setColor("#00a9ff")
    .addField("Comandos de membros", comandosList)

    message.channel.sendEmbed(ajudaEmbed);

}

module.exports.help = {
    name: "ajuda"
}
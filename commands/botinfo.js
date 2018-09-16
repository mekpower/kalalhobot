const Discord = require("discord.js");
module.exports.run = (client, message, args, ops) => {

    let botinfoEmbed = new Discord.RichEmbed()

    .setAuthor("Kalalho", message.client.avatarURL)
    .addField("Soble min", "Koe, tlaquilo? Eu sou o Kalalho, um bot brasileiro sobre variadas coisas, criado pelo MekPower#6688")
    .addField("🌎 Servidores", client.guilds.size,true)
    .addField("👨‍👨‍👧‍👦 Meus amigos", client.users.size,true)
    .addField("💬 Canais", client.channels.size,true)
    .addField("Programação", "<:nodejs:490597898812391424> Node.js", true);

    message.channel.sendEmbed(botinfoEmbed);

}
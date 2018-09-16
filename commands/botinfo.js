const Discord = require("discord.js");
module.exports.run = (client, message, args, ops) => {
    let join = `\`\`\``;

    let botinfoEmbed = new Discord.RichEmbed()

    
    .setAuthor("Kalalho")
    .setColor("#ffe100")
    .addField("Soble min", "Koe, tlaquilo? Eu sou o Kalalho, um bot brasileiro sobre variadas coisas, criado pelo MekPower#6688")
    .addField("🌎 Servidores", client.guilds.size,true)
    .addField("👨‍👨‍👧‍👦 Meus amigos", client.users.size,true)
    .addField("💬 Canais", client.channels.size,true)
    .addField("Programação", "<:nodejs:490597898812391424> Node.js", true)
    .addField(" Datas:", ` Entrei no *${guild.name}*: \n ${join}${client.guild.joinedAt}${join}`,true)

    message.channel.sendEmbed(botinfoEmbed);

}
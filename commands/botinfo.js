const Discord = require("discord.js");
module.exports.run = (client, message, args, ops) => {
    let join = `\`\`\``;

    let botinfoEmbed = new Discord.RichEmbed()

    
    .setAuthor("Kalalho", client.user.displayAvatarURL)
    .setColor("#ffe100")
    .addField("Soble min", "Koe, tlanquilo? Eu sou o Kalalho, um bot brasileiro sobre variadas coisas, criado pelo **MekPower#6688**")
    .addField("🌎 Servidores", ` ${join}${client.guilds.size}${join}`,true)
    .addField("👨‍👨‍👧‍👦 Meus amigos", client.users.size,true)
    .addField("💬 Canais", client.channels.size,true)
    .addField("Linguagem", "<:nodejs:490597898812391424> Node.js", true)

    message.channel.sendEmbed(botinfoEmbed);

}
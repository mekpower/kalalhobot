const Discord = require("discord.js");
module.exports.run = (client, message, args, ops) => {
    let join = `\`\`\``;

    let botinfoEmbed = new Discord.RichEmbed()

    
    .setAuthor("Kalalho", client.user.displayAvatarURL)
    .setColor("#ffe100")
    .addField("Soble min", "Koe, tlanquilo? Eu sou o Kalalho, um bot brasileiro sobre variadas coisas, criado pelo **MekPower#6688**")
    .addField("🌎 Servidores", ` ${join}${client.guilds.size}${join}`,true)
    .addField("👨‍👨‍👧‍👦 Meus amigos",` ${join}${client.users.size}${join} `,true)
    .addField("💬 Canais", ` ${join}${client.channels.size}${join} `,true)
    .addField("Linguagem", "<:nodejs:490597898812391424> Node.js", true)
    .addField(" Links", ["Site"]("https://kalalhobot.glitch.me"))

    message.channel.sendEmbed(botinfoEmbed);

}
const Discord = require("discord.js");
module.exports.run = (client, message, args, ops) => {
    let join = `\`\`\``;

    let botinfoEmbed = new Discord.RichEmbed()

    
    .setAuthor("Kalalho", client.user.displayAvatarURL)
    .setColor("#ffe100")
    .addField("Soble min", "Koe, tlanquilo? Eu sou o Kalalho, um bot brasileiro sobre variadas coisas, criado pelo **MekPower#6688**. Prefix: `k&` ")
    .addField("<:Geography:492105770729472000> Servidores", ` ${join}${client.guilds.size}${join}`,true)
    .addField("<:members:492191050916560896> Meus amigos",` ${join}${client.users.size}${join} `,true)
    .addField("<:Chat:492191006729437184> Canais", ` ${join}${client.channels.size}${join} `,true)
    .addField("<:SourceCode:492191185356718081> Linguagem", "<:nodejs:490597898812391424> Node.js", true)
    .addField("<:Link:492191113021620234> Links",` [**Site**](https://kalalhobot.glitch.me) \n [**Vote**](https://discordbots.org/bot/476011591691796490) \n[**Invite**](https://goo.gl/WznTJ9) \n [**GitHub**](https://github.com/mekpower/kalalhobot) `);

    message.channel.sendEmbed(botinfoEmbed);

}
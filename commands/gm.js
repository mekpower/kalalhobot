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
        .setImage("http://38.media.tumblr.com/tumblr_lyr9gkpYgw1r6yetao3_500.gif")
        .setTimestamp()
        .setFooter(`${message.author.username}#${message.author.discriminator}`,message.author.displayAvatarURL);

        if(args[0] == "lol" || "league of legends") a.addField("Game", `<:LeagueofLegends:497632559468118037> ${args[0]}`, true);
        else if(args[0] == "pubg" || "PUBG" || "pub" || "PUB") a.addField("Game", `<:PUBG:497632603864563712> ${args[0]}`, true);
        else if(args[0] == "fortnite" || "Fortnite") a.addField("Game", `<:Fortnite:492468035559620628> ${args[0]}`, true);
        else if(args[0] == "Overwatch" || "overwatch") a.addField("Game", `<:Overwatch:497632658545967154> ${args[0]}`, true);
        else if(args[0] == "Minecraft" || "minecraft") a.addField("Game", `<:Minecraft:497632635997126656> ${args[0]}`, true);
        else a.addField("Game", `${args[0]}`, true);

        a.addField("Vagas", `${args[1]}`, true);
        message.channel.send(a);

    }
    
}
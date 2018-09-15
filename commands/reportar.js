const bot = new Discord.Client({disableEveryone: true});
var anti_spam = require("discord-anti-spam");
const Discord = require("discord.js");

module.exports.run = (client, message, args, ops) => {
    
    
    let reporUs = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!reporUs) return message.channel.send("Não achei esse cabra, cadê ele??!!");
    let causa = args.join(" ").slide(22);

    let reportEmbed = new Discord.RichEmbed()
    
    .setTitle("Crucificado")
    .addField("Usuário crucificado",`${reporUs}, ID do usuário ${message.author.id}`)
    .addField("Canal", message.channel)
    .addField("Data", message.createdAt)
    .addField("Motivo", causa);

    let resporCanal = message.channels.find(`name`, "reports");
    if(!resporCanal) return message.channel.send("Não existe uma sala #reports");

    resporCanal.send(reportEmbed);

    anti_spam(bot, {

        warnBuffer: 3,
        maxBuffer: 5,
        interval: 4000,
        warningMessage:"Para de spammar jovem, chega ca, vamos conversar naturalmente",
        banMessage: "A palavra que você estava spammando foi cinzada e botada na lista negra",
        maxDuplicatesWarning: 7,
        maxDuplicatesBan: 10
    });
}


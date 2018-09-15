const Discord = require("discord.js");
module.exports.run = (client, message, args, ops) => {

    var voiceEmbed = new Discord.RichEmbed()

    .setTitle("Voice Tutorial")
    .setColor("#5ff442")
    .addField("1° Passo", "Primeiro procure uma sala com o símbolo de fone 🔊")
    .addField("2° Passo", "Clique em cima dela")
    .addField("3° Passo", "Está tudo prontoo! Agora basta falar com seus amigos!!")
    .setImage("https://i.imgur.com/rlJ0RcJ.png");
    
    message.channel.sendEmbed(voiceEmbed);
}
const Discord = require("discord.js");
const fs= require("fs");

module.exports.run = async (bot, message, args) => {

    var comandosList = fs.readFileSync('./commands/comandos.txt','utf8');
    let hUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let ajudaEmbed = new Discord.RichEmbed()
    .setTitle("Menu de Ajuda")
    .setColor("#00a9ff")
    .addField("Comandos de membros", comandosList)

    message.channel.sendEmbed(ajudaEmbed);

    let modemEmbed = new Discord.RichEmbed()
    .setTitle("Mod Menu de Ajuda")
    .addField("Comandos de Mods","");

    try{
        await message.author.sendEmbed(modemEmbed);
        message.react("")
    }catch(e){
        message.reply("Sua DM está fechada, não consigo enviar!");
    }

}

module.exports.help = {
    name: "ajuda"
}
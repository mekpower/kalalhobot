const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = (client, message, args, prefix) => {

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Não tem permissão rapá");
    if(!args[0] || args[0 == "ajuda"]) return message.reply (`Uso: ${prefix}prefix <prefixo aqui>`);

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefi.json", JSON.stringify(prefixes), (err) =>{
        if(err) console.lor(err)
    });

    let pEmbed = new Discord.RichEmbed()
    .setTitle("Novo Prefixo!!")
    .setDescription(`Prefixo agora é ${args[0]}`);
    message.channel.send(pEmbed);

}

module.exports.ajuda = {
    name: "prefix"
}
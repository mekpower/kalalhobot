const Discord = require("discord.js");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/coin', {
    useNewUrlParser: true
});
const Koin = require("../koin.js");

module.exports.run =(client, message, args) =>{

    Koin.findOne({
        userID: message.author.id,
        serverID: message.guild.id
    }, (err, coin) =>{
        if(err) console.log(err);

        let bancoEmbed = new Discord.RichEmbed()
        .setTitle("Banco")
        .setColor("")
        .setThumbnail(message.author.displayAvatarURL);
        if(!coin){
            bancoEmbed.addField("Koins", "0", true);
            return message.channel.send(bancoEmbed);
        }else{
            bancoEmbed.addField("Koins", koin.coin, true);
            return message.channel.send(bancoEmbed);
        }
    })
}
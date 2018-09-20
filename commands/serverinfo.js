const Discord = require("discord.js");
module.exports.run = (client, message, args, ops) => {
    
    function checkBots(guild) {
        let botCount = 0; // This is value that we will return
        guild.members.forEach(member => { // We are executing this code for every user that is in guild
          if(member.user.bot) botCount++; // If user is a bot, add 1 to botCount value
        });
        return botCount; // Return amount of bots
      }
    
    var embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setTitle("Server Info")
        .addField("Nome do Servidor", message.guild.name, true)
        .addField("<:User:492106844278358031> Dono(a) do Server", message.guild.owner.user.tag, true)
        .addField("<:members:492191050916560896> Total de Membros", message.guild.memberCount, true)
        .addField("<:bottag:490597160560099328> Bots", checkBots(message.guild), true)
        .addField("<:Chat:492191006729437184> Canais", message.guild.channels.size,true)
        .addField("<:Geography:492105770729472000> Região", message.guild.region, true)
        
        
        .setColor("#ffe100")
        .setThumbnail(message.guild.iconURL)
        message.channel.sendEmbed(embed);

}
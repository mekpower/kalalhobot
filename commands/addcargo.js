const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
    

        let cargoEmbed = new Discord.RichEmbed()
    .setTitle("Cargos Disponíveis")
    .setDescription("Use as reações referentes")
    .addField("<./devHelper.js> 💻", "Se você é dev de JavaScript, use a reação 💻")
    .addField("<./devHelper.ino> ⚙", "Se você é dev de Arduino, use a reação ⚙")
    .addField("<./devHelper.c> 🖥", "Se você é dev de Arduino, use a reação 🖥")
    .addField("<./devHelper.jar> ☕", "Se você é dev de Java, use a reação ☕️")
    .addField("haigui elu 🔝", "Se você é claramente um high elo bolado 1v9, use a reação 🔝")
    .setTimestamp();

    message.channel.send(cargoEmbed).then(msg2 => {
        msg2.react('💻');
        msg2.react('⚙');
        msg2.react('🖥');
        msg2.react('☕');
        msg2.react('🔝');
    })

    client.on('messageReactionAdd', (reaction, user) => {
        if(reaction.emoji.name == "💻" && user.id !== client.user.id){
        message.member.addRole("<./devHelper.js> 💻")
        }
    
        if(reaction.emoji.name == "⚙" && user.id !== client.user.id){
            message.member.addRole("<./devHelper.ino> ⚙")
        }
    
        if(reaction.emoji.name == "🖥" && user.id !== client.user.id){
            message.member.addRole("<./devHelper.c> 🖥")
        }
    
        if(reaction.emoji.name == "☕" && user.id !== client.user.id){
            message.member.addRole("<./devHelper.jar> ☕")
        }
    
        if(reaction.emoji.name == "🔝" && user.id !== client.user.id){
            message.member.addRole("haigui elu 🔝")
        }
    })
}


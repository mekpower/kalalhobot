const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
    if(message.guild.id === '330332382362337281'){

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
    const collector = msg2.createReactionCollector((r, u) => (r.emoji.name === '💻' || r.emoji.name === '⚙' || r.emoji.name === '🖥' || r.emoji.name === '☕' || r.emoji.name === '🔝') && (u.id !== client.user.id && u.id === message.author.id))
    collector.on("collect", (r, u)=>{
        switch (r.emoji.name) {
        case '💻':
        let gRole = message.guild.roles.find(`name`, `<./devHelper.js> 💻`)
        return(message.author.addRole(gRole.id))
        break;
        case '⚙': 
        let gRole2 = message.guild.roles.find(`name`, `<./devHelper.ino> ⚙️`)
        return(message.author.addRole(gRole2.id))
        break;
        case '🖥': 
        let gRole3 = message.guild.roles.find(`name`, `<./devHelper.c> 🖥`)
        return(message.author.addRole(gRole3.id))
        break;
        case '☕': 
        let gRole4 = message.guild.roles.find(`name`, `<./devHelper.jar> ☕️`)
        return(message.author.addRole(gRole4.id))
        break;
        case '🔝': 
        let gRole5 = message.guild.roles.find(`name`, `haigui elu 🔝`)
        return(message.author.addRole(gRole5.id))
        break;
        }
        })
    })

    }else{
        message.channel.send("Esse comando está funcionando apenas no Servidor do criador do bot");
    }
    

}
const Discord = require("discord.js");

module.exports.run = (client, message, args, con) =>{

    var bug = args.slice(0).join(" ")
    if(!bug) return message.reply("Para usar: bugr <comando> <problema do comando>")
    
    let bugrEmbed = new Discord.RichEmbed()
    
    .setTitle("🐛 Bug Reportado!!")
    .setColor("#ff0000")
    .addField("Usuário",`${message.author.username}`)
    .addField("Canal", message.channel)
    .addField("Data", message.createdAt)
    .addField("Bug Achado", bug);

    let okEmbed = new Discord.RichEmbed()
            
    .setTitle("<:correto:471853582740619284> Bug Resolvido!!")
    .setColor("#00ff37")
    .addField("Bug",bug)
    .addField("Canal", message.channel)
    .addField("Data", message.createdAt);

    let nayEmbed = new Discord.RichEmbed()
            
    .setTitle("<:negado:487113617473273876> Bug Ainda não resolvido!!")
    .setColor("#a00000")
    .addField("Bug",bug)
    .addField("Canal", message.channel)
    .addField("Data", message.createdAt);

    message.channel.send("<:arquivado:491415967880970251> **|** Bug arquivado para verificação, agradeço por ajudar a gente <:mekAmor:489565635806887946>");
    client.guilds.get("486292763667726337").channels.get("491411677015965736").send(bugrEmbed).then(msg2 => {
        msg2.react('471853582740619284');
        msg2.react('487113617473273876');
    const collector = msg2.createReactionCollector((r, u) => ((r.emoji.name === '471853582740619284') || (r.emoji.name === '487113617473273876')) && (u.id !== client.user.id))
    collector.on("collect", r=>{
        switch (r.emoji.name) {
        case '471853582740619284': 
           
            client.guilds.get("486292763667726337").channels.get("491419203434184705").send(okEmbed)
        break;
        case '487113617473273876':
        
            client.guilds.get("486292763667726337").channels.get("491419203434184705").send(nayEmbed)
        }
        })
    }) 
}

module.exports.ajuda = {
    name: "bugr"
}
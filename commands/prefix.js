const db = require('quick.db');

module.exports.run = (client, message, args, func) =>{

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('<:correto:471853582740619284> | Calma lá meu caro pigmeu, tu não tens a permição que é necessária');
    if(!args.join(" ")) return message.channel.send('Coloque o prefixo escolhido. Ex.: `prefix <prefix>`');

    db.updateText(`GuildPrefix_${message.guild.id}`, args.join().trim()).then(ko => {

        message.channel.send('Prefixo mudado para ' +ko.text);

    })
}
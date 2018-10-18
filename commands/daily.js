const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('ms')

exports.run = async (client, message, args) => {

    let cooldown = 8.64e+7,
    amount = 250

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`)
    try {
    db.fetch(`userBalance_${message.member.id}`).then(bucks => {
    if(bucks == null){
        db.set(`userBalance_${message.member.id}`, 50)}

    else if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily))

        let lastDailyEmbed = new Discord.RichEmbed()
        .setAuthor(`<:MoneyBox:502477991595474969> Próxima Daily`)
        .setColor('#ffffff')
        .setDescription(`Você pegou a recompensa diária com sucesso! Volte amanhã para pegar mais! Tempo restante: **${timeObj.hours}h ${timeObj.minutes}m**!`)
        .setFooter('Pedido por ' + message.author.tag, message.author.avatarURL)
        message.channel.send(lastDailyEmbed)
    } else {
        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`userBalance_${message.member.id}`, amount).then(i => {
          var discord = require('discord.js')
          var embed = new Discord.RichEmbed()
          .setTitle('<:MoneyBox:502477991595474969> Daily de hoje')
          .setDescription(`Coletado com sucesso :dollar:$${amount}`)
          .setColor('#ffffff')
          .setFooter('Pedido por ' + message.author.tag, message.author.avatarURL)
          message.channel.send(embed);
        })}
    })} catch(err) {console.log(err)}

}
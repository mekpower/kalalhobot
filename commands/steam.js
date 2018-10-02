const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();

module.exports.run = (client, message, args) => {

    let game = args[0]
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.reply('Coloque um nome de jogo da steam!')
    provider.search(game).then(result => {
    provider.detail(result[0].id, "portuguese", "pt").then(results => {
        console.log(results)
    const embed = new Discord.RichEmbed()
    .setAuthor('Steam Store', steampng)
  .setColor("#36393F")
    .setTitle(result[0].name)
    .addField(`ID do jogo`, result[0].id, true)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Genero', results.genres, true)
    .addField('Preço', `Preço normal: **${results.priceData.initialPrice}** \n Preço de desconto: **${results.priceData.finalPrice}** `, true)
    .addField('Plataformas', results.otherData.platforms, true)
    .addField('Metacritic', results.otherData.metacriticScore, true)
    .addField('Etiquetas', results.otherData.features, true)
    .addField('Desenvolvedor', results.otherData.developer, true)
    .addField('Publicador', results.otherData.publisher)
  .setColor("#36393F")
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.reply('Erro ou jogo `' + game + '` não encontrado')
    })
})
})

}
const Discord = require("discord.js");
const Fortn = require('fortnite');
const fortnite = new Fortn(process.env.fortapi);

module.exports.run = async (client, message, args,con) =>{

    let username = args[0];
    let plataform = args[1] || 'pc';

    if(!username) return message.reply("Por favor coloque o nick no Fortnite!");

    let data = fortnite.user(username, plataform).then( data =>{
        let stats = data.stats;
        let lifetime = stats.lifetime;
        
        let score = lifetime[6]['Score'];
        let match = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winsP = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];

        let fortEmbed = new Discord.RichEmbed()
        .setTitle("<:Fortnite:492468035559620628> Fortnite Stats")        
        .setAuthor(data.username)
        .setColor("#c956ff")
        .addField("<:Prize:492105804724305920> Wins", wins, true)
        .addField("<:Poison:492487538963906571> Kills", kills, true)
        .addField("<:Goal:492105748646592523> Pontuação", score, true)
        .addField("<:MoreThan:492193729646428180> Partidas jogadas", match, true)
        .addField("<:Percentage:492487569800691712> Porcentagem de vitória", winsP, true)
        .addField("<:Target:492468118954835969> K/D", kd, true)

        message.channel.send(fortEmbed);
    })

}
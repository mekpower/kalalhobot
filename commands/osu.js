const osu = require('node-osu');
const Discord = require("discord.js");

const osuAPIkey = process.env.osuAPI;

var osuApi = new osu.Api(osuAPIkey, {

    notFoundAsError: true,

    completeScores: false
})

module.exports.run = (client, message, args, con) =>{
    let markCode = `\`\`\``;

    osuApi.getUser({u: args}).then(user => {

        let osuEmbed = new Discord.RichEmbed()
        .setTitle("Osu Player Info", user.avatar)
        .setColor("#ff84db")
        .setThumbnail("https://orig00.deviantart.net/43b7/f/2015/063/e/e/squared_icon_for_osu___inspired_by_faenza_theme__by_ohmygod1993-d8kcwwm.png")
        .addField("<:User:492106844278358031> Player", `${markCode}${user.name}${markCode}`,true)
        .addField("<:lvlUp:491959868937207810> Level", `${markCode}${user.level}${markCode}`,true)
        .addField("<:Goal:492105748646592523> Accuracy", `${markCode}${user.accuracyFormatted}${markCode}`,true)
        .addField("<:Geography:492105770729472000> Região", `${markCode}${user.country}${markCode}`, true)
        .addField("SS", `${markCode}${user.counts.SS}${markCode}`, true)
        .addField("S", `${markCode}${user.counts.S}${markCode}`, true)
        .addField("A", `${markCode}${user.counts.A}${markCode}`, true)
        .addField("<:MusicRecord:492106791958740993> Plays", `${markCode}${user.counts.plays}${markCode}`, true)
        .addField("PP", `${markCode}${user.pp.raw}${markCode}`, true)
        .addField("<:Prize:492105804724305920> Rank", `${markCode}${user.pp.rank}${markCode}`, true);
        
        
        message.channel.send(osuEmbed);

        
      }).catch(error =>{
  
          message.channel.send("Usuário não existe!!");
  
        });

}
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));


module.exports.run = async(bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sai lazarento!!");
    let wUser = message.guil.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!wUser) return message.reply("Num achei não ó bixo :/");
    if(sUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Vai de beise");
    let reason = args.join(" ").slice(22);

    if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;
    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
      });

      let warnEmbed = new Discord.RichEmbed()
      .setTitle("Cuidado!!")
      .setAuthor(message.author.username)
      .setColor("#ff7700")
      .setImage("http://1.bp.blogspot.com/-WMforG0sFvo/VaFKsvFinfI/AAAAAAAAQa0/dZpdkIEKoxU/s1600/MACHISTAS%2BNAO%2BPASSARAO.JPG")
      .addField("Warned User", wUser.id)
      .addField("Warned em", message.channel)
      .addField("Numero de alertas", warns[wUser.id].warns)
      .addField("Motivo", reason);

      let warnchannel = message.guild.channels.find(`name`, "incidents");
      if(!warnchannel) return message.reply("Não ahcei a sala `incidents`");

      warnchannel.send(warnEmbed);

      if(warns[wUser.id].warns == 2){
        let muterole = message.guild.roles.find(`name`, "mutado");
        if(!muterole) return message.reply(" Cria o cargo `mutado` ai mein");

        let mutetime = "10s";
        await(wUser.addRole(muterole.id));
        message.channel.send(`${wUser.tag} está temporariamente crucificado`);

        setTimeout(function(){
            wUser.removeRole(muterole.id)
            message.channel.reply(`Você foi descrucificado`)
        })
      }
      if(warns[wUser.id].warns == 3){
        message.guild.member(wUser).ban(reason);
        message.channel.send(`${wUser.tag} DIGAAA TCHAU`)
    }

}

module.exports.help = {
    name: "warn"
}
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = (client, message, args) => {
const a = new Discord.RichEmbed()
.setTitle("ReactRoles")
.setDescription("Clique na reação para conseguir a role")
message.channel.send(a).then(msg => {
    msg.react("💻")
    msg.react("⚙")
    msg.react("🖥")
    msg.react("☕")
    msg.react("🔝")
    })
}
client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name == "💻" && user.id !== client.user.id){
        let gRole = message.guild.roles.find(c => c.name == '<./devHelper.js> 💻').id
        message.member.addRole(gRole)
    }

    if(reaction.emoji.name == "⚙" && user.id !== client.user.id){
        let gRole = message.guild.roles.find(c => c.name == '<./devHelper.ino> ⚙️').id
        message.member.addRole(gRole)
    }

    if(reaction.emoji.name == "🖥" && user.id !== client.user.id){
        let gRole = message.guild.roles.find(c => c.name == '<./devHelper.c> ©️').id
        message.member.addRole(gRole)
    }

    if(reaction.emoji.name == "☕" && user.id !== client.user.id){
        let gRole = message.guild.roles.find(c => c.name == '<./devHelper.jar> ☕️').id
        message.member.addRole(gRole)
    }

    if(reaction.emoji.name == "🔝" && user.id !== client.user.id){
        let gRole = message.guild.roles.find(c => c.name == 'haigui elu 🔝').id
        message.member.addRole(gRole)
    }
})

const Discord = require("discord.js");

exports.run = async (client, message, args) => {
     message.channel.send(`Commands: \n\n${client.commands.map(cmd => `\`${cmd.ajuda.name}\``).join(", ")}`);
}
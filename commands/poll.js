const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

	if (!message.member.roles.find("name", "@everyone")) { 
		message.channel.send('Permissão inválida.');
		return;
	}
    
    // Check for input
    if (!args[0]) return message.channel.send('Use k&poll <question>');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("#ffffff") 
        .setFooter('Use as reações para votar.')
        .setDescription(args.join(' '))
        .setTitle(`Poll criada por ${message.author.username}`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); 
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};
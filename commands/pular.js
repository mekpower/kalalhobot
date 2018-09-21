

exports.run = (client, message, args, con) => {

    //Vendo se o user ta no voice
    if(!message.member.voiceChannel) return message.channel.send('Entra no canal de voz men!');

    //Vendo se o bot ta no voice
    if(!message.guild.me.voiceChannel) return message.channel.send(' O bot nem no canal de voz tá');

    //Vendo se o user e bot tão no mesmo voice
    if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Ta me tilano? Tu não tá na mesma sala que o bot');

    //daleste
    message.guild.me.voiceChannel.leave();
    message.channel.send(' Dando o Daleste');
}

module.exports.ajuda = {
    name: "&pular",
    description: " Para pesquisar músicas para soltar o batidão",
    usage: "&tocar elijah who myself"
}
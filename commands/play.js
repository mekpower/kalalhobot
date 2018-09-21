const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const search = require('yt-search');

function play(connection, message) {
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
  server.queue.shift();
  server.dispatcher.on("end", function() {
    if(server.queue[0]) play(connection, message);
      else connection.disconnect();
  })

}
var servers = {};
module.exports.run = (client, message, args, con) => {
  //play
  if (!args[0]) {
       message.channel.send(" :o: Coloca o link da musica men");
       return
  }
  
  if(!message.member.voiceChannel) {
      message.channel.send(" Como você vai escutar se não esta na sala de voz? :thinking:");
  }

  if(!servers[message.guild.id]) servers[message.guild.id] = {
      queue: []
  }
  var server = servers[message.guild.id];
  server.queue.push(args[0]);
  
  if(!message.member.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
      play(connection, message);
  })
}

module.exports.ajuda = {
  name: "play",
  description: " Para pesquisar músicas para soltar o batidão",
    usage: "&tocar elijah who myself"
}
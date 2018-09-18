const search = require('yt-search');

exports.run = (client, message, args, ops) => {

    search(args.join(' '), function(err, res){

        if(err) message.channel.send('Bixo deu um erro aqui');

        let videos = res.videos.slice(0,10);

        let resp = '';
        for (var i in videos){
            resp += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`;
        }

        resp += `\n**Escolha o número correspondente \`1-${videos.length}\``;

        message.channel.send(resp);

        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;

        const collector = message.channel.createMessageCollector(filter);

        collector.videos = videos;

        collector.once('collect', function(m){
            message.channel.send(`:arrow_forward: Tocando agora: \`${videos[m-1].title}\` | Pedida por:  `+message.author.username).then(msg2 => {
                msg2.react('▶');
                msg2.react('⏸');
                msg2.react('491460304581033985');
                const collector = msg2.createReactionCollector((r, u) => ((r.emoji.name === '▶') || (r.emoji.name === '⏸') || (r.emoji.name === '491460304581033985')) && (u.id !== client.user.id))
                collector.on("collect", r=>{
                switch (r.emoji.name) {
                case '▶': 
                let commandPlay = require(`./play.js`);
                    commandPlay.run();
                break;
                case '⏸':
                let commandParar = require(`./parar.js`);
                    commandParar.run();
                break;
                case '491460304581033985':
                let commandPular = require(`./pular.js`);
                    commandPular.run();
                }
                })
            }) 
            let commandFile = require(`./play.js`);
            commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops);
        })

    });
}

module.exports.ajuda = {
    name: "tocar",
    description: " Para pesquisar músicas para soltar o batidão",
    usage: "&tocar elijah who myself"
}
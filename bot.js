const Discord = require("discord.js");
const client = new Discord.Client();
var config = require('./config.json');
var guildConf = require('./guildConf.json');
let xp = require("./xp.json");
const fs = require("fs");
var anti_spam = require("discord-anti-spam");
const token = process.env.token;

const ownerID = '483124757181497347';
const active = new Map();
var comandosList = fs.readFileSync('./commands/comandos.txt','utf8');
const bot = new Discord.Client({disableEveryone: true});
var http = require('http'); 
http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'});
res.send('it is running\n'); }).listen(process.env.PORT || 5000);







client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuarios, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
    setInterval(function(){

        let statues = ['discord.gg/q9zpY3h  | Nosso servidor',`Eu estou em ${client.guilds.size} servidores`,"🛂 Ainda estou em obra(fase beta), então tenha paciência com os erros","&ajuda | Para saber os comandos. 👍"];

        let status = statues[Math.floor(Math.random()*statues.length)];
        //bot.user.setGame(statues);
        client.user.setPresence({game: {name:status}, status: 'online'});
        //client.user.setPresence({activity: {name:status}, status: 'online'});
    }, 20000);
});

client.on("guildCreate", guild =>{
    console.log(`O bot entro no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);

        if (!guildConf[guild.id]) {
	        guildConf[guild.id] = {
		    prefix: config.prefix
        }
    }
    fs.writeFile('./guildConf.json', JSON.stringify(guildConf, null, 2), (err) => {
    if (err) console.log(err)
    })
});

client.on("guildDelete", guild =>{
    console.log(`O bot foi deletado do servidor: ${guild.name} (id:${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
    
    delete guildConf[guild.id]; // Deletes the Guild ID and Prefix
     fs.writeFile('./guildConf.json', JSON.stringify(guildConf, null, 2), (err) => {
     	if (err) console.log(err)
	})
});



client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type==="dm") return;

    

    const args = message.content.split(' ').slice(1);
    const comando = message.content.split(' ')[0].replace(guildConf[message.guild.id].prefix, '');
    let machis = ['machista', 'MACHISTA', 'machistas', 'MACHISTAS'];
    let mentin = ['@Kalalho#0776'];
    let mentinText = false;
    let acheNoTexto = false;

    for(var i in machis){
        if(message.content.toLowerCase().includes(machis[i].toLowerCase())) acheNoTexto = true;
        
    }

    if(acheNoTexto){
        message.channel.send('MACHIISSTAAA',{
            file: "http://1.bp.blogspot.com/-WMforG0sFvo/VaFKsvFinfI/AAAAAAAAQa0/dZpdkIEKoxU/s1600/MACHISTAS%2BNAO%2BPASSARAO.JPG"} 
        );
    }


    if(comando === "ping"){
        const m = await message.channel.send("ping?");
        m.edit(`Pong! a latência é ${m.createdTimestamp - message.createdTimestamp}ms. A latência da API é ${Math.round(client.ping)}ms`);
    }

    for(var i in mentin){
        if(message.content.toLowerCase().includes(mentin[i].toLowerCase())) mentinText = true;
    }
    if(mentinText){
        message.channel.send("Q foi kalalho?");
        message.channel.send("<a:AniPing:471788554142351391>");
    }

    if (comando === "prefix") {
        guildConf[message.guild.id].prefix = args[0];
        if (!guildConf[message.guild.id].prefix) {
            guildConf[message.guild.id].prefix = config.prefix; // If you didn't specify a Prefix, set the Prefix to the Default Prefix
        }
         fs.writeFile('./guildConf.json', JSON.stringify(guildConf, null, 2), (err) => {
             if (err) console.log(err)
        })
      }

    if(comando === "reports"){
        let reporUs = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!reporUs) return message.channel.send("Não achei esse cabra, cadê ele??!!");
    let causa = args.join(" ").slice(22);
    
    var inb = 0;
    let reportEmbed = new Discord.RichEmbed()
    
    .setTitle("Crucificado")
    .setColor("#f46841")
    .addField("Usuário crucificado",`${reporUs}, ID do usuário ${message.author.id}`)
    .addField("Canal", message.channel)
    .addField("Data", message.createdAt)
    .addField("Motivo", causa);

    let resporCanal = message.guild.channels.find(`name`, "reports");
    if(!resporCanal) return message.channel.send("Não existe uma sala #reports");

    message.channel.send("<a:load:488757308248293396> **Loading** **|** O meliante foi mandado para a sala de crucificação...");
    resporCanal.send(reportEmbed).then(sentEmbed=> {
    message.react("☑️")
    message.react("❌")
    })
        
     
      while ((inb !== 0) && (reaction.emoji.name === "<:correto:471853582740619284>")){
        message.channel.send(`<:correto:471853582740619284> **|** O report de ${message.author.username} foi aceito, alguem vai ser crucificado`);
        message.channel.send("<:drakeBan:490596000084525080>");
      }
    
    }

    let responseObject = {
        //Coloque todos os comandos simples de resposta aqui
        "&change": "Change o que mano?"
    }

    if(responseObject[message.content]){
        //Todas as mensagens simples do responseObject seram mandadas por esse if
        message.channel.send(responseObject[message.content]);
    }


    try{
        
        let ops = {
            ownerID: ownerID,
            active: active
        }

        let arqComando = require(`./commands/${comando}.js`);
        arqComando.run(client, message, args, ops);

    }catch(err){
        console.log(err.stack);
    }


    let xpAdd = Math.floor(Math.random() * 7) + 8 ;

    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }
    
    
    let xpAtu = xp[message.author.id].xp;
    let lvlAtu = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level *300;
    let difference = nxtLvl - xpAtu;
    xp[message.author.id].xp= xpAtu +xpAdd;
    if(nxtLvl <= xp[message.author.id].xp){
        let markCode = `\`\`\``;
        xp[message.author.id].level = xp[message.author.id].level +1;
        
        message.channel.send(`${markCode}${author.username} subiu de nível, atualmente está lvl ${lvlAtu +1}${markCode}`);
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) =>{
        if(err) console.log(err)

    });

    if(comando === "level"){
        let lvlEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .addField("Nível", lvlAtu, true)
        .addField("XP", xpAtu, true)
        .setColor("#f4eb42")
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${difference} XP para subir de nível`, message.author.displayAvatarURL);

        message.channel.sendEmbed(lvlEmbed);
      }


      
});
    
        
client.login(token);

anti_spam(bot, {

    warnBuffer: 3,
    maxBuffer: 5,
    interval: 4000,
    warningMessage:"Para de spammar jovem, chega ca, vamos conversar naturalmente",
    banMessage: "A palavra que você estava spammando foi cinzada e botada na lista negra",
    maxDuplicatesWarning: 7,
    maxDuplicatesBan: 10
});
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
let file = require("./dataConf.json");
let xp = require("./xp.json");
const fs = require("fs");
const mysql = require("mysql");
const osu = require('node-osu');
var anti_spam = require("discord-anti-spam");
const kitsu = require('node-kitsu');
const translate = require('translate');

//IMPORTS DO HOST_______________________________________
const token = process.env.token;
const osuAPIkey = process.env.osuAPI;

const ownerID = '483124757181497347';
const active = new Map();
var comandosList = fs.readFileSync('./commands/comandos.txt','utf8');
const bot = new Discord.Client({disableEveryone: true});
var http = require('http'); 
http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'});
res.send('it is running\n'); }).listen(process.env.PORT || 5000);

var osuApi = new osu.Api(osuAPIkey, {

    notFoundAsError: true,

    completeScores: false
})
//I.H Fim_____________________________________________



//Client.on __________________________________________
client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuarios, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
    setInterval(function(){

        let statues = ['discord.gg/q9zpY3h  | Nosso servidor',`Estou em ${client.guilds.size} servidores 🙋‍`,"🛂 Achou um bug?  ajude a gente, use o comando k&bugr e reporte o bug!","k&help | Para saber os comandos. 👍"];

        let status = statues[Math.floor(Math.random()*statues.length)];
        //bot.user.setGame(statues);
        client.user.setPresence({game: {name:status}, status: 'online'});
        //client.user.setPresence({activity: {name:status}, status: 'online'});
    }, 20000);
});

client.on("guildCreate", guild =>{
    console.log(`O bot entro no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
    client.guilds.get("486292763667726337").channels.get("491968955704016906").send(`O bot entro no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
        
});

client.on("guildDelete", guild =>{
    console.log(`O bot foi deletado do servidor: ${guild.name} (id:${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
    
});
//Client.on FIM_________________________________________________________________

function generateXp() {
    let min = 2;
    let max = 20;
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  
  }
  

function clean(text) {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
    return text;
    }


client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type==="dm") return;

    const args = message.content.split(/\s+/g);
    const comando = args.shift().slice(config.prefix.length).toLowerCase();
    
    let markCode = `\`\`\``;
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

    
    
      if(!message.content.startsWith(config.prefix)) return;

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

    const argsE = message.content.split(" ").slice(1);
    if(comando === "eval"){

        try {
            const code = argsE.join(" ");
            let evaled = eval(code);
            
            if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
            
            message.channel.send(clean(evaled), {code:"xl"});
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }

    }


    let xpAdd = Math.floor(Math.random() * 7) + 8;
    console.log(xpAdd);

    if (!xp[message.author.id]) {
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }


    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level * 300;
    xp[message.author.id].xp = curxp + xpAdd;
    if (nxtLvl <= xp[message.author.id].xp) {
        xp[message.author.id].level = curlvl + 1;
        let lvlup = new Discord.RichEmbed()
            .setTitle("Level Up!")
            .addField("Congrats to", `${message.author}`)
            .setColor("#08ff00")
            .addField("Level Atual", curlvl + 1);

        message.channel.send(lvlup);
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                if (err) console.log(err)
    });


    if(comando === "reports"){
        let reporUs = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!reporUs) return message.channel.send("Não achei esse cabra, cadê ele??!!");
    let causa = args.join(" ").slice(22);
    
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
    resporCanal.send(reportEmbed).then(msg2 => {
        msg2.react('✅');
        msg2.react('❌');
    const collector = msg2.createReactionCollector((r, u) => ((r.emoji.name === '✅') || (r.emoji.name === '❌')) && (u.id !== client.user.id))
    collector.on("collect", r=>{
        switch (r.emoji.name) {
        case '✅': 
        message.channel.send(`<:correto:471853582740619284> **|** O report de **${message.author.username}** foi aceito, alguem vai ser crucificado`)
        break;
        case '❌':
        message.channel.send(`<:negado:487113617473273876> **|** O report de **${message.author.username}** não foi aceito, sem crucificamentos por hj`)
        }
        })
    }) 
    
    }


    let responseObject = {
        //Coloque todos os comandos simples de resposta aqui
        "k&change": "Change o que mano?"
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
        arqComando.run(client, message, args);

    }catch(err){
        console.log(err.stack);
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
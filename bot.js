const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
let xp = require("./xp.json");
const fs = require("fs");
const mysql = require("mysql");

var anti_spam = require("discord-anti-spam");
const token = process.env.token;
const pasSQL = process.env.pasSQL;

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

        let statues = ['discord.gg/q9zpY3h  | Nosso servidor',`Estou em ${client.guilds.size} servidores 🙋‍`,"🛂 Achou um bug?  ajude a gente, use o comando &bugr e reporte o bug!","&ajuda | Para saber os comandos. 👍"];

        let status = statues[Math.floor(Math.random()*statues.length)];
        //bot.user.setGame(statues);
        client.user.setPresence({game: {name:status}, status: 'online'});
        //client.user.setPresence({activity: {name:status}, status: 'online'});
    }, 20000);
});

client.on("guildCreate", guild =>{
    console.log(`O bot entro no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);

        
});

client.on("guildDelete", guild =>{
    console.log(`O bot foi deletado do servidor: ${guild.name} (id:${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
    
});


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    passaword: pasSQL,
    database: "sadb"
});

con.connect(err =>{
    if (err) throw err;
    console.log("conectado ao database");
});

function generateXp(){
    let min = 3;
    let max = 12;

    return Math.floor(Math.random()* (max - min + 1)) + min;
}

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type==="dm") return;

    con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) =>{
        if(err) throw err;
        let markCode = `\`\`\``;
        let sql;
        if(rows.length < 1){
            sql = `INSERT INTO xp (id, xp, level) VALUES ('${message.author.id}', ${generateXp()}, 1)`;
        }else{
            let xp = rows[0].xp;
            
            sql = `UPDATE xp SET xp =  ${xp + generateXp()} WHERE id = '${message.author.id}'`;
            
        }
        let level = rows[0].level;
        let proxLvl = xp *300;
        if(proxLvl <= xp){
            sql = `UPDATE xp SET xp =  ${xp + generateXp()} level = ${level+1} WHERE id = '${message.author.id}'`;
            message.channel.send(`${markCode}${message.author.username} subiu de nível, atualmente está lvl ${level+1}${markCode}`);
        }

        con.query(sql);
    });

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
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
        arqComando.run(client, message, args, con);

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
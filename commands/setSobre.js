const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    let user = message.author;
    let sobre = await db.fetch(`sobre_${user.id}`);

    if(!args){
        message.channel.send("Você precisa colocar uma frase!");
    }else{
        db.set(`sobre_${user.id}`, args);
    }
    
}
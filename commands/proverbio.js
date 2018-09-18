module.exports.run = (client, message, args) =>{

    let proverbios = ["Como diz o provérbio chines, \"Com calma e geito, chega-se ao cu de qualquer sujeito\" ", "Como diz o provérbio chines \"Quem nunca tropeçou no carpete e chupou 3 pau no caminho não sabe o que é tropeçar\" ", "Como diz o proverbio chines, \"Trocar um beijo por duas ameaças de morte ainda é worth\" "];
    let prov = Math.floor(Math.random() * proverbios.length);

    message.channel.send(proverbios[prov]);
}
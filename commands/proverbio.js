module.exports.run = (client, message, args) =>{

    let proverbios = ["Como diz o provérbio chines, \"Com calma e geito, chega-se ao cu de qualquer sujeito\" ", "Como diz o provérbio chines \"Quem nunca tropeçou no carpete e chupou 3 pau no caminho não sabe o que é tropeçar\" ", "Como diz o proverbio chines, \"Trocar um beijo por duas ameaças de morte ainda é worth\" ", " \"meu erro foi ter colocado expectativa onde eu deveria ter colocado só meu pau\" :slight_smile: ", " \"Analisando esta cadeia hereditária, quero me livrar desta situação precária, onde o rico cada vez fica mais rico e o pobre cada vez mais pobre, e o motivo disso a gente já conhece, é que o de cima sobe e o de baixo desce\" - Karl Marx ", " \"Quando eu for arquiteto, não vou projetar casas com campainha, só para a pessoa ter que aplaudir a obra antes de entrar\" "];
    let prov = Math.floor(Math.random() * proverbios.length);

    message.channel.send(proverbios[prov]);
}
module.exports = {
    name: "wallet",
    description: "affiche mon montant en 2LPCoins __!wallet__",
    execute(message, client, coin) {
        message.channel.send(`
            Membre : ${message.author}\nCoins : ${Object.values(coin.filter({id: message.author.id}).find('coins').value())[1]} 2LPCoins
        `);
    }
};
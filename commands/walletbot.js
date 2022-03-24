module.exports = {
    name: "walletbot",
    description: "Commande réservée, affiche la valeur en 2LPCoins du bot __!walletbot__",
    execute(message, client, coin) {
        const SymbolCoin = client.emojis.cache.get('956522097545445376');
        if (!message.member.roles.cache.has('791199098510114837')) return;
        message.channel.send(`
            Coins : ${Object.values(coin.filter({id: "953981215407501363"}).find('coins').value())[1]} 2LPCoins
        `);
    }
};
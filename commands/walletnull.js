module.exports = {
    name: "walletnull",
    description: "Commande Réservée, permet de remettre à 1 2LPCoins le wallet d'un membre __!walletnull @member__",
    execute(message, client, coin, role) {
        if(!message.member.roles.cache.has('791199098510114837')) return;
        message.mentions.user.map(user => {
            //console.log(rname.name);
            let coinValue = Object.values(coin.filter({id: user.user.id}).find('coins').value())[1];
            let botCoinValue = Object.values(coin.filter({id: "953981215407501363"}).find('coins').value())[1];

            coin.find({id: user.user.id}).assign({id: user.user.id, coins: 1}).write();
            coin.find({id: "953981215407501363"}).assign({id: "953981215407501363", coins: botCoinValue += coinValue}).write();
            message.reply('votre wallet a été réinitialisé, votre solde a été envoyé au bot');
        });
    }
}
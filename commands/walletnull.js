module.exports = {
    name: "walletnull",
    description: "Commande Réservée, permet de remettre à 1 2LPCoins le wallet d'un membre __!walletnull @member__",
    execute(message, client, coin, role) {
        if(!message.member.permissions.has('MANAGE_GUILD')) return;
        message.mentions.user.map(user => {
            let coinValue = Object.values(coin.filter({id: user.id}).find('coins').value())[1];
            let botCoinValue = Object.values(coin.filter({id: `${client.user.id}`}).find('coins').value())[1];

            coin.find({id: user.id}).assign({id: user.id, coins: 1}).write();
            //coin.find({id: `${client.user.id}`}).assign({id: `${client.user.id}`, coins: botCoinValue += coinValue}).write();
            message.reply('le wallet a été réinitialisé, le solde a été envoyé au bot');
        });
    }
}
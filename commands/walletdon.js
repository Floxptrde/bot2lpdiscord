module.exports = {
    name: "walletdon",
    description: "Commande réservée, permet les transfert du bot à un membre __!walletdon @membre nombreDe2LPCoins__",
    execute(message, client, coin) {
        const value = message.content.split(/ +/);
        if(!message.member.permissions.has('MANAGE_GUILD')) return;
        message.mentions.users.map(user => {
            let userCoins = Object.values(coin.filter({id: user.id}).find('coins').value())[1];
            let donnateurCoins = Object.values(coin.filter({id: client.user.id}).find('coins').value())[1];
            if(donnateurCoins >= parseInt(value[2])) {
                coin.find({id: user.id}).assign({id: user.id, coins: userCoins += parseInt(value[2])}).write();
                coin.find({id: client.user.id}).assign({id: client.user.id, coins: donnateurCoins -= parseInt(value[2])}).write();
                message.reply('la transaction du bot est un succès');
            } else {
                message.reply('le bot n\'a pas assez');
            }
        });  
    }
}
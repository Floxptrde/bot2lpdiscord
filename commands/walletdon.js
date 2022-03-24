module.exports = {
    name: "walletdon",
    description: "Commande réservée, permet les transfert du bot à un membre __!walletdon @membre nombreDe2LPCoins__",
    execute(message, client, coin) {
        const value = message.content.split(/ +/);
        if(!message.member.roles.cache.has('791199098510114837')) return;
        message.mentions.users.map(user => {
            let userCoins = Object.values(coin.filter({id: user.id}).find('coins').value())[1];
            let donnateurCoins = Object.values(coin.filter({id: message.author.id}).find('coins').value())[1];
            if(donnateurCoins >= parseInt(value[2])) {
                coin.find({id: user.id}).assign({id: user.id, coins: userCoins += parseInt(value[2])}).write();
                coin.find({id: "953981215407501363"}).assign({id: "953981215407501363", coins: donnateurCoins -= parseInt(value[2])}).write();
                message.reply('la transaction du bot est un succès');
            } else {
                message.reply('le bot n\'a pas assez');
            }
        });  
    }
}
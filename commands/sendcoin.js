module.exports = {
    name: "sendcoin",
    description: "Permet les transfert de 2LPCoins entre membres __!sendcoin @membre nombreDe2LPCoins__",
    execute(message, client, coin) {
        const value = message.content.split(/ +/);
    
        message.mentions.users.map(user => {
            let userCoins = Object.values(coin.filter({id: user.id}).find('coins').value())[1];
            let donnateurCoins = Object.values(coin.filter({id: message.author.id}).find('coins').value())[1];

            coin.find({id: user.id}).assign({id: user.id, coins: userCoins += parseInt(value[2])}).write();
            coin.find({id: message.author.id}).assign({id: message.author.id, coins: donnateurCoins -= parseInt(value[2])}).write();
        });
        
    }
}
module.exports = {
    name: "achat",
    description: "Permet d'acheter un rôle avec des 2LPCoins __!achat @rôle__",
    execute(message, client, coin, role) {
        message.mentions.roles.map(rname => {
            //console.log(rname.name);
            let roleid = Object.values(role.filter({name: rname.name}).find("id").value())[0];
            let roleprice = Object.values(role.filter({name: rname.name}).find("price").value())[2];
            let rolelevel = Object.values(role.filter({name: rname.name}).find("level").value())[3];
            let coinValue = Object.values(coin.filter({id: message.author.id}).find('coins').value())[1];
            let botCoinValue = Object.values(coin.filter({id: "953981215407501363"}).find('coins').value())[1];

            if(coinValue >= roleprice) {
                message.member.roles.add(roleid);
                coinValue -= roleprice;
                botCoinValue += roleprice;
                coin.find({id: message.author.id}).assign({id: message.author.id, coins: coinValue}).write();
                coin.find({id: "953981215407501363"}).assign({id: "953981215407501363", coins: botCoinValue}).write();
                message.reply('Achat réussi');

            }
        });
    }
};
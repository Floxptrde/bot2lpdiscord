module.exports = {
    name: "vente",
    description: "Permet de vendre un rôle au bot et d'obtenir des 2LPCoins en échange __!vente @role__",
    execute(message, client, coin, role) {
        message.mentions.roles.map(rname => {
            //console.log(rname.name);
            let roleid = Object.values(role.filter({name: rname.name}).find("id").value())[0];
            let roleprice = Object.values(role.filter({name: rname.name}).find("price").value())[2];
            let coinValue = Object.values(coin.filter({id: message.author.id}).find('coins').value())[1];
            let botCoinValue = Object.values(coin.filter({id: "953981215407501363"}).find('coins').value())[1];

            if(coinValue >= roleprice && message.member.roles.cache.has(roleid)) {
                message.member.roles.remove(roleid);
                coinValue += roleprice*0.30;
                botCoinValue -= roleprice*0.30;
                coin.find({id: message.author.id}).assign({id: message.author.id, coins: coinValue}).write();
                coin.find({id: "953981215407501363"}).assign({id: "953981215407501363", coins: botCoinValue}).write();
                message.reply('vente réussie');
            }
        });
    }
}
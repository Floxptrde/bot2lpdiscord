module.exports = {
    name: "playbot",
    description: "joue avec le bot, trouve le bon numéro et gagne des 2LPCoins __!playbot nombreEntre0et10__",
    execute(message, client, coin, role) {
        
        const value = message.content.split(/ +/);

        let coinValue = Object.values(coin.filter({id: message.author.id}).find('coins').value())[1];
        let botCoinValue = Object.values(coin.filter({id: "953981215407501363"}).find('coins').value())[1];
        let tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        if(coinValue >= 21 && botCoinValue >= 100) {
            var nombre = randomInt(10);
            let gain = 0;

            if(nombre == parseInt(value[1])) {
                gain = 10*tab[nombre];
                message.reply(`bien joué\nle nombre a deviné était ${tab[nombre]}, vous avez joué ${parseInt(value[1])}\nvos gains s'élevent à ${gain} 2LPCoins`);
            } else {
                gain = tab[nombre]*2+1;
                message.reply(`Essayez encore\nle nombre a deviné était ${tab[nombre]}, vous avez joué ${parseInt(value[1])}\nvos pertes s'élevent à ${gain} 2LPCoins`);
            }

            coinValue += gain ;
            botCoinValue -= gain;

            coin.find({id: message.author.id}).assign({id: message.author.id, coins: coinValue}).write();
            coin.find({id: "953981215407501363"}).assign({id: "953981215407501363", coins: botCoinValue}).write();
            message.reply('Fin du jeu, retentez votre chance');
        } else {
            message.reply('Vous ou le bot n\' avez pas le nombre de 2LPCoins requis');
        }
    }
};
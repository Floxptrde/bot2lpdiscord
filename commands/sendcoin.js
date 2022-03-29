module.exports = {
    name: "sendcoin",
    description: "Permet les transfert de 2LPCoins entre membres __!sendcoin @membre nombreDe2LPCoins__",
    execute(message, client, coin, roleBase, MessageEmbed) {
        message.mentions.users.map(user => {
            const value = message.content.split(/ +/);
            let userCoins = Object.values(coin.filter({id: user.id}).find('coins').value())[1];
            let donnateurCoins = Object.values(coin.filter({id: message.author.id}).find('coins').value())[1];
            if(donnateurCoins >= parseInt(value[2])) {
                coin.find({id: user.id}).assign({id: user.id, coins: userCoins += parseInt(value[2])}).write();
                coin.find({id: message.author.id}).assign({id: message.author.id, coins: donnateurCoins -= parseInt(value[2])}).write();
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffde59')
                    .setTitle('Transferts')
                    //.setDescription('Retrouvez toutes les commandes du bot ici')
                    .setThumbnail(user.displayAvatarURL({format:'png'}))
                    .addFields(
                        { name: `Donnateur`, value: `${message.author}` },
                        { name: `Receveur`, value: `${user}` },
                    )
                    .setTimestamp()
                    //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

                message.reply({ embeds: [exampleEmbed] });

            } else {
                message.reply('vous n\'avez pas assez');
            }
        });  
    }
}
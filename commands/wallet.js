module.exports = {
    name: "wallet",
    description: "affiche mon montant en 2LPCoins __!wallet__",
    execute(message, client, coin, roleBase, MessageEmbed) {
        const exampleEmbed = new MessageEmbed()
            .setColor('#ffde59')
            .setTitle('Wallet')
            //.setDescription('')
            .setThumbnail(message.author.displayAvatarURL({format:'png'}))
            .addFields(
                { name: `Nom`, value: `${message.author}` },
                { name: `2LPCOINS :`, value: `${Object.values(coin.filter({id: message.author.id}).find('coins').value())[1]}` },
            )
            .setTimestamp()
            //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        message.reply({ embeds: [exampleEmbed] });
    }
};
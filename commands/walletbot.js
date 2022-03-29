module.exports = {
    name: "walletbot",
    description: "Commande réservée, affiche la valeur en 2LPCoins du bot __!walletbot__",
    execute(message, client, coin, roleBase, MessageEmbed) {
        if (!message.member.permissions.has('MANAGE_GUILD')) return;
        const exampleEmbed = new MessageEmbed()
            .setColor('#ffde59')
            .setTitle('Wallet')
            //.setDescription('')
            .setThumbnail(client.user.displayAvatarURL({format:'png'}))
            .addFields(
                { name: `Nom`, value: `${client.user}` },
                { name: `2LPCOINS :`, value: `${Object.values(coin.filter({id: client.user.id}).find('coins').value())[1]}` },
            )
            .setTimestamp()
            //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        message.reply({ embeds: [exampleEmbed] });
    }
}; 
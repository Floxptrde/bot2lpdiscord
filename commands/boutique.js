module.exports = {
    name: "boutique",
    description: "Affiche les rôles disponibles à l'achat __!boutique__",
    execute(message, client, coin, role, MessageEmbed) {
        const exampleEmbed = new MessageEmbed()
            .setColor('#ffde59')
            .setTitle('Boutique')
            .setDescription('__!achat @Role acheter un rôle avec vos 2LPCoins__');
            for(const r of role) {
                exampleEmbed.addFields(
                    { name: `👉${r.name}`, value: `**${r.price}** 2LPCoins` },
                );
            }
            
        exampleEmbed
            .setTimestamp()

        message.reply({ embeds: [exampleEmbed] });
    }
};
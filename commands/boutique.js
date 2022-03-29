module.exports = {
    name: "boutique",
    description: "Affiche les rôles disponibles à l'achat __!boutique__",
    execute(message, client, coin, role, MessageEmbed) {
        let priceBoutique = [25, 250, 1000, 3500, 10500, 26250, 52500, 99750, 179550, 305235, 488376, 732564, 1025590, 1333266, 1599920];
        const exampleEmbed = new MessageEmbed()
            .setColor('#ffde59')
            .setTitle('Boutique')
            .setDescription('__!achat @Role acheter un rôle avec vos 2LPCoins__');
            for (const price of priceBoutique){
                exampleEmbed.addFields(
                    { name: `Price`, value: `**${price}** 2LPCoins` }
                );
                for(const r of role) {
                    if(!r.price == price) return;
                    exampleEmbed.addFields(
                        { name: `👉${r.name}`, value: `**${r.price}** 2LPCoins` }
                    );
                }
            }
        exampleEmbed.setTimestamp();

        message.reply({ embeds: [exampleEmbed] });
    }
};
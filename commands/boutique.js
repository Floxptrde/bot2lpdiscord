module.exports = {
    name: "boutique",
    description: "Affiche les rôles disponibles à l'achat __!boutique__",
    execute(message, client, coin, role) {
        let chaine = "";
        for(const r of role) {
            chaine = chaine+`${r.name} : **${r.price}** 2LPCoins\n\n`;
        }

        message.channel.send(`
            **Boutique**\n${chaine}__!achat @Role acheter un rôle avec vos 2LPCoins__
        `)
    }
};
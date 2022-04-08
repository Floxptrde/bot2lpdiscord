module.exports = {
    name: "migrate",
    description: "Commande réservée, permet de récupérer les données du bot __!migrate__",
    execute(message, client, coin, roleBase, MessageEmbed, ChanWelcome, ChanRegles, ChanBot){
        if (!message.member.permissions.has('MANAGE_GUILD')) return;
        client.channels.cache.get(`${ChanBot}`).send("coin");
        client.channels.cache.get(`${ChanBot}`).send("roleBase");
    }
}
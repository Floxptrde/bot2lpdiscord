module.exports = {
    name: "migrate",
    description: "Commande réservée, permet de récupérer les données du bot",
    execute(message, client, coin, roleBase, MessageEmbed, ChanWelcome, ChanRegles, ChanBot){
        if (!message.member.permissions.has('MANAGE_GUILD')) return;
        message.reply(coin);
        message.reply(roleBase);
    }
}
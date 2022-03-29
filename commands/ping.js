module.exports = {
    name: "ping",
    description: "Commande réservée, commande de test __!ping__",
    execute(message) {
        if (!message.member.permissions.has('MANAGE_GUILD')) return;
        message.channel.send("pong");
    }
};
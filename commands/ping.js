module.exports = {
    name: "ping",
    description: "Commande réservée, commande de test __!ping__",
    execute(message) {
        if (!message.member.roles.cache.has('791199098510114837')) return;
        message.channel.send("pong");
    }
};
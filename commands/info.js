module.exports = {
    name : "info",
    description : "Page d'informations sur les commandes __!info__",
    execute(message, client) {
        let chaine = "";
        for(const cmd of client.commands) {
            chaine = chaine + `👉**${cmd[1].name}** : ${cmd[1].description}\n\n`;
        }
        message.channel.send(`
            préfix : !\n${chaine}
        `)
    }
};
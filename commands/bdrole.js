module.exports = {
    name: "bdrole",
    description: "Commande réservée, ajoute ou modifie un rôle à la boutique __!bdrole @rôle valeur__",

    execute(message, client, coin, roleBase) {
        if (!message.member.roles.cache.has('791199098510114837')) return;
        const value = message.content.split(/ +/);
        if(isNaN(parseInt(value[2]))) return;
        message.mentions.roles.map(r => {
            if(!roleBase.find({id: r.id}).value()){
                roleBase.push({id: r.id, name: r.name, price: parseInt(value[2])}).write();
            } else {
                message.reply('Ce rôle existe déjà dans la boutique, il va être modifié');
                roleBase.push({id: r.id, name: r.name, price: parseInt(value[2])}).write();
            }
        });
    }
}
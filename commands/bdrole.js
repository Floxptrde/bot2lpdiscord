module.exports = {
    name: "bdrole",
    description: "Commande réservée, ajoute ou modifie un rôle à la boutique __!bdrole @rôle valeur__",

    execute(message, client, coin, roleBase) {
        if (!message.member.permissions.has('MANAGE_GUILD')) return;
        const value = message.content.split(/ +/);
        if(isNaN(parseInt(value[2]))) return;
        if(isNaN(parseInt(value[3]))) return;
        message.mentions.roles.map(r => {
            if(!roleBase.find({id: r.id}).value()){
                roleBase.push({id: r.id, name: r.name, price: parseInt(value[2]), level: parseInt(value[2])}).write();
            } else {
                roleBase.find({id: r.id}).assign({id: r.id, name: r.name, price: parseInt(value[2]), level: parseInt(value[3])}).write(); 
                message.reply('Ce rôle existe déjà dans la boutique, il va être modifié');
            }
        });
    }
}
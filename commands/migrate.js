module.exports = {
    name: "migrate",
    description: "Commande réservée, permet de récupérer les données du bot __!migrate__",
    execute(message, client, coin, roleBase, MessageEmbed, ChanWelcome, ChanRegles, ChanBot){
        if (!message.member.permissions.has('MANAGE_GUILD')) return;
        let StringCoin = '';
        for(const n of coin){
            StringCoin = StringCoin+`\n{\nid: "${n.id}",\ncoins: ${n.coins}\n},`;
        }

        let StringRoles = '';
        for(const n of roleBase){
            StringCoin = StringCoin+`\n{\nid: "${n.id}",\nname: "${n.name}"\nprice: ${n.price}\nlevel: ${n.level}\n},`;
        }

        client.channels.cache.get(`${ChanBot}`).send(StringCoin);
        client.channels.cache.get(`${ChanBot}`).send(StringRoles);
    }
}
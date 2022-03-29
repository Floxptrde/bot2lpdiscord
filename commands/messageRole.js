module.exports = {
    name :"1role",
    description: "Commande réservée, envoie le message d'accueil __!role__",
    execute(message, client, coin, roleBase, MessageEmbed, ChanWelcome, ChanRegles){
        if (!message.member.permissions.has('MANAGE_GUILD')) return;
        client.channels.cache.get(ChanRegles).send(`
        Discord officiel de l'équipe 2LP

Vous y trouverez :
✅ Trading
     👉 Métaux précieux
✅ Investissements
     👉 Crypto-monnaies
     👉 Actions
     👉 Différentes plateformes que nous jugeons intéressantes
Et bien plus encore 🔥

Les règles à respecter :
1️⃣ Aucun propos insultants, discriminatoires ou nuisant à autrui
2️⃣ Ni vendre, ni partager les informations qui sont sur ce serveur
3️⃣ Ne pas partager le lien de ce serveur à des personnes qui veulent nuire à cette communauté

Aucune obligation de suivre nos placements : nous ne sommes ni traders ou investisseurs professionnels, ni conseillers financiers. Vous êtes responsables de vos choix, gains et pertes. Ce serveur témoigne uniquement de nos placements et de notre évolution. Vous ne pouvez vous retournez ou accabler les membres de cette communauté pour vos pertes car elles relèvent de vos propres choix. Nous ne nous tenons pas responsables de vos actions

Tout non-respect de ces règles = expulsion ou bannissement

En cliquant sur la première réaction vous reconnaissez accepter tous les points précédemment énoncés et vous accéderez à l'ensemble du serveur

Que préférez-vous :
💰 : Trading
💎 : Cryptos
📊 : Actions
🤗 : Toute autre plateforme d'investissements

Quelques infos :
👉 Plus vous discutez, plus vous montez en niveau et obtenez un rôle gratifiant. Montrez aux autres que vous êtes un expert en passant les niveaux 💪
👉 Les infos importantes et/ou les vidéos de présentation de projets sont à retrouver dans les salons tips🔧 de chaque catégorie.
👉 Sur ce message vous pouvez ajouter ou enlever un domaine à tout moment 😉

Nous espérons que ce serveur vous apportera beaucoup financièrement ou en termes de connaissances. Contactez-nous si vous avez le moindre souci ou des suggestions 😉

Notre ambition est de rendre un maximum de personne libres financièrement. Si c’est votre but, bienvenue sur ce serveur 😎 

_Avant de choisir vos rôles vos devez accepter les termes de ce message en cliquant sur la réaction 2LP_
        `)
    }
};
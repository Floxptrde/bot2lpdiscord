module.exports = {
    name : "avataruser",
    description : "renvoie l'avatar d'un membre __!avataruser @membre__",
    execute(message, client, coin, roleBase, MessageEmbed){
        const avatarList = message.mentions.users.map(user => {
            const exampleEmbed = new MessageEmbed()
                .setColor('#ffde59')
                .setTitle('Profil')
                //.setDescription('')
                .setThumbnail(user.displayAvatarURL({format:'png'}))
                .addFields(
                    { name: 'Nom', value: `${user}` },
                )
                .setTimestamp();

            message.reply({ embeds: [exampleEmbed] });
            });
    }
}
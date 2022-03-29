module.exports = {
    name : 'avatar',
    description : 'renvoie mon avatar __!avatar__',
    execute(message, client, coin, roleBase, MessageEmbed){
        const exampleEmbed = new MessageEmbed()
            .setColor('#ffde59')
            .setTitle('Profil')
            //.setDescription('')
            .setThumbnail(message.author.displayAvatarURL({format:'png'}))
            .addFields(
                { name: 'Nom', value: `${message.author}` },
            )
            .setTimestamp();

        message.reply({ embeds: [exampleEmbed] });
    }
};

module.exports = {
    name : "info",
    description : "Page d'informations sur les commandes __!info__",
    execute(message, client, coin, roleBase, MessageEmbed) {
        const exampleEmbed = new MessageEmbed()
            .setColor('#ffde59')
            .setTitle('Page d\'infos')
            //.setURL('https://discord.js.org/')
            //.setAuthor({ name: client.user.name, iconURL: client.user.displayAvatarURL({format:'png'}) })
            .setDescription('Retrouvez toutes les commandes du bot ici')
            //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'prefix', value: '!' },
            );
            for(const cmd of client.commands) {
                exampleEmbed.addFields(
                    { name: `👉**${cmd[1].name}**`, value: ` ${cmd[1].description}` },
                );
            }
        exampleEmbed
            .setTimestamp()
            //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        message.reply({ embeds: [exampleEmbed] });
    } 
};
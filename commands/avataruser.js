module.exports = {
    name : "avataruser",
    description : "renvoie l'avatar d'un membre __!avataruser @membre__",
    execute(message){
        const avatarList = message.mentions.users.map(user => {
            return message.channel.send(`l'avatar de l'utilisateur ${user} est : ${user.displayAvatarURL({format:'png'})}`)
        })
    }
}
module.exports = {
    name : 'avatar',
    description : 'renvoie mon avatar __!avatar__',
    execute(message){
        message.channel.send(message.author.displayAvatarURL({format:'png'}));
    }
};

const fs = require('fs');
// Import the discord.js module
const Discord = require('discord.js');
const { Client, Intents, MessageAttachment, MessageEmbed } = require('discord.js');
const Canvas = require('canvas');
// Create an instance of a Discord client
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"] });
// Commandes
client.commands = new Discord.Collection();
const commandfiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
// Imports
const {prefix, token, ChanWelcome, ChanRegles} = require('./config.json');
const { randomInt } = require('crypto');
// Lowdb
const low = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync');
const dbdb = new FileSync('dbmember.json');
const dbdb2 = new FileSync('dbrole.json');
const dbdb3 = new FileSync('dbphrases.json');
// BD Lowdb
const dbmember = low(dbdb);
const dbrole = low(dbdb2);
const dbphrase = low(dbdb3);
dbmember.defaults({Infos_membres: []}).write();
dbrole.defaults({Roles_Boutique: []}).write();
dbphrase.defaults({Phrases: []}).write();

// Initialisation du bot
client.once('ready', async () => {
    if(!dbmember.get("Infos_membres").find({id: client.user.id}).value()){
        dbmember.get("Infos_membres").push({id: client.user.id, coins: 330}).write();
    } 
    console.log('I am ready!');
});

for(const file of commandfiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Gestion des commandes 
client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;

    try {
        let coin = dbmember.get('Infos_membres');
        let roleBase = dbrole.get('Roles_Boutique');
        client.commands.get(command).execute(message, client, coin, roleBase, MessageEmbed, ChanWelcome, ChanRegles);
    } catch (error) {
        console.error(error);
        message.reply("une erreur s'est produite");
    }
});

client.on('message', async message => {
    if(message.author.bot && message.channelId == `${ChanWelcome}`) {
        message.react('821074887191953439');
    } else if (message.author.bot && message.channelId == `${ChanRegles}`) {
        message.react('821074887191953439');
        message.react('💰');
        message.react('💎');
        message.react('📊');
        message.react('🤗');
    }
});

client.on('message', async message => {
    try {
        if(message.author.bot) return;
        let msgAuthorId = message.author.id;
        if(!dbmember.get("Infos_membres").find({id: msgAuthorId}).value()){
            dbmember.get("Infos_membres").push({id: msgAuthorId, coins: 1}).write();
        } else {
            let memberCoinsDb = dbmember.get('Infos_membres').filter({id: msgAuthorId}).find('coins').value();
            let memberCoins = Object.values(memberCoinsDb);
            let coinsWin = randomInt(4) +1;
            dbmember.get('Infos_membres').find({id: msgAuthorId}).assign({id: msgAuthorId, coins: memberCoins[1] += coinsWin}).write();
        }

    } catch (error) {
        console.error(error);
    }
});

client.on('messageReactionAdd', async (reaction, user) => {
    try {
        if(!reaction.message.author.bot) return;
        if(!reaction.message.channel.id === '798979843864657920') return;

        var member = reaction.message.guild.members.cache.find(member => member.id === user.id);

        if (reaction.emoji.id === '821074887191953439') {
            member.roles.add('798981339750596638');
            console.log('role ajouté');
        }else if (reaction.emoji.name == '💰' && member.roles.cache.has('798981339750596638')) {
            member.roles.add('949015450648473630');
            console.log('role ajouté');
        } else if (reaction.emoji.name == '💎' && member.roles.cache.has('798981339750596638')) {
            member.roles.add('949015613785899109');
            console.log('role ajouté');
        }   else if (reaction.emoji.name == '📊' && member.roles.cache.has('798981339750596638')) {
            member.roles.add('949015689027522650');
            console.log('role ajouté');
        }   else if (reaction.emoji.name == '🤗' && member.roles.cache.has('798981339750596638')) {
            member.roles.add('948999390582956103');
            console.log('role ajouté');
        }   
    } catch (error) {
        console.error(error);
    }
});

client.on('messageReactionRemove', async (reaction, user) => {
    try {
        if(!reaction.message.channel.id === '798979843864657920') return;
        var member = reaction.message.guild.members.cache.find(member => member.id === user.id);

        if (reaction.emoji.id === '821074887191953439') {
            member.roles.remove('798981339750596638');
            member.roles.remove('949015450648473630'); 
            member.roles.remove('949015613785899109');
            member.roles.remove('949015689027522650');
            member.roles.remove('948999390582956103');
        } else if (reaction.emoji.name == '💰') {
            member.roles.remove('949015450648473630'); 
        } else if (reaction.emoji.name == '💎') {
            member.roles.remove('949015613785899109');
        }   else if (reaction.emoji.name == '📊') {
            member.roles.remove('949015689027522650');
        }   else if (reaction.emoji.name == '🤗') {
            member.roles.remove('948999390582956103');
        }   
    } catch (error) {
        console.error(error);
    }
});

client.on('guildMemberAdd', async member => {
    try { 
        let msg = randomInt(5);
        const canvas = Canvas.createCanvas(923, 518);
		const context = canvas.getContext('2d');

		const background = await Canvas.loadImage('./ImageDAccueil.jpg');
		context.drawImage(background, 0, 0, canvas.width, canvas.height);

		context.strokeStyle = '#FFFFFF';
		context.strokeRect(0, 0, canvas.width, canvas.height);

		context.font = "50px sans-serif";
		context.fillStyle = '#FFFFFF';
		context.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.4);
     
        context.font = "35px sans-serif";
		context.fillStyle = '#FFFFFF';
		context.fillText(`\n${Object.values(dbphrase.get("Phrases").find('phrase').value())[msg]}`, 50, canvas.height / 1.3);
		
        context.beginPath();
		context.arc(458, 150, 125, 0, Math.PI * 2, true); 
        context.stroke();
		context.closePath();
		context.clip();

		const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
		context.drawImage(avatar, 335, 25, 250, 250);

		const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');

        client.channels.cache.get(`${ChanWelcome}`).send({ files: [attachment] });
    } catch (error) {
        console.error(error);
    }
});

client.login(process.env.TOKEN);
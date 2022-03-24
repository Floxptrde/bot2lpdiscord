const fs = require('fs');
// Import the discord.js module
const Discord = require('discord.js');
// Create an instance of a Discord client
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"] });
client.commands = new Discord.Collection();
const commandfiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const {prefix, token} = require('./config.json');
const { randomInt } = require('crypto');
// Lowdb
const low = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync');
const dbdb = new FileSync('db.json');
// BD Infos Membres
const db = low(dbdb);
db.defaults({Infos_membres: []}).write();
// BD Roles Boutique
const dbroles = low(dbdb);
dbroles.defaults({Roles_Boutique: []}).write();

// Initialisation du bot
client.once('ready', () => {
  console.log('I am ready!');
  //client.guilds.cache.find(guild => guild.id === '791198800327999490').channels.cache.find(channel => channel.id === '954014351205998612').message.fetch('954332574593994752');
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
        let coin = db.get('Infos_membres');
        let roleBase = db.get('Roles_Boutique');
        client.commands.get(command).execute(message, client, coin, roleBase);
    } catch (error) {
        console.error(error);
        message.reply("une erreur s'est produite");
    }
});

client.on('message', async message => {
    if(message.author.bot && message.channelId == '791198800327999493') {
        message.react('821074887191953439');
    } else if (message.author.bot && message.channelId == '798979843864657920') {
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
        if(!db.get("Infos_membres").find({id: msgAuthorId}).value()){
            db.get("Infos_membres").push({id: msgAuthorId, coins: 1}).write();
        } else {
            let memberCoinsDb = db.get('Infos_membres').filter({id: msgAuthorId}).find('coins').value();
            let memberCoins = Object.values(memberCoinsDb);
            let coinsWin = randomInt(4) +1;
            db.get('Infos_membres').find({id: msgAuthorId}).assign({id: msgAuthorId, coins: memberCoins[1] += coinsWin}).write();
        }

    } catch (error) {
        console.error(error);
    }
});

client.on('messageReactionAdd', async (reaction, user) => {
    try {
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

client.on('guildMemberAdd', member => {
    try { 
        var msg = randomInt(5); messages=["Toi aussi t'en a marre du livret A", "Es-tu plutôt or physique ou numérique?", "Bienvenue sur le chemin de la richesse", "On voit que tu aimes les gros pourcentage", "Trading/crypto/actions, tu vas te régaler ici"];
        client.channels.cache.get('791198800327999493').send(`Welcome **${member.user.username}**\n${member.user.displayAvatarURL({format:'png'})}\n${messages[msg]}`); 
    } catch (error) {
        console.error(error);
    }
});


client.login(process.env.TOKEN);
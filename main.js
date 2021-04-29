const Discord = require('discord.js');

const client = new Discord.Client();

require('dotenv').config();

const prefix = process.env.PREFIX;

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('!KillaWrld is online!');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'ping'){
       client.commands.get('ping').execute(message, args);
    } 
    else if(command === 'roast'){
        client.commands.get('roast').execute(message, args);
    }
    else if(command === 'random'){
        client.commands.get('random').execute(message, args);
    }
    else if(command === 'spotify'){
        client.commands.get('spotify').execute(message, args);
    }
    else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }
    else if(command === 'rjuice'){
        client.commands.get('rjuice').execute(message, args);
    }

    if(message.member.roles.cache.some(r => r.name === "Head Admin")){
        
        if(command === 'ahelp'){
            client.commands.get('ahelp').execute(message, args);
        }
        else if (command === 'kick'){
            client.commands.get('kick').execute(message, args);
        }
        else if (command === 'ban'){
            client.commands.get('ban').execute(message, args);
        }
        else if (command === 'clear'){
            client.commands.get('clear').execute(message, args);
        }
        else if (command === 'mute'){
            client.commands.get('mute').execute(message, args);
        }
        else if (command === 'unmute'){
            client.commands.get('unmute').execute(message, args);
        }
    }
});
client.on('message', message =>{
    const word = message.content.toLowerCase();
if(word === "hi"){
    message.reply("hello!");
}
else if(word.startsWith('https://discord.gg')){
    message.channel.bulkDelete(1);
    message.reply("No posting invites in the server!");
}
else if(word.startsWith('discord.gg/')){
    message.channel.bulkDelete(1);
    message.reply("No posting invites in the server!");
}
else if(word === 'omg'){
    message.reply("Who the hell even uses omg still.");
}
else if(word === 'lucid'){
    message.reply("You most likely sped for saying that.");
}
else if(word === 'lgbtq+'){
    message.reply("Oh so you are retarded Lmao.")
}
else if(word === 'sheesh'){
    message.reply("Sheeeeeeeeesh!")
}
else if(word.startsWith('😭')){
    message.reply("Bruh grow tf up.")
}



});
client.login(process.env.DISCORD_TOKEN);
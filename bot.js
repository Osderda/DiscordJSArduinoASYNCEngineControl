const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.MessageContent], shards: "auto", partials: [Partials.Message, Partials.Channel, Partials.GuildMember, Partials.Reaction, Partials.GuildScheduledEvent, Partials.User, Partials.ThreadMember]});
const config = require("./src/config.js");
const { readdirSync } = require("fs")
const moment = require("moment");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { EmbedBuilder } = require('discord.js');
let token = config.token

client.commands = new Collection()

const rest = new REST({ version: '10' }).setToken(token);

const log = l => { console.log(`[${moment().format("DD-MM-YYYY HH:mm:ss")}] ${l}`) };

//command-handler
const fs = require('fs');
const commands = [];
fs.readdir('./src/commands/', (err, files) => { //
    if (err) console.error(err); //
    console.log(`-------------------------`);
    console.log(`     Toplam ${files.length} Komut Yükleme Başlatılıyor..  `);
    console.log(`-------------------------`);
    files.forEach(f => { //
        const command = require(`./src/commands/${f}`);
          commands.push(command.data.toJSON());
           client.commands.set(command.data.name, command);
        
           console.log(`[command] ${command.data.name} Yüklendi.`);
    });
    console.log(`-------------------------`);
    console.log(`     Toplam ${commands.length} Komut Yüklendi  `);
    console.log(`-------------------------`);
    console.log(`>>> Uygulama Başlatılıyor...`);
});
// readdirSync('./src/commands').forEach(async file => {

//   const command = require(`./src/commands/${file}`);
//   commands.push(command.data.toJSON());
//   client.commands.set(command.data.name, command);

//   console.log(`[command] ${command.data.name} Yüklendi.`);

// })

client.on("ready", async () => {
        try {
            await rest.put(
                Routes.applicationCommands(client.user.id),
                { body: commands },
            );
            log(`Bot Başarıyla Başlatıldı.`);
        } catch (error) {
            console.error(error);
        }
})

//event-handler
readdirSync('./src/events').forEach(async file => {
	const event = require(`./src/events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
})

//nodejs-events
process.on("unhandledRejection", e => { 
   console.log(e)
 }) 
process.on("uncaughtException", e => { 
   console.log(e)       
 })  
process.on("uncaughtExceptionMonitor", e => { 
   console.log(e)
 })
//
const board = require("./board").run();

client.login(token)

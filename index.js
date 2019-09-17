const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
const { RichEmbed } = require('discord.js');

client.on("message", async (message) => {

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "asl") {
    let age = args[0]; // Arrays are 0-based.
    let sex = args[1];
    let location = args[2];
    message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
};

if (command === "ping") {
//  let m = message.channel.send("Getting ping...");
//   .then( msg => msg.delete())
  setTimeout(function() {

  let embed = new RichEmbed()

  embed.setAuthor('ByeByeBot\'s Ping')
  embed.setDescription(new Date().getTime() - message.createdTimestamp + " ms")
  embed.setColor(15572469);

  message.delete()
//  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
//  .catch(console.error);
  message.channel.send(embed);

});

 if (command === "deleterole") {
   let role = args[0];
   let delRole = message.guild.roles.find(role => role.name === `${role}`);
   message.channel.send(`You wish to delete ${role}`);
 }
};



});

//client.on('message', message => {
//    if (message.content.startsWith(`${prefix} Favorite Color`)) {
//        const embed = new RichEmbed()
//        .setAuthor('Baby Rio\'s Favorite Color :)')
//        .setDescription('Light Coral (Red)\nHex Code: #F08080')
//        .setColor(0xF08080)

//        message.channel.send({embed});
//    }
//});


const presence_list = [
    "with Discord.js",
    "Minecraft",
    "on Songoda",
    "support tickets",
    "spacella.xyz",
    ];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (presence_list.length - 1) + 1);
        client.user.setActivity(presence_list[index]);
    }, 20000);
});




//client.on("message", async message => {
//      if (message.content.startsWith(`${prefix}ping`)) {
//        let msg = await message.channel.send("Getting ping..");
//        setTimeout(function() {
//        msg.edit(new Date().getTime() - message.createdTimestamp + " ms")
//      }, 1000);
//    }
//});


client.on("ready", () => {
    console.log(`==========================
Bot Loaded: ${client.user.tag}
Support:
Bot Version: 0.1
Servers: ${client.guilds.size}
Users Using Bot: ${client.users.size}
Library: Discord.js
==========================`);
});

client.login(config.token);

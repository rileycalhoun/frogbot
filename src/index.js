const { Client, Events, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

let token = process.env.TOKEN;
let guild_id = process.env.GUILD_ID;
let channel_id = process.env.CHANNEL_ID;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ],
});


client.on(Events.ClientReady, async (client) => {

  let guild = client.guilds.cache.get(guild_id);
  if (guild == undefined) {
    console.error(`Could not find guild with id ${guild_id}`)
    process.exit(1);
  }

  let channel = guild.channels.cache.get(channel_id);
  if (channel == undefined) {
    console.error(`Could not find channel with id ${channel_id} in ${guild.name}`)
    process.exit(1);
  }

  if (!channel.isSendable()) {
    console.error(`Channel ${channel.name} is not a sendable channel!`)
    process.exit(1);
  }

  let day = new Date().getDay();

  await channel.send({
    files: [
      `./images/${day}.png`
    ]
  });

  process.exit(0);
});

client.login(token);

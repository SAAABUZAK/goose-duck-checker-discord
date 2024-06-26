import { Client } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const { DISCORD_TOKEN } = process.env;

const client = new Client({
  intents: ['Guilds', 'GuildMessages'],
});

client.once('ready', () => {
  console.log('hello world');
});

client.login(DISCORD_TOKEN);

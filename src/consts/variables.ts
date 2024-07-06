import dotenv from 'dotenv';
dotenv.config();

const { DISCORD_CLIENT_ID = '', DISCORD_TOKEN = '' } = process.env;

export { DISCORD_CLIENT_ID, DISCORD_TOKEN };

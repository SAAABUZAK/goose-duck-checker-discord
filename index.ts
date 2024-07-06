import { DISCORD_TOKEN } from 'src/consts/variables';
import DiscordClient from 'src/discord-client';

const discordClient = DiscordClient.getInstance();
discordClient.start(DISCORD_TOKEN);

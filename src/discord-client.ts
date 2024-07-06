import { Client, GatewayIntentBits } from 'discord.js';

class DiscordClient {
  private static instance: DiscordClient;
  private initialized = false;

  private constructor() {
    this.initialized = true;
  }

  public static getInstance(): DiscordClient {
    if (!DiscordClient.instance) {
      DiscordClient.instance = new DiscordClient();
    }
    return DiscordClient.instance;
  }

  public start(token: string): void {
    if (!this.initialized) {
      throw new Error('Discord client has not been initialized');
    }

    const client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.MessageContent,
      ],
    });

    client
      .login(token)
      .then(() => {
        console.log(`client login success`);
      })
      .catch((err) => {
        console.error(`Failed to client login: ${err.message}`);
      });
  }
}

export default DiscordClient;

import dotdev from 'dotenv';
import { App, LogLevel } from '@slack/bolt';

dotdev.config();
const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
    logLevel: LogLevel.DEBUG
});

(async () => {
    // Start the app
    await app.start(Number(process.env.PORT) || 3000);

    console.log('⚡️ Bolt app is running!');
})();

// Listen for slash commands
app.command('/hummingroster', async ({ command, ack, say }) => {
    await ack();
    console.log(command);
    await say(`${command.text}`);
});

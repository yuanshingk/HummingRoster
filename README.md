# HummingRoster

[Slack link to HummingRoster app](https://api.slack.com/apps/A025CFNFPM5/general)

## Local Setup

1. Use ngrok to host a public accessible endpoint.
    ```
    $ ngrok http 3001
    ```
2. Edit Slack app to link the slash commands to your ngrok endpoint, E.g. `https://024cd09f31ac.ngrok.io/slack/events`.

3. Start up your node application.
    ```
    $ npm install
    $ npm run start
    ```
4. Add HummingRoster app to you Slack workspace and channel.
5. Try out the commands. E.g. `/hummingRoster list`

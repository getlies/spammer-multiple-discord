const config = require("../setup/config.js");
const say = require("./commands/say.js"); 
const spamControl = require("./utils/spamControl");

function handleCommands(client, clients) {
    const { prefix, jockieIds } = config;

    spamControl.initWebhook();

    client.on('messageCreate', message => {
        const isAllowed = jockieIds && jockieIds.includes(message.author.id);

        if (message.content.startsWith(`${prefix}say `)) {
            const args = message.content.split(' ').slice(1);
            say.execute(client, message, args); 
        }

        spamControl.handleCommand(client, message);
    });
}

module.exports = handleCommands;

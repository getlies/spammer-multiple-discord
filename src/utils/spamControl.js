const { MessageEmbed, WebhookClient } = require('discord.js-selfbot-v13');
const config = require('../../setup/config.js');

let isSpamming = true;
let webhookClient = null;

function initWebhook() {
    if (!webhookClient && config.AutoSpammer.webhookEnabled && config.AutoSpammer.webhookUrl) {
        webhookClient = new WebhookClient({ url: config.AutoSpammer.webhookUrl });
    }
}

function sendWebhook(user, channelId, info) {
    if (!webhookClient) return;
    if (!config.AutoSpammer.webhookEnabled) return;

    const description = 
        `𝚄𝚜𝚎𝚛 : ${user.username}\n` +
        `𝚁𝚘𝚘𝚖 : <#${config.AutoSpammer.spamchannelId}>\n` +
        `𝙸𝚗𝚏𝚘 : ${info}\n` +
        `𝚃𝚒𝚖𝚎 : ${new Date().toLocaleString()}`;

    const embed = new MessageEmbed()
        .setColor('#0000FF')
        .setDescription(description)
        .setThumbnail(user.displayAvatarURL());
//        .setImage(user.displayAvatarURL());

    webhookClient.send({ embeds: [embed] }).catch(console.error);
}

async function handleCommand(client, message) {
    const prefix = config.prefix;
    if (!message.content.startsWith(prefix)) return;

    const allowedUsers = config.allowedUsers || [];
    if (!allowedUsers.includes(message.author.id) && message.author.id !== client.user.id) {
        return;
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'stop') {
        isSpamming = false;
        sendWebhook(message.author, message.channel.id, 'Stop');
    } else if (command === 'resume') {
        isSpamming = true;
        sendWebhook(message.author, message.channel.id, 'Resume');
    }
}

function getIsSpamming() {
    return isSpamming;
}

module.exports = {
    initWebhook,
    handleCommand,
    getIsSpamming
};

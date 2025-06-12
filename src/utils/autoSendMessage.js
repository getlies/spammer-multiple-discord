const config = require('../../setup/config.js');
const spamControl = require('./spamControl');

let intervalId;

function startAutoSendMessage(client) {
    if (config.AutoSpammer.levelingspamSet) {
        intervalId = setInterval(() => {
            if (!spamControl.getIsSpamming()) {
                return;
            }
            const channel = client.channels.cache.get(config.AutoSpammer.spamchannelId);

            if (channel) {
                channel.send(config.AutoSpammer.spamContent).then(message => {
                    if (config.AutoSpammer.autoDeleteSpam) {
                        // Delete the message after the specified interval
                        setTimeout(() => {
                            message.delete().catch(console.error);
                        }, config.AutoSpammer.deleteInterval);
                    }
                }).catch(error => {
                    console.error("Gagal mengirim pesan:", error);
                });
            } else {
                console.error(`Channel dengan ID ${config.AutoSpammer.spamchannelId} tidak ditemukan.`);
            }
        }, config.AutoSpammer.spamInterval);
    }
}

function stopAutoSendMessage() {
    clearInterval(intervalId);
}

module.exports = {
    startAutoSendMessage,
    stopAutoSendMessage
};

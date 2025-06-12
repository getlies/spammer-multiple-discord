const config = {
  prefix: "=",
  allowedUsers: [
    "353639776609632256",
    "AllowedUsers99"
  ],
  AutoSpammer: {
    levelingspamSet: true,
    spamchannelId: "channelid",
    spamContent: "_ _",
    spamInterval: 5000,
    autoDeleteSpam: false,
    deleteInterval: 100,
    webhookEnabled: false,
    webhookUrl: "yourwebhookurl"
  }
};

module.exports = config;
# Spammer Discord Multiple 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  <!-- Badge for license -->

## Description
This project is an auto spammer for Discord, allowing users to automatically send messages and control the spammer through commands. Key features include:

- **Auto Spammer**: Automatically send predefined messages at specified intervals.
- **Command Control**: Control the spammer using commands with a prefix.
- **Auto Wakeup**: Wake up and respond to specific triggers or commands.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)  <!-- Badge for version -->

## Cloning the Repository
To clone this repository, run the following command:
```
git clone https://github.com/getlies/spammer-multiple-discord
```

## Installation
To install the project, run:
```
npm install
```

## Usage
To use the project, execute:
```
node index.js
```

### Configuration
Here is the configuration object from `setup/config.js` that you can customize:

```javascript
const config = {
  prefix: "=",                           // Command prefix
  allowedUsers: [
    "AllowedUsers01",                   // Your Discord user ID 
    "AllowedUsers99"                     // Additional user IDs
  ],
  AutoSpammer: {
    levelingspamSet: true,               // Enable or disable leveling spam
    spamchannelId: "channelid",         // ID of the spam channel
    spamContent: "_ _",                  // Content for spam messages 
    spamInterval: 5000,                  // Interval for sending spam messages (in milliseconds)
    autoDeleteSpam: false,               // Enable or disable auto deletion of spam messages
    deleteInterval: 100,                 // Interval for deleting spam messages (in milliseconds)
    webhookEnabled: false,               // Enable or disable webhook notifications
    webhookUrl: "yourwebhookurl"        // Webhook URL for notifications
  }
};
module.exports = config;
```

## Commands
The following commands are available to control the auto spammer. Use the configured prefix before each command.

- **stop**: Stops the auto spammer from sending messages.
  - Usage: `<prefix>stop`
- **resume**: Resumes the auto spammer to start sending messages again.
  - Usage: `<prefix>resume`
- **say**: Sends a message to the current channel.
  - Usage: `<prefix>say <message>`

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Note
**Please be aware that disabling your account is done at your own risk. This project is shared solely for educational purposes, and I do not take responsibility for any consequences that may arise from its use.**

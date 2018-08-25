const { Client } = require('discord.js')

var client = new Client()

client.on('ready', () => {
    console.log(`Eingeloggt als: ${client.user.tag}`)
})

client.login('NDgyODY5MDUxNzk0NjUzMTk1.DmLRWA.KvedLlx93KpKOxDjDl8c7bqRffw')
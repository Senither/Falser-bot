import Discord from 'discord.js-light'
const client = new Discord.Client()

const generateReply = () => {
  let randomNumber = Math.floor(Math.random() * 1000)

  if (randomNumber == 0) {
    return 'True!'
  } else if (randomNumber < 10) {
    return 'Maybe?'
  } else {
    return 'False!'
  }
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)

  client.user.setPresence({
    status: 'online',
    activity: {
      name: '@falser',
      type: 'WATCHING',
    },
  })
})

client.on('message', (message) => {
  if (message.mentions.users.has(client.user.id)) {
    message.reply(generateReply())
  }
})

client.login(process.argv.pop())

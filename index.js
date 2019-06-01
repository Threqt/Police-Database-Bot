const config = require("./config");
const Discord = require("discord.js");
const bot = new Discord.Client({
  disableEverybody: true
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} has been deployed.`)
  bot.user.setActivity("The Prison | !cmds or !commands | Made by Threqt#4377", {
    type: "WATCHING"
  });
})

bot.on(`guildMemberAdd`, member => {
  console.log(`User ` + member.user.username + ` has left HBC and join HGC`)
  var role = member.guild.roles.find('name', 'Awaiting Tryout')
  member.addRole(role)
});

//Asyncs
async function patrolLog(bot, message) {
  message.reply("please check DM's.")
  message.author.send("Alright, let's start the logging process. Enter your roblox username. Use cancel to cancel.")
  const filter = m => m.author.id === message.author.id
  const dmchannel = await message.author.createDM();
  let collected = await dmchannel.awaitMessages(filter, {
    max: 1,
    time: 1200000,
    errors: ['time']
  })
  if (collected.first().content.toLowerCase() === "cancel") {
    return message.author.send("Cancelled.")
  }
  const rblxname = collected.first().content
  message.author.send("Great. Now enter your division rank in CG. Example: Sergeant Major. Use cancel to cancel.")
  const collected2 = await dmchannel.awaitMessages(filter, {
    max: 1,
    time: 1200000,
    errors: ['time']
  })
  if (collected2.first().content.toLowerCase() === "cancel") {
    return message.author.send("Cancelled.")
  }
  const rank = collected2.first().content
  message.author.send("Enter the time you started your tour of duty. Example: 10:00 AM. Use cancel to cancel.")
  const collected3 = await dmchannel.awaitMessages(filter, {
    max: 1,
    time: 1200000,
    errors: ['time']
  })
  if (collected3.first().content.toLowerCase() === "cancel") {
    return message.author.send("Cancelled.")
  }
  const startime = collected3.first().content
  message.author.send("Enter the time you ended your tour of duty. Example: 8:00 PM. Use cancel to cancel.")
  const collected4 = await dmchannel.awaitMessages(filter, {
    max: 1,
    time: 1200000,
    errors: ['time']
  })
  if (collected4.first().content.toLowerCase() === "cancel") {
    return message.author.send("Cancelled.")
  }
  const endtime = collected4.first().content
  message.author.send("Send a link of the proof. It must be valid. Use cancel to cancel.")
  const collected5 = await dmchannel.awaitMessages(filter, {
    max: 1,
    time: 1200000,
    errors: ['time']
  })
  if (collected5.first().content.toLowerCase() === "cancel") {
    return message.author.send("Cancelled.")
  }
  const proof = collected5.first().content
  message.author.send("All done!")
  const patrolEmbed = new Discord.RichEmbed()
    .setColor("#832B29")
    .setAuthor(`Coruscant Guard Bot`, bot.user.avatarURL)
    .setThumbnail(bot.user.avatarURL)
    .setTitle("PATROL LOG")
    .setDescription(`**Name:** ${rblxname} \n **Rank:** ${rank} \n **Patrol Start Time:** ${startime} \n **Patrol End Time:** ${endtime} \n **Proof:** ${proof}`)
    .setFooter("Prefix: ! | This bot is still in it's early phases", bot.user.avatarURL)
    .setTimestamp();
  let channel = message.guild.channels.find(`name`, `patrol-logs`)
  channel.send(patrolEmbed)
}

async function logInactivity(bot, message) {
  message.reply("please check DM's.")
  message.author.send("Alright, let's start the inactivity notice process. Enter your roblox username. Use cancel to cancel.")
  const filter = m => m.author.id === message.author.id
  const dmchannel = await message.author.createDM();
  let collected = await dmchannel.awaitMessages(filter, {
    max: 1,
    time: 1200000,
    errors: ['time']
  })
  if (collected.first().content.toLowerCase() === "cancel") {
    return message.author.send("Cancelled.")
  }
  const rblxname = collected.first().content
  message.author.send("Great. Now enter the duration of your inactivity. Use cancel to cancel.")
  const collected2 = await dmchannel.awaitMessages(filter, {
    max: 1,
    time: 1200000,
    errors: ['time']
  })
  if (collected2.first().content.toLowerCase() === "cancel") {
    return message.author.send("Cancelled.")
  }
  const rank = collected2.first().content
  message.author.send("Enter the reason of your inactivity. Use cancel to cancel.")
  const collected3 = await dmchannel.awaitMessages(filter, {
    max: 1,
    time: 1200000,
    errors: ['time']
  })
  if (collected3.first().content.toLowerCase() === "cancel") {
    return message.author.send("Cancelled.")
  }
  const startime = collected3.first().content
  message.author.send("Enter a note if you have any. Use cancel to cancel or skip if you have no note.")
  const collected4 = await dmchannel.awaitMessages(filter, {
    max: 1,
    time: 1200000,
    errors: ['time']
  })
  if (collected4.first().content.toLowerCase() === "cancel") {
    return message.author.send("Cancelled.")
  }
  if (collected4.first().content.toLowerCase() === "skip") {
    message.author.send("All done!")
    const patrolEmbed = new Discord.RichEmbed()
      .setColor("#832B29")
      .setAuthor(`Coruscant Guard Bot`, bot.user.avatarURL)
      .setThumbnail(bot.user.avatarURL)
      .setTitle("INACTIVITY NOTICE")
      .setDescription(`**Name:** ${rblxname} \n **Duration:** ${rank} \n **Reason:** ${startime}`)
      .setFooter("Prefix: ! | This bot is still in it's early phases", bot.user.avatarURL)
      .setTimestamp();
    let channel = message.guild.channels.find(`name`, `inactivity-notices`)
    return channel.send(patrolEmbed)
  } else {
    const endtime = collected4.first().content
    message.author.send("All done!")
    const patrolEmbed = new Discord.RichEmbed()
      .setColor("#832B29")
      .setAuthor(`Coruscant Guard Bot`, bot.user.avatarURL)
      .setThumbnail(bot.user.avatarURL)
      .setTitle("INACTIVITY NOTICE")
      .setDescription(`**Name:** ${rblxname} \n **Duration:** ${rank} \n **Reason:** ${startime} \n **Note:** ${endtime}`)
      .setFooter("Prefix: ! | This bot is still in it's early phases", bot.user.avatarURL)
      .setTimestamp();
    let channel = message.guild.channels.find(`name`, `inactivity-notices`)
    return channel.send(patrolEmbed)
  }
}

async function getUser(bot, message, rbx, user) {
  let nig = await rbx.getIdFromUsername(user).catch(function(error) {
    if (error.reason = "User not found") {
      return message.channel.send("Invalid User")
    }
  })
  return nig
}

async function createRandomSentence(bot, message, rbx) {
  var words = ['cat', 'dog', 'shark', 'skunk', 'weasel', 'disc', 'me']
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  function selectWords() {
    w1 = words[getRandomInt(7)]
    w2 = words[getRandomInt(7)]
    w3 = words[getRandomInt(7)]
    w4 = words[getRandomInt(7)]
    w5 = words[getRandomInt(7)]
    w6 = words[getRandomInt(7)]
    w7 = words[getRandomInt(7)]
    w8 = words[getRandomInt(7)]
    w9 = words[getRandomInt(7)]
    w10 = words[getRandomInt(7)]
   let string = `${w1} ${w2} ${w3} ${w4} ${w5} ${w6} ${w7} ${w8} ${w9} ${w10}`
   return string
  }
  return selectWords()
}

bot.on("message", async message => {
  if (message.author.bot) return;

  if (message.content.indexOf(config.prefix) !== 0) return;



  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd === `commands` || cmd === `cmds`) {
    const cmdsEmbed = new Discord.RichEmbed()
      .setColor("#832B29")
      .setTitle("Commands")
      .setDescription("**addrole** | Moderation | Usage: !addrole User#Discriminator RoleName | Adds the specified role to the specified player. \n \n **delrole** | Moderation | Usage: !delrole User#Discriminator RoleName | Removes the specified role from the specified user \n \n **nick** or **nickname** | Moderation | Usage: !nick User#Discriminator Nickname | Sets the nickname of the specified user to the specified content")
    message.reply("Check your DMs.")
    message.author.send(cmdsEmbed)
  } else
  if (cmd === `addrole`) {
    const invalidUsage = new Discord.RichEmbed()
      .setColor("#832B29")
      .setTitle("Command: addrole")
      .setDescription("**Description:** Adds the specified role to the specified user \n **Usage:** !addrole User#Discriminator RoleName \n **Example:** !addrole @Threqt Authorized Personnel")
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply("Insufficient Permissions.").then(r => r.delete(5000))
    }
    if (message.mentions.users.size === 0) {
      return message.channel.send(invalidUsage)
    }
    let roleMember = message.guild.member(message.mentions.users.first())
    if (!roleMember) {
      return message.reply("Invalid Member").then(r => r.delete(5000))
    }
    let role = args.slice(message.mentions.members.size).join(' ')
    if (!role) {
      return message.channel.send(invalidUsage)
    }
    let realrole = message.guild.roles.find(`name`, role)
    if (!realrole) {
      return message.reply("Please add a valid role").then(r => r.delete(5000))
    }
    if (roleMember.highestRole.position > message.member.highestRole.position) {
      return message.reply("Cannot role this person!").then(r => r.delete(5000));
    }
    if (message.member.highestRole.position < realrole.position) {
      return message.reply("Role too high to be added!").then(r => r.delete(5000));
    }

    const roleEmbed = new Discord.RichEmbed()
      .setColor("#832B29")
      .setAuthor(`Coruscant Guard Bot`, bot.user.avatarURL)
      .setThumbnail(bot.user.avatarURL)
      .setTitle(`ROLE ADDED BY ` + message.author.username)
      .setDescription(`LOG`)
      .addField("User:", roleMember.user.username, true)
      .addField("Role Added:", realrole.name, true)
      .addField("Channel:", message.channel, true)
      .addField("Time:", message.createdAt, true)
      .setFooter("Prefix: ! | This bot is still in it's early phases", bot.user.avatarURL)
      .setTimestamp();

    roleMember.addRole(realrole.id).then(messag => {
      message.reply(`${message.author.username} has added the role ${realrole.name} to ${roleMember.user.username}`)
      let channel = message.guild.channels.find(`name`, `bot-logs`)
      channel.send(roleEmbed);
    })
  } else
  if (cmd === `delrole`) {
    const invalidUsage = new Discord.RichEmbed()
      .setColor("#832B29")
      .setTitle("Command: delrole")
      .setDescription("**Description:** Removes the specified role from the specified user \n **Usage:** !delrole User#Discriminator RoleName \n **Example:** !delrole @Threqt Authorized Personnel")
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply("Insufficient Permissions.").then(r => r.delete(5000))
    }
    if (message.mentions.users.size === 0) {
      return message.channel.send(invalidUsage)
    }
    let roleMember = message.guild.member(message.mentions.users.first())
    if (!roleMember) {
      return message.reply("Invalid Member").then(r => r.delete(5000))
    }
    let role = args.slice(message.mentions.members.size).join(' ')
    if (!role) {
      return message.channel.send(invalidUsage)
    }
    let realrole = message.guild.roles.find(`name`, role)
    if (!realrole) {
      return message.reply("Please add a valid role").then(r => r.delete(5000))
    }
    if (roleMember.highestRole.position < realrole.position) {
      return message.reply("Role too high to be removed").then(r => r.delete(5000))
    }
    if (roleMember.highestRole.position > message.member.highestRole.position) {
      return message.reply("Cannot role this person!").then(r => r.delete(5000));
    }
    const roleEmbed = new Discord.RichEmbed()
      .setColor("#832B29")
      .setAuthor(`Coruscant Guard Bot`, bot.user.avatarURL)
      .setThumbnail(bot.user.avatarURL)
      .setTitle(`ROLE REMOVED BY ` + message.author.username)
      .setDescription(`LOG`)
      .addField("User:", roleMember.user.username, true)
      .addField("Role Removed:", realrole.name, true)
      .addField("Channel:", message.channel, true)
      .addField("Time:", message.createdAt, true)
      .setFooter("Prefix: ! | This bot is still in it's early phases", bot.user.avatarURL)
      .setTimestamp();
    roleMember.removeRole(realrole.id).then(messag => {
      message.reply(`${message.author.username} has removed the role ${realrole.name} from ${roleMember.user.username}`)
      let channel = message.guild.channels.find(`name`, `bot-logs`)
      channel.send(roleEmbed);
    })
  } else
  if (cmd === `nick` || cmd === `nickname`) {
    const invalidUsage = new Discord.RichEmbed()
      .setColor("#832B29")
      .setTitle("Command: nick/nickname")
      .setDescription("**Description:** Changes the nickname of the specified user \n **Usage:** !nick/nickname User#Discriminator NewNickname \n **Example:** !nick @Threqt Threqt | CST")
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply("Insufficient Permissions.").then(r => r.delete(5000))
    }
    if (message.mentions.users.size === 0) {
      return message.channel.send(invalidUsage)
    }
    let roleMember = message.guild.member(message.mentions.users.first())
    if (!roleMember) {
      return message.reply("Invalid Member").then(r => r.delete(5000))
    }
    const oldnickname = roleMember.nickname
    let role = args.slice(message.mentions.members.size).join(' ')
    if (!role) {
      return message.channel.send(invalidUsage)
    }
    if (roleMember.highestRole.position > message.member.highestRole.position) {
      return message.reply("Cannot nickname this person!").then(r => r.delete(5000));
    }
    const roleEmbed = new Discord.RichEmbed()
      .setColor("#832B29")
      .setAuthor(`Coruscant Guard Bot`, bot.user.avatarURL)
      .setThumbnail(bot.user.avatarURL)
      .setTitle(`NICKNAME CHANGED BY ` + message.author.username)
      .setDescription(`LOG`)
      .addField("User:", roleMember.user.username, true)
      .addField("Old Nickname:", oldnickname, true)
      .addField("New Nickname:", role, true)
      .addField("Channel:", message.channel, true)
      .addField("Time:", message.createdAt, true)
      .setFooter("Prefix: ! | This bot is still in it's early phases", bot.user.avatarURL)
      .setTimestamp();
    roleMember.setNickname(role).then(messag => {
      message.reply(`${message.author.username} has changed ${roleMember.user.username}'s nickname to ${role}`)
      let channel = message.guild.channels.find(`name`, `bot-logs`)
      channel.send(roleEmbed);
    })
  } else
  if (cmd === `logpatrol`) {
    patrolLog(bot, message)
  } else
  if (cmd === `loginactivity`) {
    logInactivity(bot, message)
  } else
  if(cmd === `verify`){
    //!verify user
    message.reply(`Please check dms!`) //This replies to the command -suggest
    message.author.send("Please put your ROBLOX name here. You have 10 minutes. Use 'cancel' to cancel.") //message.author.send dms the person a message
    const filter = m => m.author.id === message.author.id; //this is going to be our message filter. This makes sure the person who's sending the message isn't the author of the message (the bot)
    const dmchannel = await message.author.createDM(); //So, await basically means that it waits until the promise (code) is executed. So this waits until the DM is created. By waiting, it pauses the code.
    const collected = await dmchannel.awaitMessages(filter, {
      max: 1,
      time: 600000,
      errors: ['time']
    }).catch(err => {
      if (err.reason = 'time') {
        return message.author.send("Timed out")
      }
    }) //We are using await here because if no message is collected, we can't do anything. So, since the max messages is 1, the collector waits until it grabs a message, then continues.
    let message1 = await collected.first().content //This basically waits for the message from the collector above to be confirmed.
    if (message1.toLowerCase() == 'cancel') {
      return message.author.send("Cancelled.")
    }
    let user = message1
    let userId = await getUser(bot, message, rbx, user)
    let verifyMsg = await createRandomSentence(bot, message, rbx)
    console.log(verifyMsg)
    let tags = '`'
    message.author.send(`If you're really ${tags}${user}${tags}, reply with ${tags}cancel${tags} to cancel and ${tags}done${tags} when you finish putting this message as your ROBLOX status.: \n${tags}${verifyMsg}${tags}`, {files: ["./images/Example.PNG"]})
    const collected2 = await dmchannel.awaitMessages(filter, {
      max: 1,
      time: 600000,
      errors: ['time']
    }).catch(err => {
      if (err.reason = 'time') {
        return message.author.send("Timed out")
      }
    })
    let message2 = await collected2.first().content
    if (message2.toLowerCase() == 'cancel') {
      return message.author.send("Cancelled.")
    }
    if(message2.toLowerCase() == 'done'){
      let status = await rbx.getStatus(userId)
      console.log(status)
      if(status === verifyMsg){
        return message.author.send("You have successfully been verified")
      } else {
        return message.author.send("Status did not match.")
      }
    }
  }
});

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));

bot.login(process.env.token)

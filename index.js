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

bot.on("message", message => {
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
  }
});

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));

bot.login(process.env.token)

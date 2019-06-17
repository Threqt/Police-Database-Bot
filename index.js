const config = require("./config");
const rbx =  require("noblox.js")
const Discord = require("discord.js");
const bot = new Discord.Client({
  disableEverybody: true
});
const db = require('quick.db')

bot.on("ready", async () => {
  console.log(`${bot.user.username} has been deployed.`)
  bot.user.setActivity("bot related stuff", {
    type: "PLAYING"
  });
})

bot.on("message", async message => {
  if(message.author.bot) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if(cmd === `store`){
    
  }
});

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));

bot.login(process.env.token)

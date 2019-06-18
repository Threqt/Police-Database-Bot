const config = require("./config");
const rbx = require("noblox.js")
const Discord = require("discord.js");
const bot = new Discord.Client({
  disableEverybody: true
});
const db = require('quick.db')

//1 = Crimes against the individual 2 = Crimes against Public and Private Property 3 = Crimes against Justice 4 = Crimes against the Public and against safety 5 = Vehicular Infractions 6 = Deadly Weapons
bot.findPenal = (code) => {
  switch (code.toLowerCase()) {
    //1
    case '101':
      let obj = {
        crime: 'Assault (M)',
        type: 1
      }
      return obj
      break;
    case '101a':
      let obj = {
        crime: 'Assault with a Deadly Weapon (M)',
        type: 1
      }
      return obj
      break;
    case '102':
      let obj = {
        crime: 'Battery (M)'
        ',
        type: 1
      }
      return obj
      break;
    case '102a':
      let obj = {
        crime: 'Battery with intent to cause serious harm (F)',
        type: 1
      }
      return obj
      break;
    case '103b':
      let obj = {
        crime: 'Sexual Battery',
        type: 1
      }
      return obj
      break;
    case '104':
      let obj = {
        crime: 'Attempted Homocide (F)',
        type: 1
      }
      return obj
      break;
    case '105':
      let obj = {
        crime: 'Homocide (F)',
        type: 1
      }
      return obj
      break;
    case '105a':
      let obj = {
        crime: 'First Degree Homocide (F)',
        type: 1
      }
      return obj
      break;
    case '105b':
      let obj = {
        crime: 'Second Degree Homocide (F)',
        type: 1
      }
      return obj
      break;
    case '105c':
      let obj = {
        crime: 'Capital Homocide (F)',
        type: 1
      }
      return obj
      break;
    case '106':
      let obj = {
        crime: 'Manslaughter (F)',
        type: 1
      }
      return obj
      break;
    case '106a':
      let obj = {
        crime: 'Vehicle Manslaughter (M)',
        type: 1
      }
      return obj
      break;
    case '106b':
      let obj = {
        crime: 'Weaponized Manslaughter (F)',
        type: 1
      }
      return obj
      break;
    case '107':
      let obj = {
        crime: 'Torture (F)',
        type: 1
      }
      return obj
      break;
    case '107a':
      let obj = {
        crime: 'Torture with Intent to Kill (F)',
        type: 1
      }
      return obj
      break;
    case '108':
      let obj = {
        crime: 'Rape (F)',
        type: 1
      }
      return obj
      break;
    case '109':
      let obj = {
        crime: 'Harrasment (M)',
        type: 1
      }
      return obj
      break;
    case '109a':
      let obj = {
        crime: 'Sexual Harrasment (M)',
        type: 1
      }
      return obj
      break;
    case '109b':
      let obj = {
        crime: 'Stalking (M)',
        type: 1
      }
      return obj
      break;
    case '109c':
      let obj = {
        crime: 'Violating a Restraining Order (M)',
        type: 1
      }
      return obj
      break;
    case '110':
      let obj = {
        crime: 'Abuse (F&M)',
        type: 1
      }
      return obj
      break;
    case '110a':
      let obj = {
        crime: 'Domestic Abuse (F)',
        type: 1
      }
      return obj
      break;
    case '110b':
      let obj = {
        crime: 'Child Abuse/Neglect (F)',
        type: 1
      }
      return obj
      break;
    case '110c':
      let obj = {
        crime: 'Animal Abuse (M)',
        type: 1
      }
      return obj
      break;
      //2
    case '201':
      let obj = {
        crime: 'Tresspassing (M)',
        type: 2
      }
      return obj
      break;
    case '202':
      let obj = {
        crime: 'Theft (M&F)',
        type: 2
      }
      return obj
      break;
    case '202a':
      let obj = {
        crime: 'Petty Theft (M)',
        type: 2
      }
      return obj
      break;
    case '202b':
      let obj = {
        crime: 'Theft (M)',
        type: 2
      }
      return obj
      break;
    case '202c':
      let obj = {
        crime: 'Grand Theft (F)',
        type: 2
      }
      return obj
      break;
    case '202.1c':
      let obj = {
        crime: 'Grand Theft Auto (F)',
        type: 2
      }
      return obj
      break;
    case '202.1c':
      let obj = {
        crime: 'Grand Theft of a Firearm (F)',
        type: 2
      }
      return obj
      break;
    case '203':
      let obj = {
        crime: 'Robbery (F)',
        type: 2
      }
      return obj
      break;
    case '203a':
      let obj = {
        crime: 'Armed Robbery (F)',
        type: 2
      }
      return obj
      break;
    case '204':
      let obj = {
        crime: 'Carjacking (M)',
        type: 2
      }
      return obj
      break;
    case '205':
      let obj = {
        crime: 'Forgery/Counterfeiting (F)',
        type: 2
      }
      return obj
      break;
    case '206':
      let obj = {
        crime: 'Extortion (F)',
        type: 2
      }
      return obj
      break;
    case '207':
      let obj = {
        crime: 'Possession of Stolen Property (M)',
        type: 2
      }
      return obj
      break;
    case '208':
      let obj = {
        crime: 'Fraud (F)',
        type: 2
      }
      return obj
      break;
    case '209':
      let obj = {
        crime: 'Possession of Burglary Tools (M)',
        type: 2
      }
      return obj
      break;
    case '210':
      let obj = {
        crime: 'Breaking and Entering (M)',
        type: 2
      }
      return obj
      break;
      //3
    case '301':
      let obj = {
        crime: 'Bribery (F)',
        type: 3
      }
      return obj
      break;
    case '301a':
      let obj = {
        crime: 'Bribing a Government Official (F)',
        type: 3
      }
      return obj
      break;
    case '301b':
      let obj = {
        crime: 'Recieving a Bribe (F)',
        type: 3
      }
      return obj
      break;
    case '302':
      let obj = {
        crime: 'Refusing to Pay a Fine (M)',
        type: 3
      }
      return obj
      break;
    case '303':
      let obj = {
        crime: 'Resisting Arrest (M)',
        type: 3
      }
      return obj
      break;
    case '303a':
      let obj = {
        crime: 'Resisting with intent to injure an official (F)',
        type: 3
      }
      return obj
      break;
    case '303b':
      let obj = {
        crime: 'Escaping custody (F)',
        type: 3
      }
      return obj
      break;
    case '304':
      let obj = {
        crime: 'Obstruction (M)',
        type: 3
      }
      return obj
      break;
    case '304a':
      let obj = {
        crime: 'Misuse of a Government Hotline (M)',
        type: 3
      }
      return obj
      break;
    case '304b':
      let obj = {
        crime: 'Tampering with Evidence (M)',
        type: 3
      }
      return obj
      break;
    case '304c':
      let obj = {
        crime: 'Tresspassing a Private Crime Scene (M)',
        type: 3
      }
      return obj
      break;
    case '305':
      let obj = {
        crime: 'Harboring or Aiding a suspect (M)',
        type: 3
      }
      return obj
      break;
    case '306':
      let obj = {
        crime: 'Impersonation of a Government Employee (F)',
        type: 3
      }
      return obj
      break;
    case '307':
      let obj = {
        crime: 'Corruption (F)',
        type: 3
      }
      return obj
      break;
    case '307a':
      let obj = {
        crime: 'Corruption of Public Office (F)',
        type: 3
      }
      return obj
      break;
    case '308a':
      let obj = {
        crime: 'Corruption of Public Duty (F)',
        type: 3
      }
      return obj
      break;
    case '309':
      let obj = {
        crime: 'Contempt of Court (F)',
        type: 3
      }
      return obj
      break;
      //4
    case '401':
      let obj = {
        crime: 'Disorderly Conduct (M)',
        type: 4
      }
      return obj
      break;
    case '401a':
      let obj = {
        crime: 'Intoxicated and Disorderly (M)',
        type: 4
      }
      return obj
      break;
    case '402':
      let obj = {
        crime: 'Indecent Exposure (M)',
        type: 4
      }
      return obj
      break;
    case '403':
      let obj = {
        crime: 'Attempted Terrorism (F)',
        type: 4
      }
      return obj
      break;
    case '404':
      let obj = {
        crime: 'Terrorism (F)',
        type: 4
      }
      return obj
      break;
    case '405':
      let obj = {
        crime: 'Distribution of an unsafe substance (F)',
        type: 4
      }
      return obj
      break;
    case '405a':
      let obj = {
        crime: 'Distribution of an environmentally unsafe substance (F)',
        type: 4
      }
      return obj
      break;
    case '405b':
      let obj = {
        crime: 'Distribution of an unsafe substance with the intent to causes harm (F)',
        type: 4
      }
      return obj
      break;
    case '406':
      let obj = {
        crime: 'Possession of a Controlled Substance (F)',
        type: 4
      }
      return obj
      break;
    case '406a':
      let obj = {
        crime: 'Class A (F)',
        type: 4
      }
      return obj
      break;
    case '406b':
      let obj = {
        crime: 'Class B (F)',
        type: 4
      }
      return obj
      break;
    case '407':
      let obj = {
        crime: 'Distribution of a Controlled Substance (F)',
        type: 4
      }
      return obj
      break;
    case '407a':
      let obj = {
        crime: 'Class A (F)',
        type: 4
      }
      return obj
      break;
    case '407b':
      let obj = {
        crime: 'Class B (F)',
        type: 4
      }
      return obj
      break;
    case '408':
      let obj = {
        crime: 'Unlawful Possession of Alcohol (M)',
        type: 4
      }
      return obj
      break;
    case '409':
      let obj = {
        crime: 'Littering (M)',
        type: 4
      }
      return obj
      break;
    case '410':
      let obj = {
        crime: 'Rioting (M)',
        type: 4
      }
      return obj
      break;
    case '410a':
      let obj = {
        crime: 'Rioting with Violence (M)',
        type: 4
      }
      return obj
      break;
    case '411':
      let obj = {
        crime: 'Disturbing the Peace (M)',
        type: 4
      }
      return obj
      break;
    case '412':
      let obj = {
        crime: 'Prostitution (M)',
        type: 4
      }
      return obj
      break;
    case '413':
      let obj = {
        crime: 'Pimping (F)',
        type: 4
      }
      return obj
      break;
      //5
    case '501':
      let obj = {
        crime: 'Speeding (M)',
        type: 5
      }
      return obj
      break;
    case '501a':
      let obj = {
        crime: 'Speeding 10 over',
        type: 5
      }
      return obj
      break;
    case '501b':
      let obj = {
        crime: 'Speeding 11-19 over',
        type: 5
      }
      return obj
      break;
    case '501c':
      let obj = {
        crime: 'Speeding 20+ over (M)',
        type: 5
      }
      return obj
      break;
    case '501d':
      let obj = {
        crime: 'Speeding 150+ over',
        type: 5
      }
      return obj
      break;
    case '502':
      let obj = {
        crime: 'Unroadworthy Vehicle (M)',
        type: 5
      }
      return obj
      break;
    case '502a':
      let obj = {
        crime: 'No License Plate/Improper License Plate Displayed',
        type: 5
      }
      return obj
      break;
    case '502.1a':
      let obj = {
        crime: 'Other Vehicles Registration/Plate (F)',
        type: 5
      }
      return obj
      break;
    case '502.1b':
      let obj = {
        crime: 'Expired plates/registration (M)',
        type: 5
      }
      return obj
      break;
    case '502b':
      let obj = {
        crime: 'No Vehicle Lights',
        type: 5
      }
      return obj
      break;
    case '502c':
      let obj = {
        crime: 'No Turn Signals',
        type: 5
      }
      return obj
      break;
    case '502d':
      let obj = {
        crime: 'Improper Window Tint',
        type: 5
      }
      return obj
      break;
    case '502e':
      let obj = {
        crime: 'Improper Display/Use of Lights (M)',
        type: 5
      }
      return obj
      break;
    case '503':
      let obj = {
        crime: 'Improper Use of Vehicular Horn',
        type: 5
      }
      return obj
      break;
    case '504':
      let obj = {
        crime: 'DUI/DWI',
        type: 5
      }
      return obj
      break;
    case '504a':
      let obj = {
        crime: 'DWI under alcohol (M)',
        type: 5
      }
      return obj
      break;
    case '504b':
      let obj = {
        crime: 'DUI under narcotics (F)',
        type: 5
      }
      return obj
      break;
    case '505':
      let obj = {
        crime: 'Open Container of Alcohol in Vehicle',
        type: 5
      }
      return obj
      break;
    case '506':
      let obj = {
        crime: 'Improper vehicular restraint',
        type: 5
      }
      return obj
      break;
    case '506a':
      let obj = {
        crime: 'Improper restraint of a child',
        type: 5
      }
      return obj
      break;
    case '507':
      let obj = {
        crime: 'Reckless Driving (M)',
        type: 5
      }
      return obj
      break;
    case '508':
      let obj = {
        crime: 'Hit and Run (M)',
        type: 5
      }
      return obj
      break;
    case '508a':
      let obj = {
        crime: 'H&R of an Emergency Vehicle (F)',
        type: 5
      }
      return obj
      break;
    case '509':
      let obj = {
        crime: 'Failure to Provide Valid Identification (M)',
        type: 5
      }
      return obj
      break;
    case '509a':
      let obj = {
        crime: 'Failure to Provide Valid Insurance',
        type: 5
      }
      return obj
      break;
    case '509b':
      let obj = {
        crime: 'Failure to Provide Valid Registration',
        type: 5
      }
      return obj
      break;
    case '509c':
      let obj = {
        crime: 'Failure to Provide Accurate Information',
        type: 5
      }
      return obj
      break;
    case '510':
      let obj = {
        crime: 'Fleeing a Law Enforcment Officer (F)',
        type: 5
      }
      return obj
      break;
    case '511':
      let obj = {
        crime: 'Participating in a Motor Vehicle Contest (M)',
        type: 5
      }
      return obj
      break;
    case '512':
      let obj = {
        crime: 'Improperly Parked Vehicle',
        type: 5
      }
      return obj
      break;
    case '513':
      let obj = {
        crime: 'Excessively loud Exhaust Note',
        type: 5
      }
      return obj
      break;
    case '514':
      let obj = {
        crime: 'Failure to yield for an Emergency Vehicle',
        type: 5
      }
      return obj
      break;
      //6
    case '601':
      let obj = {
        crime: 'Unlawful Possession of a Firearm (M)',
        type: 6
      }
      return obj
      break;
    case '601a':
      let obj = {
        crime: 'Felon in Possession of a Firearm (M)',
        type: 6
      }
      return obj
      break;
    case '602':
      let obj = {
        crime: 'Illegal Discharge of a Firearm (M)',
        type: 6
      }
      return obj
      break;
    case '602a':
      let obj = {
        crime: 'Illegal Discharge from a Vehicle (M)',
        type: 6
      }
      return obj
      break;
    case '602b':
      let obj = {
        crime: 'Discharging within 50 yards of an Occupied Building (M)',
        type: 6
      }
      return obj
      break;
    case '603':
      let obj = {
        crime: 'Carrying a Concealed Firearm without Permit (M)',
        type: 6
      }
      return obj
      break;
    case '604':
      let obj = {
        crime: 'Possession of a Dangerous Device (M)',
        type: 6
      }
      return obj
      break;
    case '604a':
      let obj = {
        crime: 'Possession of an Explosive Device (F)',
        type: 6
      }
      return obj
      break;
    case '605':
      let obj = {
        crime: 'Brandishing a Weapon (M)',
        type: 6
      }
      return obj
      break;
    case '605a':
      let obj = {
        crime: 'Brandishing a Firearm (M)',
        type: 6
      }
      return obj
      break;
    case '606':
      let obj = {
        crime: 'Unlawful Distribution of a Firearm (F)',
        type: 6
      }
      return obj
      break;
    default:
      return 'Invalid Code'
  }
}

bot.on("ready", async () => {
  console.log(`${bot.user.username} has been deployed.`)
  bot.user.setActivity("bot related stuff", {
    type: "PLAYING"
  });
})

bot.on("message", async message => {
  if (message.author.bot) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd === ``){
    
  }
});

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));

bot.login(process.env.token)

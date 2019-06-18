const config = require("./config");
const rbx = require("noblox.js")
const Discord = require("discord.js");
const bot = new Discord.Client({
  disableEverybody: true
});
const db = require('quick.db')
var obj;

//1 = Crimes against the individual 2 = Crimes against Public and Private Property 3 = Crimes against Justice 4 = Crimes against the Public and against safety 5 = Vehicular Infractions 6 = Deadly Weapons
bot.findPenal = (code) => {
  switch (code.toLowerCase()) {
    //1
    case '101':
       obj = {
        crime: 'Assault (M)',
        type: 1
      }
      return obj
      break;
    case '101a':
       obj = {
        crime: 'Assault with a Deadly Weapon (M)',
        type: 1
      }
      return obj
      break;
    case '102':
       obj = {
        crime: 'Battery (M)',
        type: 1
      }
      return obj
      break;
    case '102a':
       obj = {
        crime: 'Battery with intent to cause serious harm (F)',
        type: 1
      }
      return obj
      break;
    case '103b':
       obj = {
        crime: 'Sexual Battery',
        type: 1
      }
      return obj
      break;
    case '104':
       obj = {
        crime: 'Attempted Homocide (F)',
        type: 1
      }
      return obj
      break;
    case '105':
       obj = {
        crime: 'Homocide (F)',
        type: 1
      }
      return obj
      break;
    case '105a':
       obj = {
        crime: 'First Degree Homocide (F)',
        type: 1
      }
      return obj
      break;
    case '105b':
       obj = {
        crime: 'Second Degree Homocide (F)',
        type: 1
      }
      return obj
      break;
    case '105c':
       obj = {
        crime: 'Capital Homocide (F)',
        type: 1
      }
      return obj
      break;
    case '106':
       obj = {
        crime: 'Manslaughter (F)',
        type: 1
      }
      return obj
      break;
    case '106a':
       obj = {
        crime: 'Vehicle Manslaughter (M)',
        type: 1
      }
      return obj
      break;
    case '106b':
       obj = {
        crime: 'Weaponized Manslaughter (F)',
        type: 1
      }
      return obj
      break;
    case '107':
       obj = {
        crime: 'Torture (F)',
        type: 1
      }
      return obj
      break;
    case '107a':
       obj = {
        crime: 'Torture with Intent to Kill (F)',
        type: 1
      }
      return obj
      break;
    case '108':
       obj = {
        crime: 'Rape (F)',
        type: 1
      }
      return obj
      break;
    case '109':
       obj = {
        crime: 'Harrasment (M)',
        type: 1
      }
      return obj
      break;
    case '109a':
       obj = {
        crime: 'Sexual Harrasment (M)',
        type: 1
      }
      return obj
      break;
    case '109b':
       obj = {
        crime: 'Stalking (M)',
        type: 1
      }
      return obj
      break;
    case '109c':
       obj = {
        crime: 'Violating a Restraining Order (M)',
        type: 1
      }
      return obj
      break;
    case '110':
       obj = {
        crime: 'Abuse (F&M)',
        type: 1
      }
      return obj
      break;
    case '110a':
       obj = {
        crime: 'Domestic Abuse (F)',
        type: 1
      }
      return obj
      break;
    case '110b':
       obj = {
        crime: 'Child Abuse/Neglect (F)',
        type: 1
      }
      return obj
      break;
    case '110c':
       obj = {
        crime: 'Animal Abuse (M)',
        type: 1
      }
      return obj
      break;
      //2
    case '201':
       obj = {
        crime: 'Tresspassing (M)',
        type: 2
      }
      return obj
      break;
    case '202':
       obj = {
        crime: 'Theft (M&F)',
        type: 2
      }
      return obj
      break;
    case '202a':
       obj = {
        crime: 'Petty Theft (M)',
        type: 2
      }
      return obj
      break;
    case '202b':
       obj = {
        crime: 'Theft (M)',
        type: 2
      }
      return obj
      break;
    case '202c':
       obj = {
        crime: 'Grand Theft (F)',
        type: 2
      }
      return obj
      break;
    case '202.1c':
       obj = {
        crime: 'Grand Theft Auto (F)',
        type: 2
      }
      return obj
      break;
    case '202.1c':
       obj = {
        crime: 'Grand Theft of a Firearm (F)',
        type: 2
      }
      return obj
      break;
    case '203':
       obj = {
        crime: 'Robbery (F)',
        type: 2
      }
      return obj
      break;
    case '203a':
       obj = {
        crime: 'Armed Robbery (F)',
        type: 2
      }
      return obj
      break;
    case '204':
       obj = {
        crime: 'Carjacking (M)',
        type: 2
      }
      return obj
      break;
    case '205':
       obj = {
        crime: 'Forgery/Counterfeiting (F)',
        type: 2
      }
      return obj
      break;
    case '206':
       obj = {
        crime: 'Extortion (F)',
        type: 2
      }
      return obj
      break;
    case '207':
       obj = {
        crime: 'Possession of Stolen Property (M)',
        type: 2
      }
      return obj
      break;
    case '208':
       obj = {
        crime: 'Fraud (F)',
        type: 2
      }
      return obj
      break;
    case '209':
       obj = {
        crime: 'Possession of Burglary Tools (M)',
        type: 2
      }
      return obj
      break;
    case '210':
       obj = {
        crime: 'Breaking and Entering (M)',
        type: 2
      }
      return obj
      break;
      //3
    case '301':
       obj = {
        crime: 'Bribery (F)',
        type: 3
      }
      return obj
      break;
    case '301a':
       obj = {
        crime: 'Bribing a Government Official (F)',
        type: 3
      }
      return obj
      break;
    case '301b':
       obj = {
        crime: 'Recieving a Bribe (F)',
        type: 3
      }
      return obj
      break;
    case '302':
       obj = {
        crime: 'Refusing to Pay a Fine (M)',
        type: 3
      }
      return obj
      break;
    case '303':
       obj = {
        crime: 'Resisting Arrest (M)',
        type: 3
      }
      return obj
      break;
    case '303a':
       obj = {
        crime: 'Resisting with intent to injure an official (F)',
        type: 3
      }
      return obj
      break;
    case '303b':
       obj = {
        crime: 'Escaping custody (F)',
        type: 3
      }
      return obj
      break;
    case '304':
       obj = {
        crime: 'Obstruction (M)',
        type: 3
      }
      return obj
      break;
    case '304a':
       obj = {
        crime: 'Misuse of a Government Hotline (M)',
        type: 3
      }
      return obj
      break;
    case '304b':
       obj = {
        crime: 'Tampering with Evidence (M)',
        type: 3
      }
      return obj
      break;
    case '304c':
       obj = {
        crime: 'Tresspassing a Private Crime Scene (M)',
        type: 3
      }
      return obj
      break;
    case '305':
       obj = {
        crime: 'Harboring or Aiding a suspect (M)',
        type: 3
      }
      return obj
      break;
    case '306':
       obj = {
        crime: 'Impersonation of a Government Employee (F)',
        type: 3
      }
      return obj
      break;
    case '307':
       obj = {
        crime: 'Corruption (F)',
        type: 3
      }
      return obj
      break;
    case '307a':
       obj = {
        crime: 'Corruption of Public Office (F)',
        type: 3
      }
      return obj
      break;
    case '308a':
       obj = {
        crime: 'Corruption of Public Duty (F)',
        type: 3
      }
      return obj
      break;
    case '309':
       obj = {
        crime: 'Contempt of Court (F)',
        type: 3
      }
      return obj
      break;
      //4
    case '401':
       obj = {
        crime: 'Disorderly Conduct (M)',
        type: 4
      }
      return obj
      break;
    case '401a':
       obj = {
        crime: 'Intoxicated and Disorderly (M)',
        type: 4
      }
      return obj
      break;
    case '402':
       obj = {
        crime: 'Indecent Exposure (M)',
        type: 4
      }
      return obj
      break;
    case '403':
       obj = {
        crime: 'Attempted Terrorism (F)',
        type: 4
      }
      return obj
      break;
    case '404':
       obj = {
        crime: 'Terrorism (F)',
        type: 4
      }
      return obj
      break;
    case '405':
       obj = {
        crime: 'Distribution of an unsafe substance (F)',
        type: 4
      }
      return obj
      break;
    case '405a':
       obj = {
        crime: 'Distribution of an environmentally unsafe substance (F)',
        type: 4
      }
      return obj
      break;
    case '405b':
       obj = {
        crime: 'Distribution of an unsafe substance with the intent to causes harm (F)',
        type: 4
      }
      return obj
      break;
    case '406':
       obj = {
        crime: 'Possession of a Controlled Substance (F)',
        type: 4
      }
      return obj
      break;
    case '406a':
       obj = {
        crime: 'Class A (F)',
        type: 4
      }
      return obj
      break;
    case '406b':
       obj = {
        crime: 'Class B (F)',
        type: 4
      }
      return obj
      break;
    case '407':
       obj = {
        crime: 'Distribution of a Controlled Substance (F)',
        type: 4
      }
      return obj
      break;
    case '407a':
       obj = {
        crime: 'Class A (F)',
        type: 4
      }
      return obj
      break;
    case '407b':
       obj = {
        crime: 'Class B (F)',
        type: 4
      }
      return obj
      break;
    case '408':
       obj = {
        crime: 'Unlawful Possession of Alcohol (M)',
        type: 4
      }
      return obj
      break;
    case '409':
       obj = {
        crime: 'Littering (M)',
        type: 4
      }
      return obj
      break;
    case '410':
       obj = {
        crime: 'Rioting (M)',
        type: 4
      }
      return obj
      break;
    case '410a':
       obj = {
        crime: 'Rioting with Violence (M)',
        type: 4
      }
      return obj
      break;
    case '411':
       obj = {
        crime: 'Disturbing the Peace (M)',
        type: 4
      }
      return obj
      break;
    case '412':
       obj = {
        crime: 'Prostitution (M)',
        type: 4
      }
      return obj
      break;
    case '413':
       obj = {
        crime: 'Pimping (F)',
        type: 4
      }
      return obj
      break;
      //5
    case '501':
       obj = {
        crime: 'Speeding (M)',
        type: 5
      }
      return obj
      break;
    case '501a':
       obj = {
        crime: 'Speeding 10 over',
        type: 5
      }
      return obj
      break;
    case '501b':
       obj = {
        crime: 'Speeding 11-19 over',
        type: 5
      }
      return obj
      break;
    case '501c':
       obj = {
        crime: 'Speeding 20+ over (M)',
        type: 5
      }
      return obj
      break;
    case '501d':
       obj = {
        crime: 'Speeding 150+ over',
        type: 5
      }
      return obj
      break;
    case '502':
       obj = {
        crime: 'Unroadworthy Vehicle (M)',
        type: 5
      }
      return obj
      break;
    case '502a':
       obj = {
        crime: 'No License Plate/Improper License Plate Displayed',
        type: 5
      }
      return obj
      break;
    case '502.1a':
       obj = {
        crime: 'Other Vehicles Registration/Plate (F)',
        type: 5
      }
      return obj
      break;
    case '502.1b':
       obj = {
        crime: 'Expired plates/registration (M)',
        type: 5
      }
      return obj
      break;
    case '502b':
       obj = {
        crime: 'No Vehicle Lights',
        type: 5
      }
      return obj
      break;
    case '502c':
       obj = {
        crime: 'No Turn Signals',
        type: 5
      }
      return obj
      break;
    case '502d':
       obj = {
        crime: 'Improper Window Tint',
        type: 5
      }
      return obj
      break;
    case '502e':
       obj = {
        crime: 'Improper Display/Use of Lights (M)',
        type: 5
      }
      return obj
      break;
    case '503':
       obj = {
        crime: 'Improper Use of Vehicular Horn',
        type: 5
      }
      return obj
      break;
    case '504':
       obj = {
        crime: 'DUI/DWI',
        type: 5
      }
      return obj
      break;
    case '504a':
       obj = {
        crime: 'DWI under alcohol (M)',
        type: 5
      }
      return obj
      break;
    case '504b':
       obj = {
        crime: 'DUI under narcotics (F)',
        type: 5
      }
      return obj
      break;
    case '505':
       obj = {
        crime: 'Open Container of Alcohol in Vehicle',
        type: 5
      }
      return obj
      break;
    case '506':
       obj = {
        crime: 'Improper vehicular restraint',
        type: 5
      }
      return obj
      break;
    case '506a':
       obj = {
        crime: 'Improper restraint of a child',
        type: 5
      }
      return obj
      break;
    case '507':
       obj = {
        crime: 'Reckless Driving (M)',
        type: 5
      }
      return obj
      break;
    case '508':
       obj = {
        crime: 'Hit and Run (M)',
        type: 5
      }
      return obj
      break;
    case '508a':
       obj = {
        crime: 'H&R of an Emergency Vehicle (F)',
        type: 5
      }
      return obj
      break;
    case '509':
       obj = {
        crime: 'Failure to Provide Valid Identification (M)',
        type: 5
      }
      return obj
      break;
    case '509a':
       obj = {
        crime: 'Failure to Provide Valid Insurance',
        type: 5
      }
      return obj
      break;
    case '509b':
       obj = {
        crime: 'Failure to Provide Valid Registration',
        type: 5
      }
      return obj
      break;
    case '509c':
       obj = {
        crime: 'Failure to Provide Accurate Information',
        type: 5
      }
      return obj
      break;
    case '510':
       obj = {
        crime: 'Fleeing a Law Enforcment Officer (F)',
        type: 5
      }
      return obj
      break;
    case '511':
       obj = {
        crime: 'Participating in a Motor Vehicle Contest (M)',
        type: 5
      }
      return obj
      break;
    case '512':
       obj = {
        crime: 'Improperly Parked Vehicle',
        type: 5
      }
      return obj
      break;
    case '513':
       obj = {
        crime: 'Excessively loud Exhaust Note',
        type: 5
      }
      return obj
      break;
    case '514':
       obj = {
        crime: 'Failure to yield for an Emergency Vehicle',
        type: 5
      }
      return obj
      break;
      //6
    case '601':
       obj = {
        crime: 'Unlawful Possession of a Firearm (M)',
        type: 6
      }
      return obj
      break;
    case '601a':
       obj = {
        crime: 'Felon in Possession of a Firearm (M)',
        type: 6
      }
      return obj
      break;
    case '602':
       obj = {
        crime: 'Illegal Discharge of a Firearm (M)',
        type: 6
      }
      return obj
      break;
    case '602a':
       obj = {
        crime: 'Illegal Discharge from a Vehicle (M)',
        type: 6
      }
      return obj
      break;
    case '602b':
       obj = {
        crime: 'Discharging within 50 yards of an Occupied Building (M)',
        type: 6
      }
      return obj
      break;
    case '603':
       obj = {
        crime: 'Carrying a Concealed Firearm without Permit (M)',
        type: 6
      }
      return obj
      break;
    case '604':
       obj = {
        crime: 'Possession of a Dangerous Device (M)',
        type: 6
      }
      return obj
      break;
    case '604a':
       obj = {
        crime: 'Possession of an Explosive Device (F)',
        type: 6
      }
      return obj
      break;
    case '605':
       obj = {
        crime: 'Brandishing a Weapon (M)',
        type: 6
      }
      return obj
      break;
    case '605a':
       obj = {
        crime: 'Brandishing a Firearm (M)',
        type: 6
      }
      return obj
      break;
    case '606':
       obj = {
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

const config = require("./config");
const rbx = require("noblox.js")
const Discord = require("discord.js");
const bot = new Discord.Client({
  disableEverybody: true
});
const db = require('quick.db')
var obj;
var allCodes = [{
    number: '101',
    crime: 'Assault (M)',
    type: 1
  },
  {
    number: '101a',
    crime: 'Assault with a Deadly Weapon (M)',
    type: 1
  },
  {
    number: '102',
    crime: 'Battery (M)',
    type: 1
  },
  {
    number: '102a',
    crime: 'Battery with intent to cause serious harm (F)',
    type: 1
  },
  {
    number: '103b',
    crime: 'Sexual Battery',
    type: 1
  },
  {
    number: '104',
    crime: 'Attempted Homocide (F)',
    type: 1
  },
  {
    number: '105',
    crime: 'Homocide (F)',
    type: 1
  },
  {
    number: '105a',
    crime: 'First Degree Homocide (F)',
    type: 1
  },
  {
    number: '105b',
    crime: 'Second Degree Homocide (F)',
    type: 1
  },
  {
    number: '105c',
    crime: 'Capital Homocide (F)',
    type: 1
  },
  {
    number: '106',
    crime: 'Manslaughter (F)',
    type: 1
  },
  {
    number: '106a',
    crime: 'Vehicle Manslaughter (M)',
    type: 1
  },
  {
    number: '106b',
    crime: 'Weaponized Manslaughter (F)',
    type: 1
  },
  {
    number: '107',
    crime: 'Torture (F)',
    type: 1
  },
  {
    number: '107a',
    crime: 'Torture with Intent to Kill (F)',
    type: 1
  },
  {
    number: '108',
    crime: 'Rape (F)',
    type: 1
  },
  {
    number: '109',
    crime: 'Harrasment (M)',
    type: 1
  },
  {
    number: '109a',
    crime: 'Sexual Harrasment (M)',
    type: 1
  },
  {
    number: '109b',
    crime: 'Stalking (M)',
    type: 1
  },
  {
    number: '109c',
    crime: 'Violating a Restraining Order (M)',
    type: 1
  },
  {
    number: '110',
    crime: 'Abuse (F&M)',
    type: 1
  },
  {
    number: '110a',
    crime: 'Domestic Abuse (F)',
    type: 1
  },
  {
    number: '110b',
    crime: 'Child Abuse/Neglect (F)',
    type: 1
  },
  {
    number: '110c',
    crime: 'Animal Abuse (M)',
    type: 1
  },
  {
    number: '201',
    crime: 'Tresspassing (M)',
    type: 2
  },
  {
    number: '202',
    crime: 'Theft (M&F)',
    type: 2
  },
  {
    number: '202a',
    crime: 'Petty Theft (M)',
    type: 2
  },
  {
    number: '202b',
    crime: 'Theft (M)',
    type: 2
  },
  {
    number: '202c',
    crime: 'Grand Theft (F)',
    type: 2
  },
  {
    number: '202.1c',
    crime: 'Grand Theft Auto (F)',
    type: 2
  },
  {
    number: '202.2c',
    crime: 'Grand Theft of a Firearm (F)',
    type: 2
  },
  {
    number: '203',
    crime: 'Robbery (F)',
    type: 2
  },
  {
    number: '203a',
    crime: 'Armed Robbery (F)',
    type: 2
  },
  {
    number: '204',
    crime: 'Carjacking (M)',
    type: 2
  },
  {
    number: '205',
    crime: 'Forgery/Counterfeiting (F)',
    type: 2
  },
  {
    number: '206',
    crime: 'Extortion (F)',
    type: 2
  },
  {
    number: '207',
    crime: 'Possession of Stolen Property (M)',
    type: 2
  },
  {
    number: '208',
    crime: 'Fraud (F)',
    type: 2
  },
  {
    number: '209',
    crime: 'Possession of Burglary Tools (M)',
    type: 2
  },
  {
    number: '210',
    crime: 'Breaking and Entering (M)',
    type: 2
  },
  {
    number: '301',
    crime: 'Bribery (F)',
    type: 3
  },
  {
    number: '301a',
    crime: 'Bribing a Government Official (F)',
    type: 3
  },
  {
    number: '301b',
    crime: 'Recieving a Bribe (F)',
    type: 3
  },
  {
    number: '302',
    crime: 'Refusing to Pay a Fine (M)',
    type: 3
  },
  {
    number: '303',
    crime: 'Resisting Arrest (M)',
    type: 3
  },
  {
    number: '303a',
    crime: 'Resisting with intent to injure an official (F)',
    type: 3
  },
  {
    number: '303b',
    crime: 'Escaping custody (F)',
    type: 3
  },
  {
    number: '304',
    crime: 'Obstruction (M)',
    type: 3
  },
  {
    number: '304a',
    crime: 'Misuse of a Government Hotline (M)',
    type: 3
  },
  {
    number: '304b',
    crime: 'Tampering with Evidence (M)',
    type: 3
  },
  {
    number: '304c',
    crime: 'Tresspassing a Private Crime Scene (M)',
    type: 3
  },
  {
    number: '305',
    crime: 'Harboring or Aiding a suspect (M)',
    type: 3
  },
  {
    number: '306',
    crime: 'Impersonation of a Government Employee (F)',
    type: 3
  },
  {
    number: '307',
    crime: 'Corruption (F)',
    type: 3
  },
  {
    number: '307a',
    crime: 'Corruption of Public Office (F)',
    type: 3
  },
  {
    number: '307b',
    crime: 'Corruption of Public Duty (F)',
    type: 3
  },
  {
    number: '308',
    crime: 'Contempt of Court (F)',
    type: 3
  },
  {
    number: '401',
    crime: 'Disorderly Conduct (M)',
    type: 4
  },
  {
    number: '401a',
    crime: 'Intoxicated and Disorderly (M)',
    type: 4
  },
  {
    number: '402',
    crime: 'Indecent Exposure (M)',
    type: 4
  },
  {
    number: '403',
    crime: 'Attempted Terrorism (F)',
    type: 4
  },
  {
    number: '404',
    crime: 'Terrorism (F)',
    type: 4
  },
  {
    number: '405',
    crime: 'Distribution of an unsafe substance (F)',
    type: 4
  },
  {
    number: '405',
    crime: 'Distribution of an environmentally unsafe substance (F)',
    type: 4
  },
  {
    number: '405b',
    crime: 'Distribution of an unsafe substance with the intent to causes harm (F)',
    type: 4
  },
  {
    number: '406',
    crime: 'Possession of a Controlled Substance (F)',
    type: 4
  },
  {
    number: '406a',
    crime: 'Class A (F)',
    type: 4
  },
  {
    number: '406b',
    crime: 'Class B (F)',
    type: 4
  },
  {
    number: '407',
    crime: 'Distribution of a Controlled Substance (F)',
    type: 4
  },
  {
    number: '407a',
    crime: 'Class A (F)',
    type: 4
  },
  {
    number: '407b',
    crime: 'Class B (F)',
    type: 4
  },
  {
    number: '408',
    crime: 'Unlawful Possession of Alcohol (M)',
    type: 4
  },
  {
    number: '409',
    crime: 'Littering (M)',
    type: 4
  },
  {
    number: '410',
    crime: 'Rioting (M)',
    type: 4
  },
  {
    number: '410a',
    crime: 'Rioting with Violence (M)',
    type: 4
  },
  {
    number: '411',
    crime: 'Disturbing the Peace (M)',
    type: 4
  },
  {
    number: '412',
    crime: 'Prostitution (M)',
    type: 4
  },
  {
    number: '413',
    crime: 'Pimping (F)',
    type: 4
  },
  {
    number: '501',
    crime: 'Speeding (M)',
    type: 5
  },
  {
    number: '501a',
    crime: 'Speeding 10 over',
    type: 5
  },
  {
    number: '501b',
    crime: 'Speeding 11-19 over',
    type: 5
  },
  {
    number: '501c',
    crime: 'Speeding 20+ over (M)',
    type: 5
  },
  {
    number: '501d',
    crime: 'Speeding 150+ over',
    type: 5
  },
  {
    number: '502',
    crime: 'Unroadworthy Vehicle (M)',
    type: 5
  },
  {
    number: '502a',
    crime: 'No License Plate/Improper License Plate Displayed',
    type: 5
  },
  {
    number: '502.1a',
    crime: 'Other Vehicles Registration/Plate (F)',
    type: 5
  },
  {
    number: '502.1b',
    crime: 'Expired plates/registration (M)',
    type: 5
  },
  {
    number: '502b',
    crime: 'No Vehicle Lights',
    type: 5
  },
  {
    number: '502c',
    crime: 'No Turn Signals',
    type: 5
  },
  {
    number: '502d',
    crime: 'Improper Window Tint',
    type: 5
  },
  {
    number: '502e',
    crime: 'Improper Display/Use of Lights (M)',
    type: 5
  },
  {
    number: '503',
    crime: 'Improper Use of Vehicular Horn',
    type: 5
  },
  {
    number: '504',
    crime: 'DUI/DWI',
    type: 5
  },
  {
    number: '504a',
    crime: 'DWI under alcohol (M)',
    type: 5
  },
  {
    number: '504b',
    crime: 'DUI under narcotics (F)',
    type: 5
  },
  {
    number: '505',
    crime: 'Open Container of Alcohol in Vehicle',
    type: 5
  },
  {
    number: '506',
    crime: 'Improper vehicular restraint',
    type: 5
  },
  {
    number: '506a',
    crime: 'Improper restraint of a child',
    type: 5
  },
  {
    number: '507',
    crime: 'Reckless Driving (M)',
    type: 5
  },
  {
    number: '508',
    crime: 'Hit and Run (M)',
    type: 5
  },
  {
    number: '508a',
    crime: 'H&R of an Emergency Vehicle (F)',
    type: 5
  },
  {
    number: '509',
    crime: 'Failure to Provide Valid Identification (M)',
    type: 5
  },
  {
    number: '509a',
    crime: 'Failure to Provide Valid Insurance',
    type: 5
  },
  {
    number: '509b',
    crime: 'Failure to Provide Valid Registration',
    type: 5
  },
  {
    number: '509c',
    crime: 'Failure to Provide Accurate Information',
    type: 5
  },
  {
    number: '510',
    crime: 'Fleeing a Law Enforcment Officer (F)',
    type: 5
  },
  {
    number: '511',
    crime: 'Participating in a Motor Vehicle Contest (M)',
    type: 5
  },
  {
    number: '512',
    crime: 'Improperly Parked Vehicle',
    type: 5
  },
  {
    number: '513',
    crime: 'Excessively loud Exhaust Note',
    type: 5
  },
  {
    number: '514',
    crime: 'Failure to yield for an Emergency Vehicle',
    type: 5
  },
  {
    number: '601',
    crime: 'Unlawful Possession of a Firearm (M)',
    type: 6
  },
  {
    number: '601a',
    crime: 'Felon in Possession of a Firearm (M)',
    type: 6
  },
  {
    number: '602',
    crime: 'Illegal Discharge of a Firearm (M)',
    type: 6
  },
  {
    number: '602a',
    crime: 'Illegal Discharge from a Vehicle (M)',
    type: 6
  },
  {
    number: '602b',
    crime: 'Discharging within 50 yards of an Occupied Building (M)',
    type: 6
  },
  {
    number: '603',
    crime: 'Carrying a Concealed Firearm without Permit (M)',
    type: 6
  },
  {
    number: '604',
    crime: 'Possession of a Dangerous Device (M)',
    type: 6
  },
  {
    number: '604a',
    crime: 'Possession of an Explosive Device (F)',
    type: 6
  },
  {
    number: '605',
    crime: 'Brandishing a Weapon (M)',
    type: 6
  },
  {
    number: '605a',
    crime: 'Brandishing a Firearm (M)',
    type: 6
  },
  {
    number: '606',
    crime: 'Unlawful Distribution of a Firearm (F)',
    type: 6
  },
];
//1 = Crimes against the individual 2 = Crimes against Public and Private Property 3 = Crimes against Justice 4 = Crimes against the Public and against safety 5 = Vehicular Infractions 6 = Deadly Weapons
bot.findPenal = (code) => {
  switch (code.toLowerCase()) {
    //1
    case '101':
      obj = {
        number: '101',
        crime: 'Assault (M)',
        type: 1
      }
      return obj
      break;
    case '101a':
      obj = {
        number: '101a',
        crime: 'Assault with a Deadly Weapon (M)',
        type: 1
      }
      return obj
      break;
    case '102':
      obj = {
        number: '102',
        crime: 'Battery (M)',
        type: 1
      }
      return obj
      break;
    case '102a':
      obj = {
        number: '102a',
        crime: 'Battery with intent to cause serious harm (F)',
        type: 1
      }
      return obj
      break;
    case '103b':
      obj = {
        number: '103b',
        crime: 'Sexual Battery',
        type: 1
      }
      return obj
      break;
    case '104':
      obj = {
        number: '104',
        crime: 'Attempted Homocide (F)',
        type: 1
      }
      return obj
      break;
    case '105':
      obj = {
        number: '105',
        crime: 'Homocide (F)',
        type: 1
      }
      return obj
      break;
    case '105a':
      obj = {
        number: '105a',
        crime: 'First Degree Homocide (F)',
        type: 1
      }
      return obj
      break;
    case '105b':
      obj = {
        number: '105b',
        crime: 'Second Degree Homocide (F)',
        type: 1
      }
      return obj
      break;
    case '105c':
      obj = {
        number: '105c',
        crime: 'Capital Homocide (F)',
        type: 1
      }
      return obj
      break;
    case '106':
      obj = {
        number: '106',
        crime: 'Manslaughter (F)',
        type: 1
      }
      return obj
      break;
    case '106a':
      obj = {
        number: '106a',
        crime: 'Vehicle Manslaughter (M)',
        type: 1
      }
      return obj
      break;
    case '106b':
      obj = {
        number: '106b',
        crime: 'Weaponized Manslaughter (F)',
        type: 1
      }
      return obj
      break;
    case '107':
      obj = {
        number: '107',
        crime: 'Torture (F)',
        type: 1
      }
      return obj
      break;
    case '107a':
      obj = {
        number: '107a',
        crime: 'Torture with Intent to Kill (F)',
        type: 1
      }
      return obj
      break;
    case '108':
      obj = {
        number: '108',
        crime: 'Rape (F)',
        type: 1
      }
      return obj
      break;
    case '109':
      obj = {
        number: '109',
        crime: 'Harrasment (M)',
        type: 1
      }
      return obj
      break;
    case '109a':
      obj = {
        number: '109a',
        crime: 'Sexual Harrasment (M)',
        type: 1
      }
      return obj
      break;
    case '109b':
      obj = {
        number: '109b',
        crime: 'Stalking (M)',
        type: 1
      }
      return obj
      break;
    case '109c':
      obj = {
        number: '109c',
        crime: 'Violating a Restraining Order (M)',
        type: 1
      }
      return obj
      break;
    case '110':
      obj = {
        number: '110',
        crime: 'Abuse (F&M)',
        type: 1
      }
      return obj
      break;
    case '110a':
      obj = {
        number: '110a',
        crime: 'Domestic Abuse (F)',
        type: 1
      }
      return obj
      break;
    case '110b':
      obj = {
        number: '110b',
        crime: 'Child Abuse/Neglect (F)',
        type: 1
      }
      return obj
      break;
    case '110c':
      obj = {
        number: '110c',
        crime: 'Animal Abuse (M)',
        type: 1
      }
      return obj
      break;
      //2
    case '201':
      obj = {
        number: '201',
        crime: 'Tresspassing (M)',
        type: 2
      }
      return obj
      break;
    case '202':
      obj = {
        number: '202',
        crime: 'Theft (M&F)',
        type: 2
      }
      return obj
      break;
    case '202a':
      obj = {
        number: '202a',
        crime: 'Petty Theft (M)',
        type: 2
      }
      return obj
      break;
    case '202b':
      obj = {
        number: '202b',
        crime: 'Theft (M)',
        type: 2
      }
      return obj
      break;
    case '202c':
      obj = {
        number: '202c',
        crime: 'Grand Theft (F)',
        type: 2
      }
      return obj
      break;
    case '202.1c':
      obj = {
        number: '202.1c',
        crime: 'Grand Theft Auto (F)',
        type: 2
      }
      return obj
      break;
    case '202.2c':
      obj = {
        number: '202.2c',
        crime: 'Grand Theft of a Firearm (F)',
        type: 2
      }
      return obj
      break;
    case '203':
      obj = {
        number: '203',
        crime: 'Robbery (F)',
        type: 2
      }
      return obj
      break;
    case '203a':
      obj = {
        number: '203a',
        crime: 'Armed Robbery (F)',
        type: 2
      }
      return obj
      break;
    case '204':
      obj = {
        number: '204',
        crime: 'Carjacking (M)',
        type: 2
      }
      return obj
      break;
    case '205':
      obj = {
        number: '205',
        crime: 'Forgery/Counterfeiting (F)',
        type: 2
      }
      return obj
      break;
    case '206':
      obj = {
        number: '206',
        crime: 'Extortion (F)',
        type: 2
      }
      return obj
      break;
    case '207':
      obj = {
        number: '207',
        crime: 'Possession of Stolen Property (M)',
        type: 2
      }
      return obj
      break;
    case '208':
      obj = {
        number: '208',
        crime: 'Fraud (F)',
        type: 2
      }
      return obj
      break;
    case '209':
      obj = {
        number: '209',
        crime: 'Possession of Burglary Tools (M)',
        type: 2
      }
      return obj
      break;
    case '210':
      obj = {
        number: '210',
        crime: 'Breaking and Entering (M)',
        type: 2
      }
      return obj
      break;
      //3
    case '301':
      obj = {
        number: '301',
        crime: 'Bribery (F)',
        type: 3
      }
      return obj
      break;
    case '301a':
      obj = {
        number: '301a',
        crime: 'Bribing a Government Official (F)',
        type: 3
      }
      return obj
      break;
    case '301b':
      obj = {
        number: '301b',
        crime: 'Recieving a Bribe (F)',
        type: 3
      }
      return obj
      break;
    case '302':
      obj = {
        number: '302',
        crime: 'Refusing to Pay a Fine (M)',
        type: 3
      }
      return obj
      break;
    case '303':
      obj = {
        number: '303',
        crime: 'Resisting Arrest (M)',
        type: 3
      }
      return obj
      break;
    case '303a':
      obj = {
        number: '303a',
        crime: 'Resisting with intent to injure an official (F)',
        type: 3
      }
      return obj
      break;
    case '303b':
      obj = {
        number: '303b',
        crime: 'Escaping custody (F)',
        type: 3
      }
      return obj
      break;
    case '304':
      obj = {
        number: '304',
        crime: 'Obstruction (M)',
        type: 3
      }
      return obj
      break;
    case '304a':
      obj = {
        number: '304a',
        crime: 'Misuse of a Government Hotline (M)',
        type: 3
      }
      return obj
      break;
    case '304b':
      obj = {
        number: '304b',
        crime: 'Tampering with Evidence (M)',
        type: 3
      }
      return obj
      break;
    case '304c':
      obj = {
        number: '304c',
        crime: 'Tresspassing a Private Crime Scene (M)',
        type: 3
      }
      return obj
      break;
    case '305':
      obj = {
        number: '305',
        crime: 'Harboring or Aiding a suspect (M)',
        type: 3
      }
      return obj
      break;
    case '306':
      obj = {
        number: '306',
        crime: 'Impersonation of a Government Employee (F)',
        type: 3
      }
      return obj
      break;
    case '307':
      obj = {
        number: '307',
        crime: 'Corruption (F)',
        type: 3
      }
      return obj
      break;
    case '307a':
      obj = {
        number: '307a',
        crime: 'Corruption of Public Office (F)',
        type: 3
      }
      return obj
      break;
    case '307b':
      obj = {
        number: '307b',
        crime: 'Corruption of Public Duty (F)',
        type: 3
      }
      return obj
      break;
    case '308':
      obj = {
        number: '308',
        crime: 'Contempt of Court (F)',
        type: 3
      }
      return obj
      break;
      //4
    case '401':
      obj = {
        number: '401',
        crime: 'Disorderly Conduct (M)',
        type: 4
      }
      return obj
      break;
    case '401a':
      obj = {
        number: '401a',
        crime: 'Intoxicated and Disorderly (M)',
        type: 4
      }
      return obj
      break;
    case '402':
      obj = {
        number: '402',
        crime: 'Indecent Exposure (M)',
        type: 4
      }
      return obj
      break;
    case '403':
      obj = {
        number: '403',
        crime: 'Attempted Terrorism (F)',
        type: 4
      }
      return obj
      break;
    case '404':
      obj = {
        number: '404',
        crime: 'Terrorism (F)',
        type: 4
      }
      return obj
      break;
    case '405':
      obj = {
        number: '405',
        crime: 'Distribution of an unsafe substance (F)',
        type: 4
      }
      return obj
      break;
    case '405a':
      obj = {
        number: '405',
        crime: 'Distribution of an environmentally unsafe substance (F)',
        type: 4
      }
      return obj
      break;
    case '405b':
      obj = {
        number: '405b',
        crime: 'Distribution of an unsafe substance with the intent to causes harm (F)',
        type: 4
      }
      return obj
      break;
    case '406':
      obj = {
        number: '406',
        crime: 'Possession of a Controlled Substance (F)',
        type: 4
      }
      return obj
      break;
    case '406a':
      obj = {
        number: '406a',
        crime: 'Class A (F)',
        type: 4
      }
      return obj
      break;
    case '406b':
      obj = {
        number: '406b',
        crime: 'Class B (F)',
        type: 4
      }
      return obj
      break;
    case '407':
      obj = {
        number: '407',
        crime: 'Distribution of a Controlled Substance (F)',
        type: 4
      }
      return obj
      break;
    case '407a':
      obj = {
        number: '407a',
        crime: 'Class A (F)',
        type: 4
      }
      return obj
      break;
    case '407b':
      obj = {
        number: '407b',
        crime: 'Class B (F)',
        type: 4
      }
      return obj
      break;
    case '408':
      obj = {
        number: '408',
        crime: 'Unlawful Possession of Alcohol (M)',
        type: 4
      }
      return obj
      break;
    case '409':
      obj = {
        number: '409',
        crime: 'Littering (M)',
        type: 4
      }
      return obj
      break;
    case '410':
      obj = {
        number: '410',
        crime: 'Rioting (M)',
        type: 4
      }
      return obj
      break;
    case '410a':
      obj = {
        number: '410a',
        crime: 'Rioting with Violence (M)',
        type: 4
      }
      return obj
      break;
    case '411':
      obj = {
        number: '411',
        crime: 'Disturbing the Peace (M)',
        type: 4
      }
      return obj
      break;
    case '412':
      obj = {
        number: '412',
        crime: 'Prostitution (M)',
        type: 4
      }
      return obj
      break;
    case '413':
      obj = {
        number: '413',
        crime: 'Pimping (F)',
        type: 4
      }
      return obj
      break;
      //5
    case '501':
      obj = {
        number: '501',
        crime: 'Speeding (M)',
        type: 5
      }
      return obj
      break;
    case '501a':
      obj = {
        number: '501a',
        crime: 'Speeding 10 over',
        type: 5
      }
      return obj
      break;
    case '501b':
      obj = {
        number: '501b',
        crime: 'Speeding 11-19 over',
        type: 5
      }
      return obj
      break;
    case '501c':
      obj = {
        number: '501c',
        crime: 'Speeding 20+ over (M)',
        type: 5
      }
      return obj
      break;
    case '501d':
      obj = {
        number: '501d',
        crime: 'Speeding 150+ over',
        type: 5
      }
      return obj
      break;
    case '502':
      obj = {
        number: '502',
        crime: 'Unroadworthy Vehicle (M)',
        type: 5
      }
      return obj
      break;
    case '502a':
      obj = {
        number: '502a',
        crime: 'No License Plate/Improper License Plate Displayed',
        type: 5
      }
      return obj
      break;
    case '502.1a':
      obj = {
        number: '502.1a',
        crime: 'Other Vehicles Registration/Plate (F)',
        type: 5
      }
      return obj
      break;
    case '502.1b':
      obj = {
        number: '502.1b',
        crime: 'Expired plates/registration (M)',
        type: 5
      }
      return obj
      break;
    case '502b':
      obj = {
        number: '502b',
        crime: 'No Vehicle Lights',
        type: 5
      }
      return obj
      break;
    case '502c':
      obj = {
        number: '502c',
        crime: 'No Turn Signals',
        type: 5
      }
      return obj
      break;
    case '502d':
      obj = {
        number: '502d',
        crime: 'Improper Window Tint',
        type: 5
      }
      return obj
      break;
    case '502e':
      obj = {
        number: '502e',
        crime: 'Improper Display/Use of Lights (M)',
        type: 5
      }
      return obj
      break;
    case '503':
      obj = {
        number: '503',
        crime: 'Improper Use of Vehicular Horn',
        type: 5
      }
      return obj
      break;
    case '504':
      obj = {
        number: '504',
        crime: 'DUI/DWI',
        type: 5
      }
      return obj
      break;
    case '504a':
      obj = {
        number: '504a',
        crime: 'DWI under alcohol (M)',
        type: 5
      }
      return obj
      break;
    case '504b':
      obj = {
        number: '504b',
        crime: 'DUI under narcotics (F)',
        type: 5
      }
      return obj
      break;
    case '505':
      obj = {
        number: '505',
        crime: 'Open Container of Alcohol in Vehicle',
        type: 5
      }
      return obj
      break;
    case '506':
      obj = {
        number: '506',
        crime: 'Improper vehicular restraint',
        type: 5
      }
      return obj
      break;
    case '506a':
      obj = {
        number: '506a',
        crime: 'Improper restraint of a child',
        type: 5
      }
      return obj
      break;
    case '507':
      obj = {
        number: '507',
        crime: 'Reckless Driving (M)',
        type: 5
      }
      return obj
      break;
    case '508':
      obj = {
        number: '508',
        crime: 'Hit and Run (M)',
        type: 5
      }
      return obj
      break;
    case '508a':
      obj = {
        number: '508a',
        crime: 'H&R of an Emergency Vehicle (F)',
        type: 5
      }
      return obj
      break;
    case '509':
      obj = {
        number: '509',
        crime: 'Failure to Provide Valid Identification (M)',
        type: 5
      }
      return obj
      break;
    case '509a':
      obj = {
        number: '509a',
        crime: 'Failure to Provide Valid Insurance',
        type: 5
      }
      return obj
      break;
    case '509b':
      obj = {
        number: '509b',
        crime: 'Failure to Provide Valid Registration',
        type: 5
      }
      return obj
      break;
    case '509c':
      obj = {
        number: '509c',
        crime: 'Failure to Provide Accurate Information',
        type: 5
      }
      return obj
      break;
    case '510':
      obj = {
        number: '510',
        crime: 'Fleeing a Law Enforcment Officer (F)',
        type: 5
      }
      return obj
      break;
    case '511':
      obj = {
        number: '511',
        crime: 'Participating in a Motor Vehicle Contest (M)',
        type: 5
      }
      return obj
      break;
    case '512':
      obj = {
        number: '512',
        crime: 'Improperly Parked Vehicle',
        type: 5
      }
      return obj
      break;
    case '513':
      obj = {
        number: '513',
        crime: 'Excessively loud Exhaust Note',
        type: 5
      }
      return obj
      break;
    case '514':
      obj = {
        number: '514',
        crime: 'Failure to yield for an Emergency Vehicle',
        type: 5
      }
      return obj
      break;
      //6
    case '601':
      obj = {
        number: '601',
        crime: 'Unlawful Possession of a Firearm (M)',
        type: 6
      }
      return obj
      break;
    case '601a':
      obj = {
        number: '601a',
        crime: 'Felon in Possession of a Firearm (M)',
        type: 6
      }
      return obj
      break;
    case '602':
      obj = {
        number: '602',
        crime: 'Illegal Discharge of a Firearm (M)',
        type: 6
      }
      return obj
      break;
    case '602a':
      obj = {
        number: '602a',
        crime: 'Illegal Discharge from a Vehicle (M)',
        type: 6
      }
      return obj
      break;
    case '602b':
      obj = {
        number: '602b',
        crime: 'Discharging within 50 yards of an Occupied Building (M)',
        type: 6
      }
      return obj
      break;
    case '603':
      obj = {
        number: '603',
        crime: 'Carrying a Concealed Firearm without Permit (M)',
        type: 6
      }
      return obj
      break;
    case '604':
      obj = {
        number: '604',
        crime: 'Possession of a Dangerous Device (M)',
        type: 6
      }
      return obj
      break;
    case '604a':
      obj = {
        number: '604a',
        crime: 'Possession of an Explosive Device (F)',
        type: 6
      }
      return obj
      break;
    case '605':
      obj = {
        number: '605',
        crime: 'Brandishing a Weapon (M)',
        type: 6
      }
      return obj
      break;
    case '605a':
      obj = {
        number: '605a',
        crime: 'Brandishing a Firearm (M)',
        type: 6
      }
      return obj
      break;
    case '606':
      obj = {
        number: '606',
        crime: 'Unlawful Distribution of a Firearm (F)',
        type: 6
      }
      return obj
      break;
    default:
      return 'Invalid Code'
  }
}

var string1 = `
M = Misdemeanor F = Felony

SECTION I | Crimes Against the Individual
101 Assault (M)
   101(a) Assault with a Deadly Weapon (M)
102 Battery (M)
   102(a) Battery with intent to cause serious harm (F)
   103(b) Sexual Battery (F)
104 Attempted Homicide (F)
105 Homicide (F)
   105(a) First Degree (F)
   105(b) Second Degree (F)
   105 (c) Capital (F)
106 Manslaughter (F)
   106(a) Vehicular Manslaughter (M)
   106(b) Weaponized Manslaughter (F)
107 Torture (F)
   107(a) Torture with Intent to Kill (F)
108 Rape (F)
109 Harassment (M)
   109(a) Sexual Harassment (M)
   109(b) Stalking (M)
   109(c) Violating a Restraining Order (M)
110 Abuse (F&M)
   110(a) Domestic Abuse (F)
   110(b) Child Abuse/Neglect (F)
   110(c) Animal Abuse (M)
`;

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

  if (cmd === `ping`) {
    let msg = await message.channel.send("Testing ping...")
    msg.edit(`Pong! Latency is ${message.createdAt - msg.createdAt}ms. API Latency is ${bot.ping}ms.`)
  } else
  if (cmd === `viewsection`) {
    switch (args[0]) {
      case 1:
        message.channel.send(string1)
        break;
      default:
        message.channel.send("Invalid Section. Sections: 1, 2, 3, 4, 5, 6")
    }
  }
});

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));

bot.login(process.env.token)

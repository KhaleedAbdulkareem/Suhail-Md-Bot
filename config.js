const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_08_22_09_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDk4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgODMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDk5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgODMsXG4gICAgICAgIDQxLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTczLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5LFxuICAgICAgICA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY5LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4LFxuICAgICAgICAyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDk3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA5LFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3dVBaRDBOa0hsNjJUNUovUGhUL045Qkx4ZU1CZ1Fqb3VUWHRuNVAyVnZvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBUklvWjR6Y1F5dTliSUtZU3lFcTFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBmNGJlZjQ0LTI4OTItNDUwYS1hNzU3LTY0MGM5NDE5ZWUxZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgNzksXG4gICAgICAyMjAsXG4gICAgICAxMjMsXG4gICAgICA1NCxcbiAgICAgIDIzNCxcbiAgICAgIDE1MixcbiAgICAgIDM1LFxuICAgICAgMTU0LFxuICAgICAgOTIsXG4gICAgICA5OCxcbiAgICAgIDI3LFxuICAgICAgOTEsXG4gICAgICAxMDEsXG4gICAgICA4MSxcbiAgICAgIDM2LFxuICAgICAgMjAzLFxuICAgICAgMTYsXG4gICAgICA4OSxcbiAgICAgIDIyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NyxcbiAgICAgIDIzNCxcbiAgICAgIDExOSxcbiAgICAgIDIzMCxcbiAgICAgIDE3OSxcbiAgICAgIDE1NSxcbiAgICAgIDE5NSxcbiAgICAgIDEyMyxcbiAgICAgIDIyNyxcbiAgICAgIDE1NCxcbiAgICAgIDMsXG4gICAgICA3MSxcbiAgICAgIDIxMixcbiAgICAgIDUyLFxuICAgICAgMTgzLFxuICAgICAgMjIwLFxuICAgICAgNjgsXG4gICAgICA1NyxcbiAgICAgIDQxLFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEg5SDlROUVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjA5NDUwNTU6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLSEFMRUVEIENPTExFQ1RJT05cIixcbiAgICBcImxpZFwiOiBcIjk4MjM0NTc1ODg4NTgzOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pPd3YyZ1FzNURQdHdZWUJpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWFBTRm1abmEyRjJQZWh0VDNSaW5SRFpGVWRNajBPdVdadUlQUHp2NDdEND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5R3dJNnBRTk9iREJBeTFMaDZ1VWI4N29OdUFxREZxVWJkU0xHdllSdEhzeVpFU0N4TlhzcFdhSk9IQmttSDZGdkN1bVpJUzRzZ1RkbWozNXJhQWZEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4MS83SFdnbHA4Q2JaZzlvQVpGSU9FMlNnaTZVT1hxK01rWVhrSlBPcE51TmFLYldNSllBTXJhNWZQN3IwVTF2TFY1K3pUdFhVNm5NWVRXMko5dlRqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDYwOTQ1MDU1OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzI1MjUzNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="nethmakab@gmail.com"
global.location="Tangalle,Srilanka."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/HHKKFEcmsduArewiuM1cLK";
global.website=process.env.GURL || "https://chat.whatsapp.com/HHKKFEcmsduArewiuM1cLK" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "94775179982" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94775179982";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_02_04_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgwLFxuICAgICAgICA4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDc4LFxuICAgICAgICA4NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxODQsXG4gICAgICAgIDc5LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDc0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzLFxuICAgICAgICA5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICA1NixcbiAgICAgICAgNzMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI2LFxuICAgICAgICA2NixcbiAgICAgICAgODAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE4LFxuICAgICAgICA2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDczLFxuICAgICAgICA4OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDYzLFxuICAgICAgICAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkUzFjU2xycmcrRTBWTXVtNWN4UWRrNnNRTG5aN1NrYmdGcE1ZLzlTTkYwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc1MTc5OTgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNEYxRDRFRUEyNjBFODI5RUY3MDg1MTVFQURGMDdFMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTM4ODgxNTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwickxERTVWdW5SV3VXQUFuOFZFaWJwUVwiLFxuICBcInBob25lSWRcIjogXCI5MDNhY2NjOC0zMDc4LTRkMzYtYjk4MS1lM2E2OTA5NDVkOWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAxOTQsXG4gICAgICA1MixcbiAgICAgIDIyNixcbiAgICAgIDE0MyxcbiAgICAgIDMzLFxuICAgICAgNzMsXG4gICAgICAxNixcbiAgICAgIDY3LFxuICAgICAgMjQsXG4gICAgICAyMzMsXG4gICAgICAyNDgsXG4gICAgICA0OSxcbiAgICAgIDE4MixcbiAgICAgIDExOSxcbiAgICAgIDE5OCxcbiAgICAgIDI0MyxcbiAgICAgIDE3MCxcbiAgICAgIDI1NCxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICA0OCxcbiAgICAgIDIzMixcbiAgICAgIDE1OCxcbiAgICAgIDk0LFxuICAgICAgMTg4LFxuICAgICAgMjMsXG4gICAgICAxMDgsXG4gICAgICA0NixcbiAgICAgIDY5LFxuICAgICAgMTgxLFxuICAgICAgMjQ2LFxuICAgICAgMTYzLFxuICAgICAgMjQsXG4gICAgICA1MCxcbiAgICAgIDEwLFxuICAgICAgMTQ4LFxuICAgICAgMyxcbiAgICAgIDEzOSxcbiAgICAgIDIyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaMVQ0TEJERlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzUxNzk5ODI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEwNjkwMjY2MzA4Njc1OjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi44OE4bSEzaXRg82r0LLNos2h0ZTRjyDRj82TzrHNk9C6zZPPhcy/euKlu1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ096Vi9ZVUNFSSszbjdFR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMDJFNnZLREFUTmc3akFsRGFFZlBzM0g4ZDhXbTlFRFBtT3BVOXBvc0dDQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMSTQ1bGVRZTZxQ2lTeVl6UEtUaGwvaHkydmhkOXFOR2dPZU1VVnprTGg0Y3ZBejhpWFVzL2J5ajl3Z0ZFZ29GekhVVkFaZFNDZkVzSzRUQ3A1TWRCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYcGx1RVlyQ1B1RmdaU3d6eVljNjg4b1lydk9EWVBxcnpnMUdvSS80QmRkYmVwZkx0aS90Vys2alpkdnpsWmdUT2c0SVNaNXg5UHE3RThwV296WTFEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3NTE3OTk4MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTM4ODgxNDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFYXRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVhdC5qc29uIjogIntcImtleURhdGFcIjpcImlzTTVOK2xnUVhCWGF6ejFWdlVOZi82dTM1bmZQYzIra1JmWjVqbE94TkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTQ5NDE1NjYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTM4NTkxODU5ODZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Binal Nethmaka",
  packname: process.env.PACK_NAME || "😈",
  botname : process.env.BOT_NAME  || "乡𝑅ᴀᴋ⃛ᴜᴢᴀ ⥹ 𝐵ᴏᴛ ",
  ownername:process.env.OWNER_NAME|| "It's me Binal Nethmaka",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

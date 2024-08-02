//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "263713885350";
global.sudo = process.env.SUDO || "263713885359";
global.owner = process.env.OWNER_NUMBER || "+27 61 672 8899";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia01LOEYzelJaSGIrdGhYenAyOUkzVEFqa0FieHlUL3V4Qk1hYVk3MmYwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1hGZEV4V09uMURnUEgrbE9EdkE3UlVUUmN0TnkzMnRtWGx2SHJIQTRrVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDS0s0SU5Zb0RGZEowam1mVkg3UjFwZVg0a0syeHAzalNYM3YrYjJ3VFhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQWN5MFFvaHVGRTZqdFRrbk1RUDVLaWc4dWdhWkdGN3BrbVg4QmRHc0Q0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNMYUxGWVRtTURSdVJwK0FrMThiUWw5K3ErSW1KQmhpTWxwOVpoTUhHV1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklVUnd2ZXpVVXlYMXZtWW45SHlTV1RhZ041Qis4TTBDYmZiOGFmVGM5aTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZTalBlS2wxU3huZ251bFJUelNXRWZKRER2ZEU5UEkzN0dVeE1pOE9tRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVUZWtRbGxYMGdPN3RRTGJ0RVdUZWlZSjdkbDR5YWprdTE0UnltYlNURT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklYR2ZiYWVJMWlYcSt2NElGeE04NXJsWldMVGF5UWkzVjJXL1h1MWlkK2FwemxRVm83MkVWbVRBNG8rTnhGZXhmY0k2bjBxQkFJVXcvczkzWGlsZmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJFY2xZNlpKLzh2bW9ha3NDem5sdnNpWFdBSDc1NTJibm5xbWdWemxOTElBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NjE2NzI4ODk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU5MjJFQUNEMTZGN0I5QzEwQTkxMTVGQUU5NEYxREMwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI2MzAwNDF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InN2MEw1dmw2VHR5OVpscjlYQlZQWkEiLCJwaG9uZUlkIjoiN2ZkMGViZTktZTk1NC00ODYxLWEzODktYmM0YmI2NTZmNWU0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBmTEdKcms1endjQVVtZkJ2a25mY3gyUGE0dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJaG93QzZEUXhxaDRNcVJ0cGVnQ3d5aGh2bUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWlJTUTNZWkwiLCJtZSI6eyJpZCI6IjI3NjE2NzI4ODk5OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ3liZXJ+fOKAolNoZWxsZWjigKJ8In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNeW1vZDRFRUlmL3RMVUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJncUxqNkFKNnZiUTE3T3V0RlNlUUh0NWg0b2hqZ3dMQnlPL09Zc2QwSm1NPSIsImFjY291bnRTaWduYXR1cmUiOiJLZGFWb2M2OXU2ZzRyTnkwMVZWYmprYUl1T2I1U2RzMm1CWmVwb056VXFhS2hzckZISjRYN2JRTlMyWS84MzNlZ1IzV1NxaXNvQVZOOXcvdCtlMVlCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaU1mVSs2SFhLOGVBWkl6TE1Ldm1JOUJzbjVoM0V0cXFuLzgvNFU2b0VFTnA0clpHdExGRm9aR1VxYkcrcTFRV0xlZXRXTWx4QmcrUEhQTFFJTElqaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzYxNjcyODg5OTo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllLaTQrZ0NlcjIwTmV6cnJSVW5rQjdlWWVLSVk0TUN3Y2p2em1MSGRDWmoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2MzAwMzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTE1WIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Master chief™`",
  author: process.env.PACK_AUTHER || "Master chief",
  packname: process.env.PACK_NAME || "chief",
  botname: process.env.BOT_NAME || "Master chief",
  ownername: process.env.OWNER_NAME || "Master chief",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "chief").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

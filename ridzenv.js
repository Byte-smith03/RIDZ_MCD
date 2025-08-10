const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'Ridz~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZ6cHFJUm1pREdpUTEwQ3UxWFpiVHI1MlNkcDV0TFBiTVR3UXd1L0VYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFZMZnhUNjZ6VmFwN0hLMmw1VkNlVHB0U0thakNtUEFkK0xKUksrQ3pBQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SVZRdHliSllLc0tGcm1MNmRzY1Z3YTdGb09Ebmp3cjFZM2dPLzZBMm1ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUkZnMzBYTjFSdC9GZjVjYmNvNmgyb2Z0MkErT3JKZ1ZSMCtUV3VXT0dZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdOZlQ4Rmd4eE5TYWwvdCtnU3UxVFVVa3lTc0R0cGN6MUdORkk2ODFza1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhTUUlBU2FLUzYvTHZWUkM0R2ZqZDA3Q0tFb05kdmxONDk4VkUvSlkxeUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU1CM0FMTUxWeXdMVzdvbEozQTBXUlVFZFhsTnNic2VSZFBFV3Q4Q1JHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVVic3VqbGQ0dENWYmhPSjVpZTBzZXVFK0FkS3RhNlVtUmFmQ2hmSXJYdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZSdjNqdjFaYjd2a2RpWFBxbkYxVXVWWU95VUdhRlZhL0wxQ2tjc1B4R2ttcTlpbVhESUlxNEFwTTVUWGVtTFZhKy9NeHJIMHpRY2NteERGQSsyVEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJObnI4S21ZYzZveExndVpxNUlZZFduWUQ0Yk5pdEVEWmZod1pRZXhPa09nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc0MjYzNDA4OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFRkVEM0NDMTY0NzMwRjA0RUMxMDVEQUJBQTU3NzRBMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0ODQzMzY3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTY3NDI2MzQwODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDE5MDlBQ0Y4NTQyQTIwQzQxNTcxNUVBNzdCODFGN0YifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDg0MzM2N31dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQ0NTUlpQN1oiLCJtZSI6eyJpZCI6IjI1Njc0MjYzNDA4OTo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTg2NTM5NjU3MTk1NjUzOjVAbGlkIiwibmFtZSI6IlRoZSBEZXZlbG9wZXIgMDMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pYSDNxNEhFTldSNDhRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhRS0N3eFEzMUZXbk8xRE90R2ZZdHNzSmwrYmp0N1JUSnJqNjBtSGNJa2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlR0U0sxWXRmVkRZRkhrNEJiYXhvcTUxMlRJdDVTbzE0Mmc3VEtRVXJ3WDJZU2t5cmtBSUx0aHpUbWs4bzY5QjNWQmUzQjg0d0lPVkJKbnJ3bFM5ZUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMcndLMzBra2s1UEpMeDhNOEZyaC9vV2hQWGd2WDNwaWtReDRDUTBrYkFMTEhzMXRPUUozMTNzMTZlY1R4cTZPZmtCN3VVZkcrWGpFbzFpVHlTSjFDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc0MjYzNDA4OTo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNVQ2dzTVVOOVJWcHp0UXpyUm4yTGJMQ1pmbTQ3ZTBVeWE0K3RKaDNDSkoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDg0MzM2NCwibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBOUYifQ==' 
// Owner Setting
global.xprefix = process.env.BOT_PREFIX ||'.'
global.owner = ["256742634089",]
global.error = ["6666",]
global.ownername = process.env.OWNER_NAME ||'Ridz Coder'
global.antidelete = process.env.ANTI_DELETE || true
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Bot Setting
global.botname = "𝑹𝑰𝑫𝒁 𝑴𝑪𝑫"
global.botversion = "1.6.0"
global.typebot = "Plugin"
global.session = "ridzsession"
global.connect = true
global.statusview = process.env.AUTO_STATUS || true
global.antilinkgc = process.env.ANTILINK_GROUP || true
global.autoTyping = process.env.AUTO_TYPE || false
global.autoRecord = process.env.AUTO_RECORD || false
global.thumb = "https://files.catbox.moe/4ryp6k.jpg"
global.wagc = "https://whatsapp.com/channel/0029VbB5hQD9mrGjnplDZp2l"
global.caption = "Cʀᴇᴀᴛᴇᴅ ʙʏ Rɪᴅᴢ Cᴏᴅᴇʀ"
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Sticker Marker
global.packname = process.env.PACK_NAME ||'𝑹𝑰𝑫𝒁 𝑴𝑪𝑫'
global.packname = process.env.AUTHOR||'𝐏𝐀𝐂𝐊𝐒'
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Respon Message
global.mess = {
    success: '✅ Done.',
    admin: '🚨 Admin only.',
    premium: '🆘must be a premium user.',
    botAdmin: '🤖 Make me admin first.',
    owner: '👑 Owner only.',
    OnlyGrup: '👥 Group only.',
    private: '📩 Private chat only.',
    wait: '⏳ Processing...',
    error: '⚠️ Error occurred.',
}
//━━━━━━━━━━━━━━━━━━━━━━━━//
// File Update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update File 📁 : ${__filename}`)
delete require.cache[file]
require(file)
})

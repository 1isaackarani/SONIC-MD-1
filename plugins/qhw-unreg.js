//import db from '../lib/database.js'

import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) throw `✔ *Enter 💝 SONIC-MD 💝 serial number*\nCheck your 💝 SONIC-MD 💝 serial number with the command...\n\n*${usedPrefix}dinuserial*`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '😤 *Incorrect 💝 SONIC-MD 💝 serial number*'
  user.registered = false
  m.reply(`💭 Un Register ok by 💝 SONIC-MD 💝`)
}
handler.help = ['unreg <Num Serie>'] 
handler.tags = ['rg']

handler.command = ['unreg', 'unhentai'] 
handler.register = true

export default handler


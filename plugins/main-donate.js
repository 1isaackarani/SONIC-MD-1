
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
🇱🇰 *DONATE* 🇱🇰
If you get more info of 💝 Queen Hentai 💝 Please Contact 94740804536 💰`
let img = 'https://i.imgur.com/bFEC7lC.jpeg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donasi'] 

export default handler

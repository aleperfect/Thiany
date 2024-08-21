let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝑨𝒗𝒊𝒔𝒐: ${pesan}`
  let teks = `𝐀𝐂𝐓𝐈𝐕𝐄𝐍𝐒𝐄 𝐌𝐑𝐃𝐒 🤨
💌 ${oi}\n\n🍷 *𝑴𝒊𝒆𝒎𝒃𝒓𝒐𝒔:*\n`
  for (let mem of participants) {
  teks += `•↬🥷🏻 @${mem.id.split('@')[0]}\n`}
  teks += `•↬💋 𝐓𝐡𝐢𝐚𝐧𝐲 𝐁𝐨𝐭`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler
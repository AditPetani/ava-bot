const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['6283129240927','6285658233591','447405674627','62895393396394','6281390850728']
global.premium = ['6283129240927','6285658233591','447405674627','62895393396394','081390850728']
global.ownername = 'AvaTeam'
global.botname = 'Ava - Bot'
global.packname = '© by Ava Bot'
global.gc = 'https://chat.whatsapp.com/GRztipN63SKDVG8duGYj11'
global.linkyt = 'https://youtube.com/channel/UCFTaf_w-73BpwASJ-MSufrQ'
global.linkgc = 'https://chat.whatsapp.com/GRztipN63SKDVG8duGYj11'
global.limitawal = '20'
global.author = '@Ava-Dit'
global.sessionName = 'ava'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = 'terserah'
global.mess = {
    success: 'Berhasil',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 20
}
global.gambar = 'https://telegra.ph/file/6488fb8af47415f00b234.jpg' //disini gambar bot nya lu bisa ganti pink gambar ini dengan link gambar punya lu
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://telegra.ph/file/6488fb8af47415f00b234.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

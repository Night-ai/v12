const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async(client, message, args) => {
  if (!db.has(`premod_${message.guild.id}`) == true) {
    
      
      return message.channel.send(" Bu sunucuda **premium mod aktif değil**, bu sebepten dolayı premium sunucu kodlarını kullanamazsınız.")

    
  } else {
 if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Bu komutu kullanmak için`MESAJLARI_YÖNET` yetkisine sahip olmalısın!')
  let kanal = message.mentions.channels.first()

  if (!kanal) return message.channel.send(`Kanalıda etiketlemelisiniz.`)
  
    db.delete(`otobsilici_${kanal.id+message.guild.id}`, "<#"+kanal.id+">")
    

      message.channel.send(`**Artık ${kanal} adlı kanalda bir bot mesaj yazarsa 3 saniye sonra silmeyecek.**`)
    
  
 
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: `Yeterli Yetki Yok`
};

exports.help = {
  name: 'ustapat',
  description: 'Botun pingini gösterir.',
  usage: ''
};
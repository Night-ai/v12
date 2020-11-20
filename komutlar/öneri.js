const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if (!db.has(`premod_${message.guild.id}`) == true) {
    
      
      return message.channel.send(" Bu sunucuda **premium mod aktif değil**, bu sebepten dolayı premium sunucu kodlarını kullanamazsınız.")

    
  } else {
//Komutun Kodları
  const öneri = args.join(' ');
  if(!öneri) return message.channel.send('Ne önereceğim');
  const oneri_kanal = client.channels.get('656179448709906432');
    oneri_kanal.send(
  new Discord.RichEmbed()  
  .setTitle('Bir öneri var')
    .setDescription('Öneri:'+öneri+'\n Öneren:'+message.author.tag+'\nKomut kullandığı sunucu  : '+message.guild.name)
    .setThumbnail(message.author.avatarURL)
    .setColor('RANDOM')
  )
  oneri_kanal.send('');
message.channel.send('**Öneriniz iletildi!**');
};
}
exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'öneri',//Komutun adı (Komutu girerken lazım olucak)
  description: 'önerinizi bize söylersiniz.',//Komutun Açıklaması
  usage: 'öneri' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
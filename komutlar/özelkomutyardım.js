const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Özel Komut')
.setTimestamp()
.setDescription('!yardımkomut komutismi yazarak komutların ne işe yaradığını bulabilirsiniz')
.addField('!özel-komut-ekle','özel komut eklersiniz. örnek: kullanıcı: sa bot: as')
.addField('!özel-komut-sil','eklediğiniz özel komutu silersiniz.')
.addField('!özel-komut-liste','eklediğiniz özel komutlara bakarsınız.')

.setFooter('2019 Nemesis Özel komut Sistemi.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'özelkomutyardım',
  description: 'Özelkomutkomutlarını gösterir.',
  usage: 'özelkomutyardım'
};
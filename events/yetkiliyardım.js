const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** d!ban @kullanıcı = Herhangi Bir Kullanıcıyı Banlarsınız.\n**•** d!kick = Herhangi Bir Kullanıcıyı Atarsınız.\n**•** d!unban @kullanıcı = Herhangi Bir Kullanıcının Banını Açarsınız.\n**•** d!otorol rol = İstediğiniz Rolü Girişte Verdirmesini Sağlayabilirsiniz.\n**•** d!sunucutanıt = Sunucunuzu Tanıtabilirsiniz.\n**•** d!rolbilgi ? İstediğiniz Rolün Bilgilerini Gösterir.\n**•** d!temizle = Herhangi Bir Miktarda Mesajları Siler.\n**•** d!ses-kanal-aç = Bir Ses Kanalı Oluşturur.\n**•** d!yazı-kanal-aç = Bir Yazı Kanalı Oluşturur.\n**•** d!slowmode = Sunucuda Yavaş Mod Açar.\n**•** d!ailemiz = Botun Sunucularını Gösterir.\n**•** d!sustur = Seçtiğiniz Kullanıcıyı İstediğiniz Süre Boyunca Susturur.\n**•** d!kanalıkilitle = İstediğiniz Kanalı Kilitler\n**•** d!kilitaç = İstediğiniz Kanalın Kilidini Açar.')
      .addField("» Linkler", `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=775428604825567273&permissions=8&scope=bot)` + "**\n**"+`[DBL Oyver](yakında)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/4ar5mUD)`, false)
      .setFooter('Yetkili')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili '
};

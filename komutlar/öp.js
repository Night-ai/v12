const Discord = require("discord.js");
let ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = function(client, msg, author) {
  let yazi = msg.mentions.members.first();
  if (!yazi) {
    msg.channel.sendMessage(
      "**Örnek Kullanım:** `" +
        prefix +
        "öp <@kullanıcı>`"
    );
  }
  if (yazi) {
    const Embed = new Discord.RichEmbed()
      .setTitle("")
      .setDescription(
        `Vooov ❤ ** <@${msg.author.id}> Adlı Kullanıcı ${yazi} Adlı Kullanıcıyı Öptü!**`
      )
      .setColor("RANDOM")
      .setImage(
        "https://cdn.discordapp.com/attachments/634056817017880586/645300230790840360/tenor-1.gif"
      );
    msg.channel.sendMessage(Embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "öp",
  description: "Bu komut ile istediğiniz kişiye öpersin!",
  usage: "öp <@kullanıcı>"
};
const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {


    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bu komutu kullanabilmek için yönetici iznine sahip olmalısın!")
    const emoji = (client.emojis.find("name", "hata").toString())
    if(!message.guild) {
        const hataemba = new Discord.RichEmbed()
        .setTitle(`${emoji} Bu komut özel mesajlarda kullanıma kapalıdır.`)
        return message.channel.send(hataemba)
    }

    db.delete(`güvenlik_${message.guild.id}`)

    return message.reply("Güvenlik kanalı başarı ile sıfırlanmıştır.")
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permlevel: 0,
};


exports.help = {
    name: "güvenlik-sıfırla",
    descripton: "güvenlik kanalını sıfırlarsınız",
    usage: "güvenlik-sıfırla"
}
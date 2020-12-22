const Discord = require("discord.js");

exports.run = (client, message) => {

let sa = new Discord.MessageEmbed()
  .setImage(`https://i.hizliresim.com/UHbFEj.gif`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/766607862704635914/786309869950074920/752565189978751066.png`)
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField(
      "Veriler", 
      `> <a:tk:786574925392773120> Toplam sunucu: **${client.guilds.cache.size}** 
\n> <a:tk:786574925392773120> Toplam kullanıcı: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** 
\n> <a:tk:786574925392773120> Toplam kanal: **${client.channels.cache.size}**`) 
    
    .addField("Sürümler",
`> <a:dvlp:785757589039611904> Discord.js sürümü: **v${Discord.version}** 
\n> <a:dvlp:785757589039611904> Node.js sürümü: **${process.version}**`
    ) 
    .addField("Gecikmeler",
`> <a:dnd:786574945076903986> Bot pingi: **${client.ws.ping}**
 \n> <a:dnd:786574945076903986> Mesaj gecikmesi: **${new Date().getTime() -
        message.createdTimestamp}**`)    
    .setTimestamp()
  message.channel.send(sa);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["istatistik", "i"]
};

exports.help = {
  name: "istatistik",
  description: "Türkiyenin Saatini Gösterir ",
  usage: "gç"
};
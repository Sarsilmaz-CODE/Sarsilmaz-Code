const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setFooter("SARSILMAZ BOT")
  .setDescription(`[Botu Direk Davet Etmek İçin Bas](https://discord.com/oauth2/authorize?client_id=766391721662873621&scope=bot&permissions=805314622)\n \n[Siteden Davet Etmek İçin Bas](https://sarsilmaz-bot-developer.glitch.me)`)
  message.channel.send(davet)
 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["al", "DAVET"],
  permlevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botu davet edersiniz',
  usage: 'davet'
};
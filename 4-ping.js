const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const ping = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`Ping: ${client.ws.ping}`)
  message.channel.send(ping)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ping"],
  permlevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Bot pingini gösterir',
  usage: 'ping'
};
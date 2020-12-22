const Discord = require('discord.js');
exports.run = (client, message, args) => {

 if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu Komutu Kullanabilmek İçin **Yönetici** Rolüne Sahip Olmalısın. Maalesef Senin Yetkin Yok Kullanamazsın`).then(m => m.delete({ timeout: 10000}));



  const davet = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setFooter("SARSILMAZ BOT")
  .setDescription(`
<a:unlm:785184315540897803>Küfür kullanımı yasaktır. (İngilizce, kısaltma, ima) 

<a:unlm:785184315540897803>Reklam yasaktır. (Dm'den, kişisel sunucu, özel durumda) 

<a:unlm:785184315540897803>Örgütleşmek yasaktır .

<a:unlm:785184315540897803>Piskolojik baskı yapmak yasaktır .

<a:unlm:785184315540897803>Kışkırtmak, kavga çıkartmak yasaktır .

<a:unlm:785184315540897803>Yetkililere karşı çıkmak, sorgulama yasaktır. (haksız olduğu durum hariç) 

<a:unlm:785184315540897803>Yetkililere ses yükseltmek, hakaret etmek yasaktır.

<a:unlm:785184315540897803>Kişisel sorunları sunucuya yansıtmak yasaktır. 

<a:unlm:785184315540897803>Abartılmadığı sürece spam, flood yapmak serbesttir. 

<a:unlm:785184315540897803>Irkçılık, dinsel ayrım, sözel taciz, özelden taciz yasaktır. 

<a:unlm:785184315540897803>Korsan içerik paylaşmak, +18 video, fotoğraf paylaşmak yasaktır. 

<a:unlm:785184315540897803>Bir kişinin discord profilini kopyalamak yasaktır. 

<a:unlm:785184315540897803>Kişisel bilgileri genel sohbet kanallarında paylaşmak yasaktır. 

<a:unlm:785184315540897803>+18 profil yasaktır. 

<a:unlm:785184315540897803>Politik, siyasi, dini konularda entelektüel düzeyde tartışmak serbesttir, ancak kavga ederseniz bu durumun Affı yoktur. 


<a:unlm:785184315540897803>(SARSILMAZ BOTTA REKLAM ENGEL MODU MEVCUTTUR 3 KEZ REKLAM YAPARSANIZ DİREK SUNUCUDAN ATILIRSINIZ BİLGİNİZ OLSUN)`) 
//resim Ekler veya gif  .setImage(``)
  message.channel.send(davet) 
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Kural", "kural"],
  permlevel: 0
};

exports.help = {
  name: 'Kural',
  description: 'Botu davet edersiniz',
  usage: 'kural'
};
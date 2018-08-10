const Discord = require('discord.js');

const cevaplar = [
    "Adamın biri güneşte yanmış, ay da düz.",
    "Geçen gün taksi çevirdim hala dönüyor.",
    "ÇaImak fiiIinin geIecek zamanı nedir? Hapse girmek.",
    "Adamın biri kızmış istemeye gelmişler.",
    "Ayda 5 milyon kazanma ister misin? Evet.  O zaman Ay’a git.",
    "Adamın kafası atmış bacakları eşek."
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: .espri Ve Bişey Yaz Rastgele :)')
    else message.channel.send(cevap)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Bedava Espri Veriyor Dene Bence',
  usage: 'espri'
};

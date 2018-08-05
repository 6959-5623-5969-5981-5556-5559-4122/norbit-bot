const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("<@449283187559104525>")
        .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtN0VRoIbNHN69AZKlSE371G-pIsKToky-Gi_8xQ1_paOPKJd")
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOLqFvuBZdedyCyf0FIYic6BIdusXzmqALH88an8M2Odp5Xtwow")
        .setColor(0x00AE86)
        .addField("Lakabı", "TurkOglu", true)
        .addField("Yetenekleri", `
        *HACKER*
        *HER TÜRLÜ VİDEOLARI EDİTLER.*`, true)
   .addField("Nasıl Birisidir", `İyi Birisidir.`, true)
   .addField("En Çok Sevdiği Şey", "Bota komut eklemek!!", true)

   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yapımcı',
  description: 'YAPIMCI HAKKINDA BİLGİ VERİR',
  usage: 'yapımcı'
};

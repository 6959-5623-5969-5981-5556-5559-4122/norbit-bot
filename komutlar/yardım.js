const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
	  	  let mesaj = args.slice(0).join(' ');

if (mesaj === "") {
const embed1 = new Discord.RichEmbed()
		.setTitle("**KOMUTLAR**")
		.setColor(0x00AE86)
		.setThumbnail("https://cdn0.iconfinder.com/data/icons/cosmo-multimedia/40/terminal_application-512.png")
        .addField('**EĞLENCE KOMUTLARI**',`${prefix}help eğlence`, true)
        ////.addField('**MÜZİK KOMUTLARI**',`${prefix}help müzik`, true)
        .addField('**YARDIMCI KOMUTLAR**', `${prefix}help yardımcı`, true)
        .addField('**MODERATÖR KOMUTLARI**',`${prefix}help moderatör`, true)
		.addField('**SAHİP KOMUTLARI**',`${prefix}help sahip`, true)
		.addField('**MÜZİK**',`${prefix}help müzik **BAKIMDA**`, true)
message.channel.send(embed1);
}

		  ////eğlence
 if (mesaj === "eğlence") {
	const embed2 = new Discord.RichEmbed()
		.setTitle("**EĞLENCE KOMUTLARI**")
		.setColor(0x00AE86)
		.setThumbnail("https://t6.rbxcdn.com/35aaf7b5feea791a6df46401600d6ce1")
		.setDescription(`**-8ball**:Sihirli 8ball sorduğunuz soruyu cevaplar.
**.emojiyazı**:Mesajınızı emojiye çevirir.
**.mesajküçült**:Mesajınızı küçültür.
**.lmgtfy**:Mesajınızı lmgtfy de aratır.
**.leet**:Mesajınızı leet haline getirir.
**.stresçarkı**:Stres çarkı çevirir.
**.ascii**:Mesajınızı ascii formatına çevirir.
**.çekiç**:Belirtilen kişiye çekiç atar.
**.gizlimesaj**:Mesajınızı gizli bir mesaja çevirir.
**.dalgageç**:Başkaları ile dalga geçer.
**.grandayy**:fotoya grandayy yazısı ekler.
**.yazıtura**:Yazı tura atar.
**.jpeg**:resmin kalitesini düşürür.
**.lucy**:Lucy The Axe hakkında bilgi verir.
**.mesajdöndür**:Mesajınızı tersden yazar.
**.eski**:Resmi eskitir.
**.yaz**:İstediğiniz şeyi bota yazdırır.
**.pokemon**:Belirtilen pokemon hakkında bilgi verir.
**.trump**:Mesajınızı illegal hale getirir.
**.slots**:Slot oyunu oynar.
**.werebeaver**:Werebeaver The Beaver hakkında bilgi verir.
**.woodie**:Woodie The Lumberjack hakkında bilgi verir.`)
message.channel.send(embed2);
}

if (mesaj === "müzik") {
	////müzik
	const embed3 = new Discord.RichEmbed()
		.setTitle("**MÜZİK KOMUTLARI**")
		.setColor(0x00AE86)
		.setThumbnail("https://yt3.ggpht.com/pHwZj3tkgC3SJFbuqebBoT7WtVcIwAijEmcbe9VDCauv9ZlG6uS2zjvZQUSO7SfFqa3xjYqGp_L4QbM7=s900-mo-c-c0xffffffff-rj-k-no")
		.setDescription(`**-join**:Mesajı gönderenin kanalına katılır.
**.leave**:Mesajı gönderenin kanalından ayrılır.
**.add**: Link/Şarkı adı ile sıraya şarkı ekler.
**.queue**:Kuyruğu gösterir.
**.play**:Sıradaki şarkıyı oynatır.
**BAKIMDA**
:AŞAĞIDAKI KOMUTLAR YALNIZCA PLAY KOMUTU ÇALIŞIYORKEN ÇALIŞIR:
**BAKIMDA**
**.pause**:Müziği duraklatır.
**.resume**:Müziği sürdürür.
**.skip**:Çalmakta olan şarkıyı atlar.
**.volume+(+++)**:Ses şiddetini 2%/+ kadar arttırır.
**.volume-(---)**:Ses şiddetini 2%/- kadar azaltır.`)
	message.channel.send(embed3);
}
if (mesaj === "yardımcı") {
	////yardımcı
	const embed4 = new Discord.RichEmbed()
		.setTitle("**YARDIMCI KOMUTLAR**")
		.setColor(0x00AE86)
		.setThumbnail("https://www.acelerartech.com/wp-content/uploads/2017/01/Virtual-Assistant-single.png")
		.setDescription(`**-davet**:Botu sunucunuza davet etmeniz için davet linkini gönderir.
**.avatar**:Kendi avatarımızı/Birinin avatarını görmenizi sağlar.
**.botbilgi**:Bot ile ilgili bilgi verir.
**.bsohbet**:Bot İle Sohbet Mesajlarını Görüntüler.
**.hesapla**:Belirtilen işlemi yapar.
**.ping**:Botun pingini gösterir.
**.kullanıcıbilgim**:Komutu kullanan kişi hakkında bilgi verir.
**.discrim**:Belirtilen Tag a sahip kişileri belirtir.
**.kısalt**:Linkinizi kısaltır.
**.report**:Kişiyi şikayet eder.
**.hesapla**:Matematik işlemi yapar.
**.sunucubilgi**:Sunucu hakkında bilgi verir.
**.severicon**:Sunucu Resminin Linkini Atar.
**.yardım**:Tüm komutları gösterir.
**.şifre**:Rastgele bir şifre oluşturur.`)
	message.channel.send(embed4);
}
if (mesaj === "moderatör") {
	////moderatör
	const embed5 = new Discord.RichEmbed()
		.setTitle("**MODERATÖR KOMUTLARI**")
		.setColor(0x00AE86)
		.setThumbnail("https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/8/86/Modpin.png/revision/latest?cb=20180103214614")
		.setDescription(`**-ban**:İstediğiniz kişiyi banlar.
**.kick**:İstediğiniz kişiyi sunucudan atar.
**.sustur**:İstediğiniz kişiyi  susturur.
**.kilit-**:İstediğiniz Kanalı Kilitler
**.temizle**:Belirlenen miktar mesajı siler.
**.unban**:İstediğiniz kişinin banını kaldırır.
**.uyar**:İstediğiniz kişiyi uyarır.`)
	message.channel.send(embed5);
}
if (mesaj === "sahip") {
	////sahip
		const embed6 = new Discord.RichEmbed()
		.setTitle("**SAHİP KOMUTLARI**")
		.setColor(0x00AE86)
		.setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBffPwoNvIMDOsSu6MN0TcqFxB-7fqFeJTuQz-22v36yY3ISS")
		.setDescription(`**-eval**:Kod denemek için kullanılır.
**.load**:Yeni eklenen komutu yükler.
**.rr**:Botu yeniden başlatır.
**.unload**:İstediğiniz bir komutu devre dışı bırakır.
`)
	message.channel.send(embed6);
}

  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};

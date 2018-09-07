const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const bot = new Discord.Client();
const express = require('express');
const app = express();
const http = require('http');
let coins = require("./coins.json");
let xp = require("./xp.json");
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === "benimle çıkarmısın") {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage("OOO BİR TEKLİF VARR BAKALIM NE DİYECEKKK!!!");
		} else {
		msg.reply("OOO BİR TEKLİF VARR BAKALIM NE DİYECEKKK!!!");
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === "bb") {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage("Görüşmek Üzere Adamsınn");
		} else {
		msg.reply("Görüşmek Üzere Adamsınn");
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hg') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage("Kim geldi Hoşgeldi :)");
		} else {
		msg.reply("Kim geldi Hoşgeldi :)");
		}
	}
});

client.on('message', msg => {
  if (msg.content === prefix + 'kurabiye') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage("Canım gel sana kurabiye vercem ısırrr. 🍪");
		} else {
		msg.reply("Canım gel sana kurabiye vercem ısırrr. 🍪");
    msg.react("🍪")
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage("Aleyküm selam,  hoş geldin");
		} else {
		msg.reply("Aleyküm selam, hoş geldin");
    msg.react(":regional_indicator_a: :regional_indicator_s:")
		}
	}
});

client.on('message', msg => {
  if (msg.content === prefix + 'patlıcan') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage("**SANA PATLICAN ALDIM AL YE 🍆**");
		} else {
		msg.reply("**SANA PATLICAN ALDIM AL YE 🍆**");
    msg.react("🍆")
		}
	}
});

client.on('message', msg => {
  if (msg.content === prefix + 'pasta') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage("**Madem çok istedin al ye pastaa!**");
		} else {
		msg.reply("**Madem çok istedin al ye pastaa!**");
    msg.react("🎂")
		}
	}
});

client.on('message', msg => {
  if (msg.content === prefix + 'et') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage("**Et Yemek Sağlıklıdır Benim Gibi Et Ye**");
		} else {
		msg.reply("**Et Yemek Sağlıklıdır Benim Gibi Et Ye.**");
    msg.react("🍗")
		}
	}
});

client.on('message', msg => {
  if (msg.content === prefix + 'hamburger') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage("**Hamguer En Sevdiğim Yemektir Sen De Seviyorsan Adamsınn**");
		} else {
		msg.reply("**Hamguer En Sevdiğim Yemektir Sen De Seviyorsan Adamsınn**");
    msg.react("🍔")
		}
	}
});

client.on('message', msg => {
  if (msg.content === prefix + 'donut') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage("**Bunu En çok POLİS'ler Sever Yoksa Sen Polis misinnn**");
		} else {
		msg.reply("**Bunu En çok POLİS'ler Sever Yoksa Sen Polis misinnn**");
    msg.react("🍩")
		}
	}
});

client.on('message', msg => {
  if (msg.content === prefix + 'karpuz') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage("**Karpuzu Yerkn Dikkat Et Kan çıkmasın 😜**");
		} else {
		msg.reply("**Karpuzu Yerkn Dikkat Et Kan çıkmasın 😜**");
    msg.react("🍉")
		}
	}
});

client.on('message', msg => {
  if (msg.content === prefix + 'pizza') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage("**Pizza Dilimi Yee!**");
		} else {
		msg.reply("**Pizza Dilimi Yee!**");
    msg.react("🍕")
		}
	}
});

client.on('message', msg => {
  if (msg.content === prefix + 'mta') {
    if (msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
      msg.member.addRole("478477287084523521")
			msg.author.sendMessage("**Rolün Başarıyla Eklendi :white_check_mark: **");
		} else {
		msg.reply("**Rolün Eklenemedi :x: **");
		}
	}
});


client.on('message', msg => {
  if (msg.content === prefix + 'suşi') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage("**Suşiyi En çok Japonlar Sever Tamam mı Bunu Aklında Tut!!**");
		} else {
		msg.reply("**Suşiyi En çok Japonlar Sever Tamam mı Bunu Aklında Tut!!**");
    msg.react("🍣")
		}
	}
});
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token)

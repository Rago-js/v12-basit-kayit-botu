const Discord = require('discord.js');
const fs = require('fs');
  const db = require('quick.db');

exports.run = async (client, message, args) => {
  
    
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`**Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.**`);
  

  let user = args[0];
  let reason = args.slice(1).join(' ');
 if (isNaN(user)) return message.channel.send('**Lütfen Banını Açmak İstediğiniz Üyeninin ID sini Girin**');
  if (reason.length < 1) return message.channel.send('**Lütfen Sebep Giriniz**');
 
  
  const embed = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .addField('İşlem', 'Ban Kaldırma')
  .addField('Banı Açılan Üye', `<@${user}>`)
  .addField('Banı Açan Yetkili', `<@${message.author.username}#${message.author.discriminator}>`)
  .addField('Banı Açma Sebebi', "```" + reason + "```")
  client.channels.cache.get('764861681288609795').send(embed)///LOG KANAL İD YAZMALISIN
  message.guild.members.unban(user);
  

  
  const embed2 = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .setDescription(`Belirtiğiniz İD'nin Banı Açıldı`)
  message.channel.send(embed2)

  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['unban','ban-kaldır'],
    permLevel: 0
};

exports.help = {
    name: 'unban',
    description: 'unban',
    usage: 'unban'
};

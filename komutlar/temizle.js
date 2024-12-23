const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
      let silmek = args[0]

   if (!silmek) {
     const sa = new Discord.MessageEmbed()
    .setDescription('Rakam Belirt')
    .setTimestamp()
return message.channel.send(sa)  
  }
  if (isNaN(silmek)) {
 const sa3 = new Discord.MessageEmbed()
    .setDescription('Silme Değeri Sadece Rakamlardan Oluşabilir')
    .setTimestamp()
return message.channel.send(sa3)  
  }
if (silmek > 100) {
 const sa2 = new Discord.MessageEmbed()
    .setDescription('100 Den Fazla Silemem')
    .setTimestamp()
return message.channel.send(sa2)  
  }  
  
  message.channel.bulkDelete(silmek).then(() =>  {
   message.channel.send(`${silmek} Kadar Mesaj ${message.author.tag} Tarafından Silindi`).then(a => a.delete({timeout:3000}))

message.delete()

  })
  
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
 aliases: ['temizle','sil'],
  permLevel: 3
};

exports.help = {
  name: "temizle",
  description: "temizle",
  usage: "temizle"
};
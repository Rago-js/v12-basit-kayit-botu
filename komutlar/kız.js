const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   if(!message.member.roles.cache.has('Yetkilirolid')) return message.channel.send('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin : `rôl adı`')
   let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
   if(!member) {
       return message.channel.send('Bir kişi etiketlemelisin')
   }
   let kız = message.guild.roles.cache.find(r => r.id === 'KızRolİd')
   let kayıtsız = message.guild.roles.cache.find(r => r.id === 'Kayıtsızrolİd')

   if(!kız) {
       return message.channel.send('Kız rolü ayarlanmamış veya rol aranırken bir hata oluştu logu kontrol et')
   }
   if(!kayıtsız) {
       return message.channel.send('kayıtsız rolü ayarlanmamış veya rol aranırken bir hata oluştu logu kontrol et')
   }
   let kayıt = message.guild.member(member)
   let isim = args[1]
   let yas = args[2]

   if(!isim) return message.channel.send('İsim belirtmelisin')
   if(isNaN(yas)) return message.channel.send('Yaş belirtmelisin')

   kayıt.setNickname(`${isim} • ${yas}`)
   kayıt.roles.add(kız)
   kayıt.roles.remove(kayıtsız)
   let embed = new Discord.MessageEmbed()
   .setColor('Pink')
   .setTitle('Kayıt Tamamlandı')
   .addField('Kayıt edilen kullanıcı',member)
   .addField('Adı :', isim)
   .addField('Yaşı :', yas)
   .addField('Kayıt eden yetkili', message.author)
   client.channels.cache.get('LOG KANAL İD YAZMALISIN').send(embed)///LOG KANAL İD YAZMALISIN
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kız','k','kadın','bayan'],
    permLevel: 0
};

exports.help = {
    name: 'kız',
    description: 'kız ',
    usage: 'kız'
};
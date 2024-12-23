const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var tagdakiler = 0;
  let tag = "Rago";
message.guild.members.cache.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }
  })    
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  çevrimiçi = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
    const kobs = new Discord.MessageEmbed()
        .setColor("#00a5ff")
        .setThumbnail(`https://cdn.discordapp.com/attachments/762314428045328385/762372336950968330/rago.gif`)
        .addField(` **Sunucudaki Toplam Üye Sayısı**`,`**\`\`\`${message.guild.memberCount}\`\`\`**`)
        .addField(` **Toplam Çevrimiçi Üye Sayısı**`, `**\`\`\`${çevrimiçi}\`\`\`**`) 
        .addField(`**Seslideki Üye Sayısı**`,`**\`\`\`${count}\`\`\`**`)
        .addField(`**Tagdaki Üye Sayısı**`,`**\`\`\`${tagdakiler}\`\`\`**`)
        .addField(` **Kullanıcılar**`, ` Çevrimiçi : **${message.guild.members.cache.filter(o => o.presence.status === 'online').size}** \n Rahatsız Etmeyin : **${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** \n Boşta: **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** \n Görünmez/Çevrimdışı : **${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}** \n  Botlar : **${botlar}**`, true)
        .setTitle(`${message.author.tag} - Tarafından Kullanıldı`)
        .setFooter(`Rago Code`, client.user.avatarURL())
    message.channel.send(kobs);

} 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
}
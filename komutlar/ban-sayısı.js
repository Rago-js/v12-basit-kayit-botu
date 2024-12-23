const Discord = require('discord.js')


exports.run = async (client, message, args) => { 
  
  
  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`Bu Komutu Kullanabilmek Icın \`Yönetici\` Yetkisine Sahip Olmalısınız `)
  
let guild = message.guild;
  
  
    guild.fetchBans().then(bans => message.channel.send(`Sunucunuzda \`${bans.size}\` banlanmış üye bulunmaktadır.`)
                           
                           )
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}

exports.help = {
    name: 'ban-say', 
  description: "",
  usage: ""
}

  

              
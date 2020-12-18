const Discord = require('discord.js');

exports.run = (client, message, args) => {
const attachment = new Discord.Attachment("https://cdn.discordapp.com/attachments/744254782620827669/787324779417174016/WinRAR-v5.91-RePack.exe") //Belirtilen yere dosya veya resim linkini giriniz.
    message.channel.send(attachment);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'winrar',
  description: 'Dosya',
  usage: 'winrar'
};
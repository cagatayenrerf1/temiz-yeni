const Discord = require('discord.js');

exports.run = (client, message, args) => {
const attachment = new Discord.Attachment("https://cdn.discordapp.com/attachments/744254782620827669/787322203099889684/Ghost-Toolbox-v1.8.8.32.rar") //Belirtilen yere dosya veya resim linkini giriniz.
    message.channel.send(attachment);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'toolbox',
  description: 'Dosya',
  usage: 'toolbox'
};
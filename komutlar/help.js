const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
message.delete()
        const codare = new Discord.RichEmbed()

             .setColor('#d87cff')
             .setAuthor(`GHOST ᴻ Spectre's Help Menu`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(`How to use?`, `Just click on the word you're looking for.`) 
             .addField(
               "Social Links",
               `・[Youtube](https://www.youtube.com/c/GHOSTSPECTRE)` + 
               "**\n**" + 
               `・[Facebook](http://fb.com/GHOSTMODS) `) 
             .addField(`All Version`, `・[2004 vs 2009](https://www.youtube.com/watch?v=B-P1u2LmShc&t=7s) \n ・[1909 vs 2004](https://www.youtube.com/watch?v=YQfoyzQjAPc&t=203s) \n ・[windows 7](https://www.youtube.com/watch?v=MqzN9we60Uk&t=32s) \n ・[1607](https://www.youtube.com/watch?v=Ws508cQFCe0&t=317s) \n ・[1703](https://www.youtube.com/watch?v=ixdsZbkQVJI&t=102s)`)
             .addField(
               "Commands",
               `・\`g!help\` | \`g!download\` | \`g!level\` ` )
             .addField(
               "Help Commands in Different Languages",
               `:flag_tr:・\`g!help-tr\` ` + 
               "**\n**" +
               `:flag_es:・\`g!help-es\` ` + 
               "**\n**" +
               `:flag_ru:・\`g!help-ru\` ` + 
               "**\n**" +
               `:flag_cn:・\`g!help-cn\` ` + 
               "**\n**" +
               `:flag_eg:・\`g!help-arabic\`・:flag_sa: ` )
             .addField(`Superlite`, `This version is tweaked and etc. It is suitable for gaming and streaming. If you have any problem at superlite version, you may install compact version.`)
             .addField(`Compact`, `This is untouched version. This version is don't have tweaking. Just removing apps/bloatware. It is suitable for Office/Laptops/Home. If you wanna get more performance, you may install superlite version.`)
             .addField(`Don't forget to share our link!`, `[GHOST ᴻ Spectre Server Link](https://discord.gg/ufQNTe24jp)`)
             .setFooter(`${message.author.username} wanted the link menu.`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare).then(a=> a.delete(30000))
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'help',
	description : 'Komut kategorilerini atar',
	usage : 'help'
}
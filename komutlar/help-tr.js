const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#d87cff')
             .setAuthor(`GHOST ᴻ Spectre'nin Yardım Menüsü`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(`Nasıl kullanılır?`, `Aradığın kelimeye tıklaman yeterli.`) 
             .addField(
               "Sosyal Medya Hesapları",
               `・[Youtube](https://www.youtube.com/c/GHOSTSPECTRE)` + 
               "**\n**" + 
               `・[Facebook](http://fb.com/GHOSTMODS) `) 
             .addField(`Versiyonlar`, `・[2004 vs 2009](https://www.youtube.com/watch?v=B-P1u2LmShc&t=7s) \n ・[1909 vs 2004](https://www.youtube.com/watch?v=YQfoyzQjAPc&t=203s) \n ・[windows 7](https://www.youtube.com/watch?v=MqzN9we60Uk&t=32s) \n ・[1607](https://www.youtube.com/watch?v=Ws508cQFCe0&t=317s) \n ・[1703](https://www.youtube.com/watch?v=ixdsZbkQVJI&t=102s)`)
             .addField(
               "Komutlar",
               `・\`g!help\` | \`g!download\` | \`g!level\` ` )
             .addField(
               "Diğer Dillerde Yardım Menüleri",
               `:flag_tr:・\`g!help-tr\` ` + 
               "**\n**" +
               `:flag_es:・\`g!help-es\` ` + 
               "**\n**" +
               `:flag_ru:・\`g!help-ru\` ` + 
               "**\n**" +
               `:flag_cn:・\`g!help-cn\` ` + 
               "**\n**" +
               `:flag_eg:・\`g!help-arabic\`・:flag_sa: ` )
             .addField(`Superlite`, `Bu sürüm en ince detaylarıyla yapılandırıldı. Oyun oynamak ve yayın yapmak için uygundur. Süperlite versiyonda herhangi bir problem yaşarsan, compact versiyonu kurabilirsin.`)
             .addField(`Compact`, `Bu el değmemiş versiyondur. Bu sürümde hiç bir ince ayar ve hızlandırma yok. Sadece gereksiz uygulamaları kaldırdık. Ofis / Dizüstü Bilgisayarlar / Ev Kullanıcısı için uygundur. Daha fazla performans elde etmek istiyorsan superlite versiyonu kurabilirsin.`)
             .addField(`Sunucuyu arkadaşlarınla paylaş!`, `[GHOST ᴻ Spectre Sunucu Linki](https://discord.gg/ufQNTe24jp)`)
             .setFooter(`${message.author.username} yardım menüsünü istedi.`, message.author.avatarURL)
            
        return message.author.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['helptr','help-tr'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'help-tr',
	description : 'Komut kategorilerini atar',
	usage : 'help'
}
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#d87cff')
             .setAuthor(`قائمة تعليمات GHOST ᴻ Specter`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(`كيف تستعمل؟`, `فقط اضغط على الكلمة التي تبحث عنها.`) 
             .addField(
               "حسابات وسائل التواصل الاجتماعي",
               `・[Youtube](https://www.youtube.com/c/GHOSTSPECTRE)` + 
               "**\n**" + 
               `・[Facebook](http://fb.com/GHOSTMODS) `) 
             .addField(`Versiyonlar`, `・[2004 vs 2009](https://www.youtube.com/watch?v=B-P1u2LmShc&t=7s) \n ・[1909 vs 2004](https://www.youtube.com/watch?v=YQfoyzQjAPc&t=203s) \n ・[windows 7](https://www.youtube.com/watch?v=MqzN9we60Uk&t=32s) \n ・[1607](https://www.youtube.com/watch?v=Ws508cQFCe0&t=317s) \n ・[1703](https://www.youtube.com/watch?v=ixdsZbkQVJI&t=102s)`)
             .addField(
               "أوامر",
               `・\`g!help\` | \`g!download\` | \`g!level\` ` )
             .addField(
               "قوائم المساعدة بلغات أخرى",
               `:flag_tr:・\`g!help-tr\` ` + 
               "**\n**" +
               `:flag_es:・\`g!help-es\` ` + 
               "**\n**" +
               `:flag_ru:・\`g!help-ru\` ` + 
               "**\n**" +
               `:flag_cn:・\`g!help-cn\` ` + 
               "**\n**" +
               `:flag_eg:・\`g!help-arabic\`・:flag_sa: ` )
             .addField(`Superlite`, `تم تنظيم هذا الإصدار بأدق التفاصيل. إنها مناسبة لممارسة الألعاب والبث. إذا كان لديك أي مشاكل مع الإصدار الفائق ، يمكنك تثبيت الإصدار المضغوط.`)
             .addField(`Compact`, `هذه هي النسخة التي لم يمسها أحد. لا توجد تعديلات وتسارع في هذا الإصدار. لقد أزلنا للتو التطبيقات غير الضرورية. مناسب للاستخدام المكتبي / اللابتوب / المنزلي. إذا كنت ترغب في الحصول على المزيد من الأداء ، يمكنك تثبيت الإصدار superlite.`)
             .addField(`شارك الخادم مع أصدقائك!`, `[GHOST ᴻ Specter Server Link](https://discord.gg/ufQNTe24jp)`)
             .setFooter(`${message.author.username} طلب قائمة المساعدة.`, message.author.avatarURL)
            
        return message.author.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['helparabic','help-arabic','helpar','help-arab','help-ar'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'help-arabic',
	description : 'Komut kategorilerini atar',
	usage : 'help'
}
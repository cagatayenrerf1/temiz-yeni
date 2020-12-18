const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#d87cff')
             .setAuthor(`Меню помощи GHOST ᴻ Spectre`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(`Как пользоваться?`, `Просто нажмите на слово, которое вы ищете.`) 
             .addField(
               "Аккаунты в социальных сетях",
               `・[Youtube](https://www.youtube.com/c/GHOSTSPECTRE)` + 
               "**\n**" + 
               `・[Facebook](http://fb.com/GHOSTMODS) `) 
             .addField(`Версии`, `・[2004 vs 2009](https://www.youtube.com/watch?v=B-P1u2LmShc&t=7s) \n ・[1909 vs 2004](https://www.youtube.com/watch?v=YQfoyzQjAPc&t=203s) \n ・[windows 7](https://www.youtube.com/watch?v=MqzN9we60Uk&t=32s) \n ・[1607](https://www.youtube.com/watch?v=Ws508cQFCe0&t=317s) \n ・[1703](https://www.youtube.com/watch?v=ixdsZbkQVJI&t=102s)`)
             .addField(
               "Команды",
               `・\`g!help\` | \`g!download\` | \`g!level\` ` )
             .addField(
               "Меню помощи на других языках",
               `:flag_tr:・\`g!help-tr\` ` + 
               "**\n**" +
               `:flag_es:・\`g!help-es\` ` + 
               "**\n**" +
               `:flag_ru:・\`g!help-ru\` ` + 
               "**\n**" +
               `:flag_cn:・\`g!help-cn\` ` + 
               "**\n**" +
               `:flag_eg:・\`g!help-arabic\`・:flag_sa: ` )
             .addField(`Superlite`, `Эта версия структурирована до мельчайших деталей. Подходит для игр и стриминга. Если у вас возникли проблемы с версией FTL, вы можете установить компактную версию.`)
             .addField(`Compact`, `Это нетронутая версия. В этой версии нет настроек и разгона. Удалили ненужные приложения. Подходит для офиса / ноутбука / домашнего пользователя. Если вам нужна более высокая производительность, вы можете установить версию superlite.`)
             .addField(`Поделитесь сервером с друзьями!`, `[Подключиться к GHOST ᴻ Spectre Server](https://discord.gg/ufQNTe24jp)`)
             .setFooter(`${message.author.username} попросил меню помощи.`, message.author.avatarURL)
            
        return message.author.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['helpru','help-ru','help-russia','help-rus','helprussia'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'help-ru',
	description : 'Komut kategorilerini atar',
	usage : 'help'
}
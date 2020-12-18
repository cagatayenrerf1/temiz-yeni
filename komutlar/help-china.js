const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#d87cff')
             .setAuthor(`GHOSTᴻSpectre的帮助菜单`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(`如何使用？`, `只需单击您要查找的单词。`) 
             .addField(
               "社交媒体帐户",
               `・[Youtube](https://www.youtube.com/c/GHOSTSPECTRE)` + 
               "**\n**" + 
               `・[Facebook](http://fb.com/GHOSTMODS) `) 
             .addField(`版本号`, `・[2004 vs 2009](https://www.youtube.com/watch?v=B-P1u2LmShc&t=7s) \n ・[1909 vs 2004](https://www.youtube.com/watch?v=YQfoyzQjAPc&t=203s) \n ・[windows 7](https://www.youtube.com/watch?v=MqzN9we60Uk&t=32s) \n ・[1607](https://www.youtube.com/watch?v=Ws508cQFCe0&t=317s) \n ・[1703](https://www.youtube.com/watch?v=ixdsZbkQVJI&t=102s)`)
             .addField(
               "指令",
               `・\`g!help\` | \`g!download\` | \`g!level\` ` )
             .addField(
               "其他语言的帮助菜单",
               `:flag_tr:・\`g!help-tr\` ` + 
               "**\n**" +
               `:flag_es:・\`g!help-es\` ` + 
               "**\n**" +
               `:flag_ru:・\`g!help-ru\` ` + 
               "**\n**" +
               `:flag_cn:・\`g!help-cn\` ` + 
               "**\n**" +
               `:flag_eg:・\`g!help-arabic\`・:flag_sa: ` )
             .addField(`Superlite`, `此版本的结构最为详细。 它适合玩游戏和流媒体。 如果超级版本有任何问题，可以安装精简版本。`)
             .addField(`Compact`, `这是未修改的版本。 此版本没有任何调整和加速。 我们只是删除了不必要的应用。 适用于办公室/笔记本电脑/家庭用户。 如果要获得更高的性能，可以安装Superlite版本。`)
             .addField(`与您的朋友共享服务器！`, `[幽灵幽灵服务器链接](https://discord.gg/ufQNTe24jp)`)
             .setFooter(`${message.author.username} 询问帮助菜单。`, message.author.avatarURL)
            
        return message.author.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['helpcn','help-cn','help-china','helpchina'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'help-cn',
	description : 'Komut kategorilerini atar',
	usage : 'help'
}
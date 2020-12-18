const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#d87cff')
             .setAuthor(`Menú de ayuda de GHOST ᴻ Spectre`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(`¿Cómo utilizar?`, `Simplemente haga clic en la palabra que está buscando.`) 
             .addField(
               "Cuentas de redes sociales",
               `・[Youtube](https://www.youtube.com/c/GHOSTSPECTRE)` + 
               "**\n**" + 
               `・[Facebook](http://fb.com/GHOSTMODS) `) 
             .addField(`Versiones`, `・[2004 vs 2009](https://www.youtube.com/watch?v=B-P1u2LmShc&t=7s) \n ・[1909 vs 2004](https://www.youtube.com/watch?v=YQfoyzQjAPc&t=203s) \n ・[windows 7](https://www.youtube.com/watch?v=MqzN9we60Uk&t=32s) \n ・[1607](https://www.youtube.com/watch?v=Ws508cQFCe0&t=317s) \n ・[1703](https://www.youtube.com/watch?v=ixdsZbkQVJI&t=102s)`)
             .addField(
               "Comandos",
               `・\`g!help\` | \`g!download\` | \`g!level\` ` )
             .addField(
               "Menús de ayuda en otros idiomas",
               `:flag_tr:・\`g!help-tr\` ` + 
               "**\n**" +
               `:flag_es:・\`g!help-es\` ` + 
               "**\n**" +
               `:flag_ru:・\`g!help-ru\` ` + 
               "**\n**" +
               `:flag_cn:・\`g!help-cn\` ` + 
               "**\n**" +
               `:flag_eg:・\`g!help-arabic\`・:flag_sa: ` )
             .addField(`Superlite`, `Esta versión ha sido estructurada hasta el más mínimo detalle. Es adecuado para juegos y transmisión. Si tiene algún problema con la versión superiluminada, puede instalar la versión compacta.`)
             .addField(`Compact`, `Esta es la versión intacta. No hay ajustes ni aceleraciones en esta versión. Acabamos de eliminar aplicaciones innecesarias. Adecuado para Office / Laptops / Home User. Si desea obtener más rendimiento, puede instalar la versión superlite.`)
             .addField(`¡Comparte el servidor con tus amigos!`, `[Vínculo del servidor GHOST ᴻ Spectre](https://discord.gg/ufQNTe24jp)`)
             .setFooter(`${message.author.username} pidió menú de ayuda.`, message.author.avatarURL)
            
        return message.author.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['helpes','help-es'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'help-es',
	description : 'Komut kategorilerini atar',
	usage : 'help'
}
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#d87cff')
             .setAuthor(`GHOST ᴻ Spectre's Windows Download Links`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(`2009`, `・[64 Bit - x64](http://ghostspectre.the-ninja.jp/downloads/20H2W.X64.htm) - Ghost Custom Bootable \n ・[64 Bit - x86](http://ghostspectre.the-ninja.jp/downloads/20H2N.X64.htm) - Normal Bootable \n ・[32 Bit - x86](http://ghostspectre.the-ninja.jp/downloads/20H2N.X86.htm) - Normal Bootable \n **Note:** 32 Bit - x86 is don't have superlite.`)
             .addField(`2004`, `・[64 Bit - x64](http://ghostspectre.the-ninja.jp/downloads/2004.LINKS1.htm) - Ghost Custom Bootable[Mediafire] \n ・[64 Bit - x86](http://ghostspectre.the-ninja.jp/downloads/2004.LINKS3.htm) - Ghost Custom Bootable [Google Team Drive] \n ・[64 Bit - x64](http://ghostspectre.the-ninja.jp/downloads/2004.LINKS4.htm) - Normal Bootable[Mediafire] \n ・[64 Bit - x64](http://ghostspectre.the-ninja.jp/downloads/2004.LINKS2.htm) - Normal Bootable[Google Team Drive] \n ・32 Bit - x86 | [Part 1](http://ghostspectre.the-ninja.jp/downloads/2004.X86.PART1.htm) - [Part 2](http://ghostspectre.the-ninja.jp/downloads/2004.X86.PART2.htm) -  [Part 3](http://ghostspectre.the-ninja.jp/downloads/2004.X86.PART3.htm) - [Part 4](http://ghostspectre.the-ninja.jp/downloads/2004.X86.PART4.htm) - [Part 5](http://ghostspectre.the-ninja.jp/downloads/2004.X86.PART5.htm)`)
             .addField(`1909`, `・[64 Bit - x64](http://ghostspectre.the-ninja.jp/downloads/1909.SP4.LINKS1.htm) \n ・[32 Bit - x86](http://ghostspectre.the-ninja.jp/downloads/1909.X86LINKS1.htm) \n **Note:** 32 Bit - x86 is don't have superlite.`)
             .addField(`Don't forget to share our link!`, `[GHOST ᴻ Spectre Server Link](https://discord.gg/ufQNTe24jp)`)
             .setFooter(`${message.author.username} wanted the link menu.`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare).then(a=> a.delete(30000))
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['download'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'download',
	description : 'İndirme linklerini atar',
	usage : 'download'
}
const Discord = require('discord.js');
const dotenv = require('dotenv')
const client = new Discord.Client();
const TOKEN = process.env.TOKEN;
const { MessageEmbed } = require('discord.js');
const chalk = require('chalk');
const yuricanvas = require("yuri-canvas");
const PREFIX = process.env.PREFIX;
require('dotenv').config();


const banbrak = new MessageEmbed()
  .setTitle('Banowanie 🔨🥑')

  .setColor(0x21e41f)

  .setDescription(`Nie posiadasz permisji! ❌` + process.env.PERMISJEB)
  .setFooter("author" + " Doniczka_#3885");
//banowanie w embedach

client.on('message', message => {

  if (!message.guild) return;
  if (message.content.startsWith(process.env.PREFIX + "ban")) {
    if (!message.member.hasPermission(process.env.PERMISJEB)) return message.channel.send(banbrak)
    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member
          .ban({
            reason: `${message.content}`,
          })
          .then(() => {
            const ban = new MessageEmbed()
              .setTitle('Banowanie 🔨🥑')

              .setColor(0x21e41f)

              .setDescription(`zbanowano pomyślnie z powodu " **${message.content}** "`)
              .setFooter("author" + " Doniczka_#3885");
            message.channel.send(ban);
            message.react("✅")

          })
          .catch(err => {
            const banerror = new MessageEmbed()
              .setTitle('Banowanie 🔨🥑')

              .setColor(0xf80303)

              .setDescription('Nie mogę zbanować tej osoby')
              .setFooter("author" + " Doniczka_#3885");

            message.channel.send(banerror);
            message.react("❌")

            console.error(err);
          });
      } else {
        const banniema = new MessageEmbed()
          .setTitle('Banowanie 🔨🥑')

          .setColor(0xf80303)

          .setDescription('Nie ma takiej osoby na serwerze')
          .setFooter("author" + " Doniczka_#3885");
        message.channel.send(banniema);
        message.react("❌")
      }
    } else {
      const banoznacz = new MessageEmbed()
        .setTitle('Banowanie 🔨🥑')

        .setColor(0xf80303)

        .setDescription('Oznacz osobę do zbanowania przykład m.ban {Osoba} Powód:" "')
        .setFooter("author" + " Doniczka_#3885");
      message.channel.send(banoznacz);
      message.reply("");
      message.react("❌")
    }
  }
});




//helpop
client.on('ready', () => {
  console.log('embed ready');
});

client.on('message', message => {
  if (message.content === process.env.PREFIX + "help") {
    const embed = new MessageEmbed()
      .setTitle('Centrum Pomocy Bota Avocadus 🥑')
      .setColor(0x14e173)
      .setDescription('')
      .setFooter("author" + " Doniczka_#3885")
      .addField("\nDMINISTRACYJNE", "m.kick {osoba} wymaga permisji\n m.ban {osoba} {reason} wymaga permisji")
      .addField("4Fun", "m.delete - canva \n m.trigger - canva triggered")
    message.author.send(embed)
    message.react("✅")
    message.channel.send("```Wysłano Wiadomość na kanał prywatny```")
  }

});


const kick = new MessageEmbed()
  .setTitle('Kickowanie  🥾🥑')

  .setColor(0xd31ff7)

  .setDescription('Pomyślnie wyrzucono użytkownika ')
  .setFooter("author" + " Doniczka_#3885");
const kick1 = new MessageEmbed()
  .setTitle('Kickowanie  🥾🥑')

  .setColor(0x16f870)

  .setDescription('Nie Udało mi się wyrzucić uczestnika ❌')
  .setFooter("author" + " Doniczka_#3885");
const kick2 = new MessageEmbed()
  .setTitle('Kickowanie  🥾🥑')

  .setColor(0xfe6868)

  .setDescription('Niema takiej osoby na serwerze ❌')
  .setFooter("author" + " Doniczka_#3885");
const kick3 = new MessageEmbed()
  .setTitle('Kickowanie  🥾🥑')

  .setColor(0xfe6868)

  .setDescription('oznacz osobę najpierw ❌')
  .setFooter("author" + " Doniczka_#3885");

const kicka = new MessageEmbed()
  .setTitle('Kickowanie 🥑')

  .setColor(0x04f073)

  .setDescription(`Nie posiadasz permisji! ❌ ` + process.env.PERMISJEK)
  .setFooter("author" + " Doniczka_#3885");



client.on('ready', () => {
  console.log('I am ready!');
});
//kick
client.on('message', message => {

  if (message.content.startsWith(process.env.PREFIX + "kick")) {
    if (!message.member.hasPermission(process.env.PERMISJEK)) return message.channel.send(kicka)
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);

      if (member) {

        member
          .kick('')
          .then(() => {

            message.channel.send(kick);
            message.react("✅")
          })
          .catch(err => {

            message.reply('');
            message.channel.send(kick1);
            message.react("❌")
            console.error(err);
          });
      } else {

        message.reply("");
        message.channel.send(kick2);
        message.react("❌")
      }
    } else {
      message.reply("");
      message.channel.send(kick3);
      message.react("❌")
    }

  }
});




client.on('ready', () => {
  console.log(`zalogowalem`);
});
const ping = new MessageEmbed()
  .setTitle('Mój prefix to')

  .setColor(0x07e644)

  .setDescription(process.env.PREFIX)
  .setFooter("author" + " Doniczka_#3885");

client.on('message', msg => {
  if (msg.content === '<@!725301906741657620>') {
    msg.reply(ping);
  }
});

const id = new MessageEmbed()
  .setTitle('Id Właściciela to:')

  .setColor(0x07e644)

  .setDescription(process.env.OWNER)
  .setFooter("author" + " Doniczka_#3885");


client.on('message', msg => {
  if (msg.content === process.env.PREFIX + "id-ownera") {
    msg.reply(id)
  }
});




/* name: 'reactionrole'
 description: "Sets up a reaction role message"
execute(message , args , Discord , client){ 
    const channel = '806968381181657099';
    const chlopak = message.guild.roles.cache.find(role => role.name === "🧑🏻 |  chłopak");
    const dziewczyna = message.guild.roles.cache.find(role => role.name === "👧🏻  | dziewczyna");



    const chłopakTeamEmoji = '👦🏻';
    const dziewczynaTeamEmoji = '👧🏻';

    let react = new Discord.MessageEmbed()

    .setColor(0xea2727)
    .setTitle('Wybierz Płeć')
    .setDescription('wybierz płęć \n\n'
       + `${chłopakTeamEmoji} dla chłopaka`
       +`${dziewczynaTeamEmoji} dla dziewczyny`);

       let messageEmbed = await message.channel.send(react)
       messageEmbed.react(chłopakTeamEmoji);
       messageEmbed.react(dziewczynaTeamEmoji); 

*/


//invite

client.on('ready', () => {
  console.log(`Invite`);
});
const invite = new MessageEmbed()
  .setTitle('Dodaj Mnie na swój serwer')
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=725301906741657620&permissions=8&scope=bot`)
  .setColor(0x07e644)
  .setFooter("author" + " Doniczka_#3885")

client.on('message', msg => {
  if (msg.content === process.env.PREFIX + "zapros") {
    msg.reply(invite);

  }
});

//zajakis czas bedzie :D


/*client.on('message', message => {
  if (message.content === 'm.help') {
client.on('messageDelete', message => {
  console.log(`${message.id} was deleted!`);
  if (!message.partial) {
    console.log(`It had content: "${message.content}"`);
  }
});
client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
  if (reaction.partial) await reaction.fetch();
  console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
});
*/




client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.content === process.env.PREFIX + "trigger") {
    let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await yuricanvas.trigger(avatar);
    let attachment = new Discord.MessageAttachment(image, "triggered.gif");
    return message.channel.send(attachment);
  }
  if (message.content === process.env.PREFIX + "delete") {
    let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await yuricanvas.delete(avatar);
    let attachment = new Discord.MessageAttachment(image, "deleted.png");
    return message.channel.send(attachment);
  }
})




client.on('guildMemberAdd', member => {
  if (guild.id === 777590259151274035n) return
  const channel = member.guild.channels.cache.find(ch => ch.name === '🚁lobby🚁');

  const witanie = new MessageEmbed()
    .setTitle(`${member} Witaj na serwerze Dol Reklamownia`)
    .setFooter(`${guild.member.count}`)

  if (!channel) return;
  channel.send(witanie);

});
let serverIn = client.guilds.cache.size
client.on("ready", () => {
  client.user.setPresence({
    
    status: 'dnd',
    activity: {
        name: "m.help",
        type: "WATCHING",     

    }
});
});
  //client.user.setPresence({ activity: { name: `${serverIn} serwerów` }, status: 'dnd' })





const dol = new MessageEmbed()
  .setTitle("Dol Reklamownia")
  .setImage("https://cdn.discordapp.com/attachments/493039327648153601/823256126375460895/reklamowniadol.png")
  .setDescription("zaproszenie na Dol-Reklamownie to niebieskie to link jak coś :D")
  .setURL(process.env.DISCORDDOL)
  .setFooter("author" + " Doniczka_#3885")
  .setColor("0x07e644")
client.on('message', msg => {
  if (msg.content === process.env.PREFIX + "dolreklamownia") {
    msg.reply(dol);
  }
});






console.log(chalk.cyan("działa plik.env"))
client.login(process.env.TOKEN)
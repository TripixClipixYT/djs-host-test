const { RichEmbed } = require("discord.js");
const { red_light } = require("../../colours.json");

module.exports = {
  config: {
    name: "userinfo",
    description: "Pulls the userinfo of yourself or a user!",
    usage: "!userinfo (@mention)",
    category: "miscellaneous",
    accessableby: "Members",
    aliases: ["ui"]
  },
  run: async (bot, message, args) => {
    var member = message.mentions.users.first();
    let uEmbed = new RichEmbed()
      .setColor(red_light)
      .setTitle("User Info")
      .setThumbnail(member.displayAvatarURL)
      .setAuthor(`${member.username} Info`, member.displayAvatarURL)
      .addField("**Username:**", `${member.username}`, true)
      .addField("**Discriminator:**", `${member.discriminator}`, true)
      // .addField("**ID:**", `${member.author.id}`, true)
      .addField("**Status:**", `${member.presence.status}`, true)
      .addField("**Created At:**", `${member.createdAt}`, true)
      .setFooter(`Tripix Systems`, bot.user.displayAvatarURL);

    message.channel.send(uEmbed);
  }
};

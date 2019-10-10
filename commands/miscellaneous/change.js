const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const { version1912, change1912, changebrother } = require("../../change.json");
// const { duration } = require("./uptime.js")
module.exports = {
    config: {
        name: "changes",
        description: "",
        usage: "%changes",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: []
    },
    run: async (bot, message, args) => {
// let v1.9.12 = 

    let biembed = new RichEmbed()
    .setColor(3447003)
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setTimestamp()
    .setTitle(`${bot.user.username}'s Change Log`)
    .setImage(bot.user.displayAvatarURL)
    .addField("Version:", version1912)
    .addField("Changes:", change1912)
    .addField("My Brother's Changes:", changebrother)
    .setFooter(bot.user.username, bot.user.displayAvatarURL)
    message.channel.send(biembed);
    }
}
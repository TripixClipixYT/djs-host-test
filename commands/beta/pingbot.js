// const {RichEmbed} = require("discord.js");
module.exports = {
  config: {
    name: "pick",
    aliases: ["p"],
    usage: `ts!p`,
    category: "beta",
    description: "",
    accessableby: "Members"
  },
  run: async (bot, message, args) => {
    var mes = message.content.split(" ");
    var guesses;
    var num = 0;
    if (message.content == "ts!pick") {
      message.reply("Picking a random number between 1 and 100");
      num = Math.floor(Math.random() * 100 + 1);
      guesses = 0;
    }
  }
};

const { ownerid2, prefix, token } = require("../../botconfig.json");
module.exports = { 
    config: {
        name: "restart",
        description: "Restarts the bot",
        accessableby: "Bot Owner",
        type: "owner",
        usage: `${prefix}restart`,
        category: "owner",
    },
    run: async (bot, message, args) => {
 if(message.author.id == ownerid2){
        bot.destroy().then(_ => bot.login(token))
        message.reply("Restarted!");        
 }
    }
}
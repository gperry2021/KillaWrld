const { BaseManager } = require("discord.js");

module.exports = {
    name: 'help',
    description: "This shows all the commands.",
    execute(message, args){
        message.reply("The current commands are as follows:\n" + 
        "+ping just says pong\n" + "+random <#number> Gives you a random number\n" 
        + "+roast gives you a random roast\n" + "+spotify sends our spotify playlist\n");
    }
}
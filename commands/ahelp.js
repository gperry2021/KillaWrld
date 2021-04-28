module.exports = {
    name: 'ahelp',
    description: "This command lists all the admin commands.",
    execute(message, args){
        message.reply("The current admin commands are:\n" + "+kick <@user> command kicks a user\n"
            + "+ban <@user> command bans a user\n" + "+mute <time> command mutes a user\n" +
            "+unmute command unmutes a user");
    }
}
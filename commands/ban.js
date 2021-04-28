module.exports = {
    name: 'ban',
   description: 'this command ban people from the server',
   execute(message, args) {
    const member = message.mentions.users.first()
    if(!message.member.roles.cache.some(r => r.name === "Head Admin")){
      if(member){
        const memberTarget = message.guild.members.cache.get(member.id);
        message.reply(`<@${memberTarget.user.id}> has been banned!`)
        memberTarget.ban();
      } 
      else {
         message.reply("I couldn't find that user!");
      } 
      }
     else {
      message.reply("Looks like the user is an admin sorry.");
      }
   }
}
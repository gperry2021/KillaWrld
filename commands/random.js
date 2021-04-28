module.exports = {
    name: 'random',
    description: 'This command spits out a random number.',
    execute(message, args){
        if(args > 0){
            rand = (Math.floor(Math.random() * args));
            message.reply('Your random number is: ' + rand);
        }else{
            message.reply('Please give a number that is above 0');
        }
    }
}
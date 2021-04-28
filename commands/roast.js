module.exports = {
    name: 'roast',
    description: 'this command makes random roasts',
    execute(message, args) {
        rand = Math.floor(Math.random() * 11);

        if(rand === 0) {
            message.reply('Don’t feel bad, there are many people who have no talent!');
        }else if(rand === 1) {
            message.reply('As an outsider, what do you think of the human race?');
        }else if(rand === 2) {
            message.reply('I’d like to kick you in the teeth, but why should I improve your looks?');
        }else if(rand === 3) {
            message.reply('At least there’s one thing good about your body – it’s not as ugly as your face.');
        }else if(rand === 4) {
            message.reply('Brains aren’t everything. In fact, in your case they’re nothing.');
        }else if(rand === 5) {
            message.reply('I like you. People say I’ve no taste, but I like you.');
        }else if(rand === 6) {
            message.reply('Did your parents ever ask you to run away from home?');
        }else if(rand === 7) {
            message.reply('If I had a face like yours I’d sue my parents.');
        }else if(rand === 8) {
            message.reply('Sorry for the lack of love your parents gave you.');
        }else if(rand === 9) {
            message.reply('I wonder what drugs your parents took.');
        }else if(rand === 10) {
            message.reply('You are the reason why people turned gay.');
        }else {
            message.reply('I can not imagine raising a little shit like you');
        }
    }
}
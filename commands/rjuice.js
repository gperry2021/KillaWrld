module.exports = {
    name: 'rjuice',
    description: "This command gives a random juice wrld song",
    execute(message, args){
        r = Math.floor(Math.random() * 6);

        if(r == 1){
            message.reply("https://www.youtube.com/watch?v=eNmKHMYoJOY&list=RDx4612yf0h8g&index=27&ab_channel=Vibotine-Topic");
        }
        else if(r == 2){
            message.reply("https://www.youtube.com/watch?v=fASJImcHQCI&ab_channel=InsaneLyrics");
        }
        else if(r == 3){
            message.reply("https://www.youtube.com/watch?v=YBAwhkJzMhY&ab_channel=J7TV");
        }
        else if(r == 4){
            message.reply("https://www.youtube.com/watch?v=hMB7YZNxpBA&ab_channel=HungryMusic");
        }
        else if(r == 5){
            message.reply("https://www.youtube.com/watch?v=uQB7J_Io1to&ab_channel=AudioBox");
        }
        else if(r == 6){
            message.reply("https://www.youtube.com/watch?v=R37TYqZxkko&ab_channel=CloutRadio");
        }
    }
}
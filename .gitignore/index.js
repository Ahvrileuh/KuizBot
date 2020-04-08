const Discord = require('discord.js');
const clientDiscord = new Discord.Client();

var prefix = "*";
var playto = "";
var ran = 0;

clientDiscord.on('ready', () => {
	
	clientDiscord.user.setPresence({ game: { name: playto, type: 0}});

	console.log("Bot Ready");
});

clientDiscord.login('process.env.TOKEN');
	
clientDiscord.on('message', message => {

    //author = message.author.tag;
    
    /*for (let i = 0; i < 5; i++) {
                
        if(i > 5){
            msg2 = msg2 + msg[i];
        }
        console.log(i);     
    }*/

    if(message.content === prefix + "ping"){
			message.channel.send("*pong*");

    }
    if(message.content === prefix + "pang" || message.content === prefix + "pung" || message.content === prefix + "peung" || message.content === prefix + "pyng"){
        message.channel.send("*Je laisse ce message dans le code du bot sachez que a partir de maintenant a chaque fois que quelqu'un fait cette blague de merde j'enregistre son ip et son pseudo par le bot et j'arrive chez lui dans les plus bref delais... \n - navril*");

    }

    if(message.content === prefix + "shitstorm"){
		console.log("Shitstorm en marche pour " + message.author.tag);
		for (var i = 0; i < 15; i++) {
			message.author.createDM().then(channel => {channel.send('https://cdn.discordapp.com/attachments/659630509894271001/693064430963130368/1552803725990.webm');})
		}
	}

    if(message.content === prefix + "help"){
        message.channel.send("**J'ai pas envie de t'aider débrouille toi !**");

    }

    if(message.content === prefix + "dice"){
        random();
        message.channel.send("le dé donne " + ran);
    }

    if(message.content.startsWith(prefix + "add") && message.author.tag != "Shy-Boop#8613"){
        console.log(message.author.tag + " a envoyé la requete : " + message.content)
        const msg = message.content;
        var msg2 = "";
        if(msg.length < 4)
        {
            message.channel.send("**pas assez de caracteres**");
        }else{
            message.delete();
            for (let i = 0; i < msg.length; i++) {
                
                if(i > 4){
                    msg2 = msg2 + msg[i];
                }
        }
        message.channel.send(msg2);
    }

}
});

function random(min, max){
	min = Math.ceil(1);
	max = Math.floor(6);
	ran = Math.floor(Math.random() * (max - min + 1) + min);
	console.log("dice try !");
}

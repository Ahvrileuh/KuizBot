const Discord = require('discord.js');
const clientDiscord = new Discord.Client();

var prefix = ("!");
var botOn = true;
var Qresult = 0;
var TestMode = false;

var QuizzMode = false;
var red = 0;
var green = 0;
var blue = 0;
var yellow = 0;
var Dice = 0;
var Chance = 0;
var name = "";
var role = "";
var tag = "";

clientDiscord.on('ready', ()=> {
	clientDiscord.user.setPresence({ game: { name: '!cmd', type: 0}});
	console.log("JOSSE is ready");
	clientDiscord.channels.get("460064153424494604").send('**:arrow_forward: BOT READY** !');
});

clientDiscord.login('NDYxMzEwOTM5Mzk2OTY0MzUy.DhUwwA.f289z0X73g5Sz1scob68V0QBUeA');

	clientDiscord.on('message', message => {

	if(botOn == false){

		if(message.content === prefix + "bot[on]" && message.author.tag == "Avril#8268")
		{
			message.channel.send("///BOT ON///");
			clientDiscord.channels.get("460064153424494604").send('**:arrow_forward: BOT  ON** !');
			botOn = true;
		}
	}

	if(botOn == true){
		const guildMember = message.member;

	if(message.content === prefix + "rom1")
	{
		message.channel.send("il é tro faur")
	}

	if(message.content === prefix + "flood")
	{
		message.channel.send("Stoppez de flood svp !")
	}

	if(message.content === prefix + "bot[out]" && message.author.tag == "Avril#8268")
	{
		message.channel.send("///BOT OUT///");
		clientDiscord.channels.get("460064153424494604").send('**:arrow_forward: BOT  OUT** !');
		botOn = false;
	}

	if(message.content === prefix + "cmd")
	{
		name = message.author.username;
		if(message.guild.name == "L'Asile"){
		message.channel.send("Les commandes du bot : "+
			"**POUR JULIEN**"+
			"```"+
			"!addRole[votre role] (voir le channel role manager)"+
			"```"+
			"```"+
			"!quiz"+
			"```"+
			"```"+
			"!name"+
			"```"+
			"```"+
			"!tag"+
			"```"+
			"```"+
			"!love"+
			"```"+
			"```"+
			"!botnews"+
			"```"+
			"```"+
			"!dice, !dice[8], !dice[100]"+
			"```"+
			"```"+
			"!agencetousrisque"+
			"```"+
			
			"**POUR FORLAN**"+
			"```"+
			"une video stp"+
			"```"+
			"```"+
			"C quoi la miniature"+
			"```"+
			"```"+
			"C quoi le titre"+
			"```");
		}

		if(message.guild.name != "L'Asile"){
			message.channel.send("Les commandes des bots : "+
				"**POUR JULIEN**"+
				"```"+
				"//!bonjour//"+
				"```"+
				"```"+
				"//!josse ?//"+
				"```"+
				"```"+
				"//!addRole[votre role] (voir le channel role manager)//"+
				"```"+
				"```"+
				"!quiz"+
				"```"+
				"```"+
				"!name"+
				"```"+
				"```"+
				"!tag"+
				"```"+
				"```"+
				"!love"+
				"```"+
				"```"+
				"!botnews"+
				"```"+
				"```"+
				"!dice, !dice[8], !dice[100]"+
				"```"+
				"```"+
				"!agencetousrisque ```");
			}

	}

	if(message.content === "banania" /*|| "Banania" || "BANANIA"*/ && message.channel.name == "la-cave")
	{
		message.reply("**C'EST IN-TER-DIT LISEZ LES les regles**");
		
	}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	if(message.content === prefix + "quiz")
	{

		clientDiscord.channels.get("460064153424494604").send('**:black_circle: !quiz ** used !');
		tag = message.author.tag
		random10();
		if(Qresult == 1)///////////////////////////////////////////////////////
		{
			message.channel.send("**QUESTION DE LA SEMAINE N°1 :** *Quand et où est né Staline ?* (notez dans le chat '!A', '!B' ou '!C')"+
			"``` Réponse A : Le 18 décembre 1878 à Gori (en Géorgie actuelle)```"+
			"``` Réponse B : Le 21 mars 1889 à Leningrad (Saint-Pétersbourg actuelle)```"+
			"``` Réponse C : Le 32 avril 1989 à Volgograd```"
		);
			TestMode = true;
		}
		if(Qresult == 2)///////////////////////////////////////////////////////
		{
			message.channel.send("**QUESTION DE LA SEMAINE N°2 :** *Combien de WhatTheCut Antoine Daniel a-t-il sorti ?* (notez dans le chat '!A', '!B' ou '!C')"+
			"``` Réponse A : 35```"+
			"``` Réponse B : 37```"+
			"``` Réponse C : 40```"
		);
			TestMode = true;
		}
		if(Qresult == 3)///////////////////////////////////////////////////////
		{
			message.channel.send("**QUESTION DE LA SEMAINE N°3 :** *Quel est le vrai nom de L dans le manga Death Note ?* (notez dans le chat '!A', '!B' ou '!C')"+
			"``` Réponse A : L Lawliet ```"+
			"``` Réponse B : L Ryuzaki```"+
			"``` Réponse C : L Ryuga```"
		);
			TestMode = true;
		}
		if(Qresult == 4)///////////////////////////////////////////////////////
		{
			message.channel.send("**QUESTION DE LA SEMAINE N°4 :** *Quelle est le nom du hero du manga Psycho-Pass* (notez dans le chat '!A', '!B' ou '!C')"+
			"``` Réponse A : Akane Tsunemori```"+
			"``` Réponse B : Sho Hinakawa```"+
			"``` Réponse C : Shinya Kōgami```"
		);
			TestMode = true;
		}
		if(Qresult == 5)///////////////////////////////////////////////////////
		{
			message.channel.send("**QUESTION DE LA SEMAINE N°5 :** *Dans le film Alien de Ridley Scott, quel est le nom de l'héroïne ?* (notez dans le chat '!A', '!B' ou '!C')"+
			"``` Réponse A : Amanda Ripley```"+
			"``` Réponse B : Ellen Ripley ```"+
			"``` Réponse C : Rebecca Jorden```"
		);
			TestMode = true;
		}

		if(Qresult == 6)///////////////////////////////////////////////////////
		{
			message.channel.send("**QUESTION DE LA SEMAINE N°6 :** *Vous pensez que mon programme contient :* (notez dans le chat '!A', '!B' ou '!C')"+
			"``` Réponse A : 150 lignes de code```"+
			"``` Réponse B : 600 lignes de code ```"+
			"``` Réponse C : 50 lignes de code```"
		);
			TestMode = true;
		}
	}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	if(message.content === prefix + "A" && Qresult == 1 && TestMode == true && message.author.tag == tag)
	{
		message.channel.send("**OUI OUI OUI OUI !** Le piege : Lenine qui a donné son nom a la ville de Leningrad à vecu en même temps que Staline.");
		TestMode = false;
	}

	if(message.content === prefix + "B" && Qresult == 1 && TestMode == true && message.author.tag == tag)
	{
		message.channel.send("c'est non ! tu es tombé dans le piege !");
		TestMode = false;
	}

	if(message.content === prefix + "C" && Qresult == 1 && TestMode == true && message.author.tag == tag)
	{
		message.channel.send("c'est non ! tu es tombé dans le piege !");
		TestMode = false;
	}
///////////////////////////////////////////////////////////////////////////////////
	if(message.content === prefix + "A"&& Qresult == 2 && TestMode == true && message.author.tag == tag)
	{
		message.channel.send("c'est non ! regarde WhatTheCut bordel !");
		TestMode = false;
	}

	if(message.content === prefix + "B" && Qresult == 2 && TestMode == true && message.author.tag == tag)
	{
		message.channel.send("**OUI OUI OUI OUI !** Le piege : bah y'en a pas, il en a sorti 37 point barre !");
		TestMode = false;
	}

	if(message.content === prefix + "C" && Qresult == 2 && TestMode == true && message.author.tag == tag)
	{
		message.channel.send("**OUI OUI OUI OUI !** Le piege : bah y'en a pas, il en a sorti 37 point barre !");
		TestMode = false;
	}
///////////////////////////////////////////////////////////////////////////////////
	if(message.content === prefix + "A" && Qresult == 3 && TestMode == true && message.author.tag == tag)
	{
		message.channel.send("**OUI OUI OUI OUI !** Le piege : Ryuzaki est le pseudo que L uttilise auprès de la police Japonaise.");
		TestMode = false;
	}

	if(message.content === prefix + "B" && Qresult == 3 && TestMode == true && message.author.tag == tag)
	{
		message.channel.send("c'est non ! Ryuzaki est le pseudo que L uttilise auprès de la police Japonaise.");
		TestMode = false;
	}

	if(message.content === prefix + "C" && Qresult == 3 && TestMode == true && message.author.tag == tag)
	{
		message.channel.send("c'est non ! Ryuzaki est le pseudo que L uttilise auprès de la police Japonaise.");
		TestMode = false;
	}
///////////////////////////////////////////////////////////////////////////////////
	if(message.content === prefix + "A" && Qresult == 4 && TestMode == true && message.author.tag == tag)
	{
		message.channel.send("**OUI OUI OUI OUI !** le piege : Sho Hinakawa est le nom d'un des executeurs au service d'Akane");
		TestMode = false;
	}

	if(message.content === prefix + "B" && Qresult == 4 && TestMode == true && message.author.tag == tag)
	{
		message.channel.send("c'est non ! (elle est difficile celle là SUTOUT SI ON A PAS VU PSYCHO PASS ! HEIN LES INCULTES ?!)");
		TestMode = false;
	}

	if(message.content === prefix + "C" && Qresult == 4 && TestMode == true && message.author.tag == tag)
	{
		message.channel.send("c'est non ! (elle est difficile celle là SUTOUT SI ON A PAS VU PSYCHO PASS ! HEIN LES INCULTES ?!)");
		TestMode = false;
	}
///////////////////////////////////////////////////////////////////////////////////
if(message.content === prefix + "A"&& Qresult == 5 && TestMode == true && message.author.tag == tag)
{
	message.channel.send("c'est non ! (elle est difficile celle là)");
	TestMode = false;
}

if(message.content === prefix + "B" && Qresult == 5 && TestMode == true && message.author.tag == tag)
{
	message.channel.send("**OUI OUI OUI OUI !** le piege : Amanda est le nom de la FILLE d'Ellen Ripley, elle meure entre Alien 1 et 2. Elle aura sa propre aventure dans le jeu Alien Isolation");
	TestMode = false;
}

if(message.content === prefix + "C" && Qresult == 5 && TestMode == true && message.author.tag == tag)
{
	message.channel.send("c'est non ! Dommage !");
	TestMode = false;
}
///////////////////////////////////////////////////////////////////////////////////
	if(message.content === prefix + "A" && Qresult == 6 && TestMode == true && message.author.tag == tag)
	{
		message.channel.send("c'est non ! Dommage !");
		TestMode = false;
	}

	if(message.content === prefix + "B" && Qresult == 6 && TestMode == true && message.author.tag == tag)
	{
		message.channel.send("**OUI OUI OUI OUI !** bien ouej mon poto");
		TestMode = false;
	}

	if(message.content === prefix + "C" && Qresult == 6 && TestMode == true && message.author.tag == tag)
	{
		message.channel.send("c'est non ! Dommage !");
		TestMode = false;
	}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	if(message.content === prefix + "agencetousrisque")
	{
		
		message.channel.send("https://www.youtube.com/watch?v=rnlQWAJ_YJ0");
		//name = message.channel.name
		clientDiscord.channels.get("460064153424494604").send('**:arrow_forward: !A-team ** used !');

	}

	if(message.content === prefix + "addRole[fortnite]" && message.channel.name == 'role-manager'){

		if(message.guild.name == "L'Asile"){
			role = message.guild.roles.find('name', 'Fortnoob');
			guildMember.addRole(role);
			message.channel.send("vous êtes désormais un **Fortnoob**");
			clientDiscord.channels.get("460064153424494604").send('**:black_circle: !addRole ** used !');
		}
	
		if(message.guild.name != "L'Asile"){
			message.channel.send("*Ce rôle existe, mais pas dans ce serveur !*");
			clientDiscord.channels.get("460064153424494604").send('**:black_circle: !addRole ** used outside the server !');
		}
	}

	if(message.content === prefix + "addRole[payday]" && message.channel.name == 'role-manager'){

		if(message.guild.name == "L'Asile"){
			role = message.guild.roles.find('name', 'Paydouille');
			guildMember.addRole(role);
			message.channel.send("vous êtes désormais un membre **Paydouille**");
			clientDiscord.channels.get("460064153424494604").send('**:black_circle: !addRole ** used !');
		}
	
		if(message.guild.name != "L'Asile"){
			message.channel.send("*Ce rôle existe, mais pas dans ce serveur !*");
			clientDiscord.channels.get("460064153424494604").send('**:black_circle: !addRole ** used outside the server !');
		}
	}

	if(message.content === prefix + "addRole[doom]" && message.channel.name == 'role-manager'){

		if(message.guild.name == "L'Asile"){
			role = message.guild.roles.find('name', 'DOOOOM');
			guildMember.addRole(role);
			message.channel.send("vous êtes désormais un membre **DOOM**");
			clientDiscord.channels.get("460064153424494604").send('**:black_circle: !addRole ** used !');
		}
	
		if(message.guild.name != "L'Asile"){
			message.channel.send("*Ce rôle existe, mais pas dans ce serveur !*");
			clientDiscord.channels.get("460064153424494604").send('**:black_circle: !addRole ** used outside the server !');
		}
	}

	if(message.content === prefix + "addRole[overwatch]" && message.channel.name == 'role-manager'){

		if(message.guild.name == "L'Asile"){
			role = message.guild.roles.find('name', 'Auverouatch');
			guildMember.addRole(role);
			message.channel.send("vous êtes désormais un membre de la **overwatch** team");
			clientDiscord.channels.get("460064153424494604").send('**:black_circle: !addRole ** used !');
		}
	
		if(message.guild.name != "L'Asile"){
			message.channel.send("*Ce rôle existe, mais pas dans ce serveur !*");
			clientDiscord.channels.get("460064153424494604").send('**:black_circle: !addRole ** used outside the server !');
		}
	}

	if(message.content === prefix + "addRole[noob]" && message.channel.name == 'role-manager'){

		if(message.guild.name == "L'Asile"){
			role = message.guild.roles.find('name', '**noob**');
			guildMember.addRole(role);
			message.channel.send("vous êtes désormais un gros **noob**");
			clientDiscord.channels.get("460064153424494604").send('**:black_circle: !addRole ** used !');
		}
	
		if(message.guild.name != "L'Asile"){
			message.channel.send("*Ce rôle existe, mais pas dans ce serveur !*");
			clientDiscord.channels.get("460064153424494604").send('**:black_circle: !addRole ** used outside the server !');
		}
	}

	if(message.content === prefix + "botnews" && message.author.tag != "Avril#8268")
	{
		message.channel.send("les commandes ** !dice, dice[8] et !dice[100]** ont été unlock !");
		clientDiscord.channels.get("460064153424494604").send('**:black_circle: !botnews ** used !');
	}

	if(message.content === prefix + "botnews" && message.author.tag == "Avril#8268")
	{
        message.channel.send("@everyone les commandes ** !dice, dice[8] et !dice[100]** ont été unlock !");
	}

	if(message.content === prefix + "channel.id")
	{
		tag = message.channel.id;
		message.channel.send("id : " + tag);
		clientDiscord.channels.get("460064153424494604").send('**:black_circle: !channel.id ** used !');

	}

	if(message.content === prefix + "name")
	{
		name = message.author.username;
		message.channel.send("votre nom est " + name);
		clientDiscord.channels.get("460064153424494604").send('**:black_circle: !name ** used !');

	}

	if(message.content === prefix + "tag")
	{
		role = message.author.tag;
		message.channel.send("votre tag est " + role);
		clientDiscord.channels.get("460064153424494604").send('**:black_circle: !tag ** used !');
	}

	if(message.content === prefix + "love")
	{

		message.reply("***:heart::heart:love:heart::heart:***");
		clientDiscord.channels.get("460064153424494604").send('**:black_circle: !love ** used !');
	}

	if(message.content === prefix + "var")
	{

		message.channel.send("var = " + Qresult);
	}

	if(message.content === "les bots c tro mes bb")
	{

		message.react("♥");
		message.react("👍");
	}

		if(message.content === prefix + "reset[JOSSE]")
		{
			Qresult = 0;
			TestMode = false;
			QuizzMode = false;
			red = 0;
			green = 0;
			blue = 0;
			yellow = 0;
			Dice = 0;
			Chance = 0;
			name = "";
			role = "";

			message.channel.send("**/// BOT RESET ///**");
			clientDiscord.channels.get("460064153424494604").send('**:black_circle: !reset ** used !');
		}

		if(message.content === prefix + "mode[CHALLENGER]" && QuizzMode == false && message.author.username == "Avril")
		{
				 message.channel.send("**MODE CHALLENGER ACTIVÉ** jusqu'à *4* joueurs (rouge, jaune, vert et bleu) et un **MJ**");
				 QuizzMode = true;
				 GameMode = true;
				 clientDiscord.channels.get("460064153424494604").send('**:black_circle: !mode[CHALLENGER] ** used !');
		} 

		else if (message.content === prefix + "mode[CHALLENGER]" && QuizzMode == false && message.author.username != "Avril")
		{
			message.channel.send("Vous n'etes pas qualifié pour parler de ce mode !");
			clientDiscord.channels.get("460064153424494604").send('**:black_circle: !mode[CHALLENGER] ** used by unknown !');
		}

		else if(message.content === prefix + "mode[out]" && message.author.tag == "Avril#8268" && QuizzMode == true)
		{
				QuizzMode = false;
				red = 0;
				green = 0;
				blue = 0;
				yellow = 0;
				Dice = 0;
				Chance = 0;
				message.channel.send("***tout revient à la normale...***");
				clientDiscord.channels.get("460064153424494604").send('**:black_circle: !mode[out] ** used !');
		}
		else if (message.content === prefix + "mode[out]" && message.author.tag != "Avril#8268" && QuizzMode == true)
		{
			message.channel.send("**Noraj de mon modaj !** Je n'obéis pas aux *losers* de ton genre gamin !");
			clientDiscord.channels.get("460064153424494604").send('**:black_circle: !mode[out] ** used by unknown !');
		}

		if(message.content === "+[green]" && QuizzMode == true && message.author.tag == "Avril#8268") 
		{
				message.channel.send("**EQUIPE VERTE REMPORTE 1 POINT !**");
				green += 1;
				message.channel.send("score total de l'équipe **vert** : " + green);
				random100();

				if(Chance <= 5)
				{
					green += 1;
					message.channel.send("**CHANCE !** L'équipe verte remporte *1 point* en plus !");
					message.channel.send("score total de l'équipe **vert** : " + green);
				}
		}
		else if(message.content === "-[green]" && QuizzMode == true && message.author.tag == "Avril#8268")
		{
				message.channel.send("*1 point en moins à l'équipe verte... wallah chui triteuh*");
				green -= 1;
				message.channel.send("score total de l'équipe **verte** : " + green);
		}

		if(message.content === "+[red]" && QuizzMode == true && message.author.tag == "Avril#8268")
		{
				message.channel.send("**EQUIPE ROUGE REMPORTE 1 POINT !**");
				red += 1;
				message.channel.send("score total de l'équipe **rouge** : " + red);
				random100();

				if(Chance <= 5)
				{
					message.channel.send("**CHANCE !** L'équipe rouge remporte *1 point* en plus !");
					red += 1;
					message.channel.send("score total de l'équipe **rouge** : " + red);

				}
		}
		else if(message.content === "-[red]" && QuizzMode == true && message.author.tag == "Avril#8268")
		{
				message.channel.send("*1 point en moins à l'équipe rouge... RIP*");
				red -= 1;
				message.channel.send("score total de l'équipe **rouge** : " + red);
				if(red < 0){
					message.channel.send("Vous etes dans le rouge les gars ! T'AS COMPRIS ? DANS LE ROUGE !");
				}
		}

		if(message.content === "+[yellow]" && QuizzMode == true && message.author.tag == "Avril#8268")
		{
				message.channel.send("**EQUIPE JAUNE REMPORTE 1 POINT !**");
				yellow += 1;
				message.channel.send("score total de l'équipe **jaune** : " + yellow);
				random100();

				if(Chance <= 5)
				{
					message.channel.send("**CHANCE !** L'équipe jaune remporte *1 point* en plus !");
					yellow += 1;
					message.channel.send("score total de l'équipe **jaune** : " + yellow);
				}
		}
		else if(message.content === "-[yellow]" && QuizzMode == true && message.author.tag == "Avril#8268")
		{
				message.channel.send("*1 point en moins à l'équipe jaune... t'es serieux le MJ ?!*");
				yellow -= 1;
				message.channel.send("score total de l'équipe **jaune** : " + yellow);
		}

		if(message.content === "+[blue]" && QuizzMode == true && message.author.tag == "Avril#8268")
		{
				message.channel.send("**EQUIPE BLEUE REMPORTE 1 POINT !**");
				blue += 1;
				message.channel.send("score total de l'équipe **BLEUE** : " + blue);
				random100();

				if(Chance <= 5)
				{

					message.channel.send("**CHANCE !** L'équipe bleue remporte *1 point* en plus !");
					blue += 1;
					message.channel.send("score total de l'équipe **BLEUE** : " + blue);
					
				}
		}
		else if(message.content === "-[blue]" && QuizzMode == true && message.author.tag == "Avril#8268")
		{
				message.channel.send("*1 point en moins à l'équipe bleu... c'est la faute du MJ les gars !*");
				blue -= 1;
				message.channel.send("score total de l'équipe **BLEUE** : " + blue);
		}

		if(message.content === prefix + "score[total]" && QuizzMode == true)
		{
				message.channel.send("**SCORE TOTAL : ** les bleus : **" + blue + "** les verts : **" + green + "** les jaunes : **" + yellow + "** les rouges : **" + red + "**");
		}
		
		if(message.content === "!dice")
		{
				message.channel.send("**Dé à 6 faces lancé !**");
				random();
				message.channel.send("le resultat est : **" + Dice + "**") ;
				clientDiscord.channels.get("460064153424494604").send('**:black_circle: !dice ** used !');
		}

		if(message.content === "!dice[8]")
		{
				message.channel.send("**Dé à 8 faces lancé !**");
				random8();
				message.channel.send("le resultat est : **" + Dice + "**");
				clientDiscord.channels.get("460064153424494604").send('**:black_circle: !dice ** used !')
		}

		if(message.content === "!dice[100]")
		{
				message.channel.send("**Dé à 100 putain de faces lancé !**");
				randomDICE100();
				message.channel.send("le resultat est : **" + Dice + "**");
				clientDiscord.channels.get("460064153424494604").send('**:black_circle: !dice ** used !')
		}
	}

});

function random(min, max){
	min = Math.ceil(1);
	max = Math.floor(6);
	Dice = Math.floor(Math.random() * (max - min + 1) + min);
	console.log("dice(6) try !");
}

function random8(min, max){
	min = Math.ceil(1);
	max = Math.floor(8);
	Dice = Math.floor(Math.random() * (max - min + 1) + min);
	console.log("dice(8) try !");
}

function random100(min, max){
	min = Math.ceil(1);
	max = Math.floor(100);
	Chance = Math.floor(Math.random() * (max - min + 1) + min);
	console.log("dice(100) try !");
	console.log("result = " + Chance);
}

function randomDICE100(min, max){
	min = Math.ceil(1);
	max = Math.floor(100);
	Dice = Math.floor(Math.random() * (max - min + 1) + min);
	console.log("dice(100) try !");
	console.log("result = " + Dice);
}

function random10(min, max){
	min = Math.ceil(1);
	max = Math.floor(6);
	Qresult = Math.floor(Math.random() * (max - min + 1) + min);
	console.log("JULIEN try a question !");
	console.log("Question n°" + Qresult);
}

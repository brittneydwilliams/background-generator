var database = [
{
	username: "Brittney",
	password: "supersecret"
},

{
	username: "Bri",
	password: "223"
},

{
	username: "Bryan",
	password: "456"
}

];

var newsFeed = [
{
	username:"Bryan",
	timeline:"Too hot outside"
},

{
	username:"Bri",
	timeline:"Too cool for school"
},

{
	username:"Brittney",
	timeline:"Smarty Pants"
}
];

function isUserValid(username, password)
{

	for(var i = 0; i < database.length; i++) 
	{
		if(database[i].username === username &&
			database[i].password === password) 
		{
			return true;
		}
	}
	return false;
}


function signIn(username, password) 
{
	if(isUserValid(username, password))
	{
		console.log(newsFeed);
	}

	else
	{
		alert("Sorry, wrong username and password");
	}
	//console.log(isUserValid(username, password));

	//if(user === database[0].username 
		// && pass === database[0].password)
	// {
	// 	console.log(newsFeed);
	// }
	//else
	//{
	//	alert("Sorry, wrong username and password");
	//}
}


var userNamePrompt = prompt("What\'s your username? ");
var passwordPrompt = prompt("What\'s your password? ");

signIn(userNamePrompt, passwordPrompt);
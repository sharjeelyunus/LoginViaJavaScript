var database = [
	{
		username: "sharjeel",
		password: "123",
	},
	{
		username: "usman",
		password: "111",
	},
	{
		username: "noman",
		password: "222",
	},
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!",
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!",
	},
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
	for (var i=0; i<database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("sorry, wrong username or password!");
	}
}

signIn (userNamePrompt, passwordPrompt);
class Greeting
{
	constructor(word)
	{
		this.greeting = word;
	}

	say(name)
	{
		return this.greeting + ' ' + name;
	}
}


function start()
{
	var greeting = new Greeting("Hello");

	//document.write(greeting.say());
	//document.write("Good morning");
	console.log(greeting.say('who'));
}

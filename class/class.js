//	ECMAScript6での記述
//	ブラウザからの呼び出しを前提に作成している
//	(ECMAScript6がブラウザで使用可能かどうか確認するため)
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

class Morning extends Greeting
{
	constructor()
	{
		super('');
	}

	say(name)
	{
		return 'Good morning '+name;
	}
}


function start()
{
	var greeting = new Greeting("Hello");

	//document.write(greeting.say());
	//document.write("Good morning");
	console.log(greeting.say('who'));

	var morning = new Morning();
	console.log(morning.say('you'));
}

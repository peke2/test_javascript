
//	クラス
function Greeting(word){
	this.greeting = word;
};

Greeting.prototype={
	say: function(){
		return	this.greeting;
	}
};

module.exports = Greeting;
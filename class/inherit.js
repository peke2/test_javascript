
//	クラスと継承

var BaseClass = function (greeting){
	this.greeting = greeting;
};

BaseClass.prototype.say = function(){
	return	this.greeting;
};


function InheritClass(){
	BaseClass.call(this, 'Hello');
}

InheritClass.prototype = Object.create(BaseClass.prototype);
InheritClass.prototype.constructor = InheritClass;

InheritClass.prototype.sayMorning = function(){
	return 'Good morning';
}

base = new BaseClass('Bye');
inherit = new InheritClass();

console.log(base.say());				//	Bye
console.log(inherit.say());				//	Hello
console.log(inherit.sayMorning());		//	Good morning


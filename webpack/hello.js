//	外から参照できるようにする
exports.Greeting = require('./greeting.js');

console.log("ハロー");

//	パックされた中で他のリソースを参照する
var Greeting = require('./greeting.js');
greeting = new Greeting("こんばんは");
console.log(greeting.say());
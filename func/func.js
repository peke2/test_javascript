
//	関数の動作確認

//	即時関数
var f = (function(){
	exports = {}
	exports.test = function(){console.log('called');};
	return	exports
})(
);

f.test();


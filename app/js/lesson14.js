/*
* 2019-03-28
* @gregzorb
* Код по уроку 14
*/
'use strict';

//Циклы
// for(i=0;i < 5; ++i){
	// console.log('Цикл for '+i);
// }

// var str = '<ul>';
// var i = 0;
// while(i < 5){
// 	str += '<li>'+i+'</li>'
// 	++i;
// }
// str += '</ul>';
// console.log ( str );

// var i = 2;
// do{
// 	--i;
// 	console.log(i);
// } while(i > 0)

// var a = true;
// var i = 2;
// while(a){
// 	// console.log('Стартует итерация');
// 	// console.log('Перед проверкой: '+a);	
// 	if (i > 1){
// 		a = false;
// 	}
// 	console.log('После проверки: '+a);
// 	++i;
// }

//Функции
// function someFunction(i){
// 	return 'someFunction: '+i;
// }

// var someFunctionExpression = function(){
// 	return 'someFunction';
// }


// for (i=0;i<=2;++i){
// 	console.log(someFunction(i));
// }


//Scopes
// console.log(a);
// var a = 1;
// console.log(a);

// function someScope(){
// 	console.log(a);
// 	var a = 2;
// 	console.log(a);
// }
// someScope();

// //arguments
// function functionArguments(arg1 = 3, arg2 = 4){
// 	return arg1*arg2;
// }

// console.log (functionArguments());//3*4
// console.log (functionArguments(2));//2*4
// console.log (functionArguments(2,3));//2*3

//factorial
//5! = 5 * 4 * 3 * 2 * 1

// var n = 5;
// function factorial(n){
// 	if (n == 1){
// 		return 1;
// 	}
// 	return n*factorial(n-1);
// }
// console.log(factorial(n));

//массивы
// var arr = [2,"string",false,null,undefined,{'a':1}];

// for(var i=0;i<6;++i){
// 	console.log(typeof arr[i]);
// }

//Методы для массивов
// var arrStandart = [2,"string",false,null];
// arrStandart.forEach(function(item,index){
// 	console.log(index,item);
// });

// var arrInegers = [3,4,5,6,6];
// arrInegers.forEach(function(item, index){
// 	console.log(index, item);
// });

// var doubleIntegers = arrInegers.map(function(item){
// 	return item*2;
// });
// console.log ( doubleIntegers );

// var arrStrings = ['a', 'b', 'c'];
// var mappedStrings = arrStrings.map(function(s){
// 	return s+'a';
// });
// console.log(mappedStrings);

// var arrInegers = [3,4,5,6,6];
// var filteredIntegers = arrInegers.filter(function(v){
// 	if(v > 3 && v < 6 ) {
// 		return false;		
// 	}
// 	return true;
// })
// console.log(filteredIntegers);


// var arrStandart = [2,"2", "string",false,null];
// var filteredDiffTypes = arrStandart.filter(function(a){
// 	if ( a === 2 ){
// 		return true;
// 	}
// });
// console.log(filteredDiffTypes);

//вспомним еще раз типы
// console.log ( typeof 'false');
// console.log ( typeof false);

// var a = 'false';
// if ( a == true ){
// 	console.log ('Is false');
// } else {
// 	console.log ('Not false');
// }

// var obj = {
// 	'a':1,
// 	'b':true
// };
// console.log( obj.a );
// var someVarOfObj = 'a';
// console.log ( obj[someVarOfObj] );

// var objTypes = {
// 	'a':2,
// 	'b':"string",
// 	'c':false,
// 	'd':null,
// 	'e':undefined,
// 	'f':{'a':1}
// };

// for (var i in objTypes){
// 	console.log(objTypes[i]);
// }

// // console.log(Object.keys(objTypes));
// console.log(Object.values(objTypes));

//самовызывающаяся (анонимная) функция
// (function(){
// 	console.log('x');
// }());


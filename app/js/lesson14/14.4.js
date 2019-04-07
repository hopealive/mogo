/*
* 2019-04-07
* @gregzorb
* lesson 14
* Task 4
* 
* Также дописать функцию pick(counter, x) которая вызвает 
* функцию gen заданное число (x) раз и возвращает массив 
* с результатами вызовов.
*/
'use strict';


var counter = createCounter(0,2);
console.log(pick(counter, 5)); // [0,2,4,6,8]

function createCounter(someValue, step){
	var base = someValue - step;
	return function(){
		return base += step;
	}
}

function pick(counter, iterates){
	var result = [];
	for(let i=0;i < iterates;++i ){
		result.push(counter());
	}
	return result;
}


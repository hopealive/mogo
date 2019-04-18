/*
* 2019-04-07
* @gregzorb
* lesson 16
*
* Task 1
* Вывести количество свойств в объекте
* написать метод getCount
*/
'use strict';

function getCount(param){
	if (Array.isArray(param)){
		let c = 0;
		param.forEach(function(){ c++; });
		return c;
	}
	if (typeof param == 'object'){
		return Object.keys(test1).length;
	}
	return 0;
}

function getCount2(data){
	if (typeof data == 'object'){
		let c = 0;
		for (let i in data){
			++c;
		}
		return c;
	}
	return 0;//function, other types
}


var test1 = {a:1, b:2, c:3};
console.log(getCount(test1));
var test2 = function(){};
console.log(getCount(test2));
var test3 = [1,2,3,4];
console.log(getCount(test3));
var test4 = [];
test4[100] = 1;
console.log(getCount(test4));

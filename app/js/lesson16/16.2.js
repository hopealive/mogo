/*
* 2019-04-07
* @gregzorb
* lesson 16
* Task 2
* Реализовать функцию getField, которая берет массив объектов и 
* выводит массив запрашиваемых значений
*/
'use strict';

var test = [
	{'firstName':'test1','lastName':'test3'},
	{'firstName':'test2','lastName':'test4'},
];
console.log(getField(test,'firstName'));// ['test1','test2']

function getField(data, field){
	return data.map(function(d){
		return d[field];
	})
}


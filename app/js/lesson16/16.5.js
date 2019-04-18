/*
* 2019-04-07
* @gregzorb
* lesson 16
* Task 5
* Реализовать функцию map(fn, array), которая принимает 
* на вход функцию и массив, и обрабатывает каждый элемент массива 
* этой функцией, возвращая новый массив.
*/

function square(x) {return x*x;}
console.log(map(square,[1,2,3,4]));//1,4,9,16
console.log(map(square,[]));

function map(operation, params){
	return params.map(function(p){
		return operation(p);
	})
}
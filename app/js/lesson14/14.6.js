/*
* 2019-04-07
* @gregzorb
* lesson 14
*
* Task 6
* Реализовать функцию filter, которая принимает функцию-предикат и массив. 
* Возвращает она массив значений, для которых предикат вернет true. 
* Функция не должна изменять исходный массив.
*/
var input = [1,2,3,4,5,6];
function isOdd(x) {return x%2 == 1} //если нечестный - true

console.log (filter(input, isOdd) );

function filter(input, validator){
	return input.filter(function(i){
		return validator(i);
	})
}




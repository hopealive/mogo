/*
* 2019-04-07
* @gregzorb
* lesson 14
* Task 3
* Реализовать функцию создания счетчика createCounter(start, step). 
* Она при вызове возвращает другую функцию-генератор, 
* которая при каждом вызове дает число на 1 больше, 
* и так до бесконечности. 
* Начальное число, с которого начинать отсчет, и шаг, 
* задается при создании генератора. 
* Начальное значение по умолчанию равно 0. 
* Написать метод createCounter
*/
'use strict';


function createCounter(someValue, step){
	var base = someValue - step;
	return function(){
		return base += step;
	}
}

var counter = createCounter(10,3);
var counter2 = createCounter(7,1);

console.log(counter());//10
console.log(counter());//13

console.log(counter2());//7

console.log(counter());//16

console.log(counter2());//8

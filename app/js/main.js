/*
* 2019-03-28
* @gregzorb
* Главный файл проекта
* lesson 14. Задачи
*/
'use strict';

/*
* Task 1
* Вывести количество свойств в объекте
* написать метод getCount
*/

// var test1 = {a:1, b:2, c:3};
// console.log(getCount(test1)); //3
// var test2 = function(){};
// console.log(getCount(test2)); //0
// var test3 = [1,2,3,4];
// console.log(getCount(test3)); //4
// var test4 = [];
// test4[100] = 1;
// console.log(getCount(test4)); //1

/* 
* Task 2: 
* Реализовать функцию getField, которая берет массив объектов и 
* выводит массив запрашиваемых значений
*/

// var test = [
// 	{'firstName':'test1','lastName':'test3'},
// 	{'firstName':'test2','lastName':'test4'},
// ];
// console.log(getField(test,'firstName'));// ['test1','test2']


/* Task 3: 
* Реализовать функцию создания счетчика createCounter(start, step). 
* Она при вызове возвращает другую функцию-генератор, 
* которая при каждом вызове дает число на 1 больше, 
* и так до бесконечности. 
* Начальное число, с которого начинать отсчет, и шаг, 
* задается при создании генератора. 
* Начальное значение по умолчанию равно 0. 
* Написать метод createCounter
*/


// var counter = createCounter(10,3);
// var counter2 = createCounter(7,1);

// console.log(counter());//10
// console.log(counter());//13

// console.log(counter2());//7

// console.log(counter());//16

// console.log(counter2());//8

/* 
* Task 4
* Также дописать функцию pick(counter, x) которая вызвает 
* функцию gen заданное число (x) раз и возвращает массив 
* с результатами вызовов.
*/

// var counter = createCounter(0,2);
// console.log(pick(counter, 5)); // [0,2,4,6,8]

/* 
* Task 5
* Реализовать функцию map(fn, array), которая принимает 
* на вход функцию и массив, и обрабатывает каждый элемент массива 
* этой функцией, возвращая новый массив.
*/

// function square(x) {return x*x;}
// console.log(map(square,[1,2,3,4]));//1,4,9,16
// console.log(map(square,[]));

// function map(operation, params){
// 	return params.map(function(p){
// 		return operation(p);
// 	})
// }

/*
* Task 6
* Реализовать функцию filter, которая принимает функцию-предикат и массив. 
* Возвращает она массив значений, для которых предикат вернет true. 
* Функция не должна изменять исходный массив.
*/
// var input = [1,2,3,4,5,6];
// function isOdd(x) {return x%2 == 1} //если нечестный - true

// console.log (filter(input, isOdd) );


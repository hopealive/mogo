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

// function getCount(data){
// 	if (typeof data == 'object'){
// 		let c = 0;
// 		for (let i in data){
// 			++c;
// 		}
// 		return c;
// 	}
// 	return 0;//function, other types
// }








// var x1 = {'film1':'Titanic', 'film2':'X-Men'};
// console.log(yozhik(x1));//2

// var x2 = {'film1':'Titanic', 'film2':'X-Men', 'film3': 'Iron Man'};
// console.log(yozhik(x2));//3

// var x3 = [1,2,3,4];
// console.log(yozhik(x3));//4

// var x4 = [1,2,3,4];
// x4[1] = 51;
// console.log(yozhik(x4));//4

// function yozhik(arg){
// 	let counter = 0;
// 	for (let k in arg){
// 		counter++;
// 		//counter = counter + 1;
// 	}
// 	return counter;
// }




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

// function getField(data, key){
// 	let result = [];
// 	for (var k in data){
// 		var obj = data[k];
// 		result.push(obj[key]);
// 	}
// 	return result;
// }

// console.log (getValue(test, 'test2'));//firstName
// function getValue(data, val){
// 	let result = '';
// 	data.forEach(function(value, k){
// 		for (var key in value){
// 			if (value[key] == val){
// 				result = key;
// 			}
// 		}
// 	});
// 	return result;
// }


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

// function createCounter(base, increment){
// 	let counter = base - increment;
// 	return function(){
// 		counter = counter + increment;
// 		return counter;
// 	}
// }


/* 
* Task 4
* Также дописать функцию pick(counter, x) которая вызвает 
* функцию gen заданное число (x) раз и возвращает массив 
* с результатами вызовов.
*/

// var counter = createCounter(0,2);
// var result = pick(counter, 5);
// console.log(result); // [0,2,4,6,8]

// function pick(counter, iterates){
// 	var result = [];
// 	for (var i =0;i<iterates;i++){
// 		result.push(counter());
// 	}
// 	return result;
// }

/* 
* Task 5
* Реализовать функцию map(fn, array), которая принимает 
* на вход функцию и массив, и обрабатывает каждый элемент массива 
* этой функцией, возвращая новый массив.
*/

// function square(x) {return x*x;}
// function double(x) {return x*2;}

// console.log(map(square,[1,2,3,4]));//1,4,9,16
// console.log(map(square,[]));
// console.log(map(double,[1,2,3,4]));//2,4,6,8
// console.log(map(double,[]));

// function map(fn, arr){
// 	var result = [];
// 	for(let i = 0; i < arr.length; ++i){
// 		result.push( fn(arr[i]) );
// 	}
// 	return result;
// }

// function map(operation, params){
//     const playStore = [];
//     params.forEach(function(item){
//         var res = operation(item);
//         playStore.push(res);
//       });
//     return playStore;
// }


// function map(operation, params){
// 	return params.map(function(p){
// 		return operation(p); //square(1...4)
// 	})
// }

//[5,6,7], 10 ==>> [50,60,70]
// var data1 = [5,6,7];
// var increment1 = 10;
// console.log ( map(data1, increment1) );

// function map(data, increment){
// 	return data.map(function(v){
// 		return v*increment;
// 	});
// }

// arr = [10, 6, 30];
// incr = 10;
// function square(x, inc) {
//     return x * inc;
// };
// console.log(map(arr, incr));

// function map(data, inc){
//     let playStore = [];
//     data.forEach(function(item){
//         var res = square(item, inc);
//         playStore.push(res);
//     });
//     return playStore;
// }




/*
* Task 6
* Реализовать функцию filter, которая принимает функцию-предикат и массив. 
* Возвращает она массив значений, для которых предикат вернет true. 
* Функция не должна изменять исходный массив.
*/
// var input = [1,2,3,4,5,6];
// function isOdd(x) {return x%2 == 1} //если нечетный - true

// console.log (filter(input, isOdd) );

// function filter(arr, validator){
// 	return arr.filter(function(item){
// 		return validator(item);
// 	});
// }

// var temp = [true, false, true, false].filter(function(v){
// 	return v === true;
// });
// console.log(temp);
/*
* 2019-03-28
* @gregzorb
* Главный файл проекта
* lesson 19. 
*/
'use strict';


// var obj = {a: 'Ananas', b: 21};
// var obj = {a: 'Ananas', b: 21, c: { d: 'Oksana' }};
// var copy = _.cloneDeep(obj);
// console.log(copy);

// var cObj = obj; //копирование ссылки, а не самого объекта
// var cObj = Object.assign({}, obj);

// cObj.a = 'Banan';
// cObj.c.d = 'Vasya';
// console.log ( obj );
// console.log ( cObj );
//
//var cObj = {};


// function copyObj(obj) {
//    var cObj = {};
//    for (var i in obj) {
//        if (typeof obj[i] == 'object') {
//            cObj[i] = copyObj(obj[i]);
//        } else {
//            cObj[i] = obj[i];
//        }
//    }
//    return cObj;
// }

// var register = true;
// var menu = {
// 	'main': 'Главная',
// 	'products': {
// 		'categories': {
// 			'phones': 'Мобильный телефоны',
// 			'tv': 'Телевизоры',
// 			'vip': 'VIP',
// 		}
// 	},
// 	'about_us': 'О нас',
// 	'contucts': 'Контакты',
// };

// var menuDisplay = copyObj(menu);
// if (!register){
// 	menuDisplay.products.categories.vip = '';
// }
// console.log(menuDisplay);

// var isVip = false;
// var products = {
// 	'phones': {
// 		'iphonex': 1000,
// 		'iphonexmax': 1200,
// 	},
// 	'tv': {
// 		'samsung': 500,
// 		'sony_bravia': 1000,
// 	}
// };
// var productsDisplay = copyObj(products);
// console.log(productsDisplay);

// var obj = {a: 'Ananas', b: 21, c: { d: 'Oksana', e: {f: 'Mercedes'} }};

// var dObj = copyObj(obj);
// dObj.c.d = 'Vasya';
// dObj.c.e.f = 'Ford';

// console.log ( obj );
// console.log ( dObj );



// var objects = [{ 'a': 1 }, { 'b': 2 }];
// 
// var deep = _.cloneDeep(objects);
//console.log(objects[0]);
//console.log(deep[0]);
//
//console.log(deep[0] === objects[0]);
//console.log(deep[0] == objects[0]);
//console.log(deep[0] === objects[0]);


// function testFunc(arg1, arg2){
// 	// console.log(arg1, arg2);
// 	// console.log(arguments);

// //    //wrong way:
// //    arguments.each(function(v){
// //        console.log(v);
// //    });
// //
//    //true way 
//    var argArray = [].filter.call(arguments, function(item){
//        return true;
//    });
   
//    console.log ( argArray );	
// }

// testFunc(5,6);

//Задача 1.

// function add(a, b) { return a + b; }
// function multi(a, b) { return a * b; }

// function partial(fn, arg1){
//    return fn.bind(null, arg1);
// }
// var add5 = partial(add, 5);

// console.log( add5(1) ); //6
// console.log( add5(3) ); //8
// console.log( add5(8) ); //13
// console.log( add5(0) ); //5


// function testFunc(a, b, c){ return 'a='+a+',b='+b+',c='+c; }
// function partialDeep(fn, a, b, c){
// 	var filteredArgs = [].filter.call(arguments, function(item){
// 		if ( typeof item == 'number' || typeof item == 'undefined' ){
// 			return true;
// 		}
// 	});


// 	return function(arg){
// 		var mappedArgs = filteredArgs.map(function(item){
// 			if(typeof item == 'undefined'){
// 				return arg;
// 			}
// 			return item;
// 		});
// 		return fn.apply(null, mappedArgs);
// 	};
// }

// var testDeep = partialDeep(testFunc, 1, undefined, 3);
// console.log(testDeep(5));//a=1,b=5,c=3



// function func(a){
// 	return function(b){
// 		console.log(a, b);
// 	};
// }

// var test = func(1);
// console.log(test(2));
// console.log(test(5));




// var arr = [1, undefined ,5];
// var arr2 = arr.map(function(item){
// 	var c = 500;
// 	if (typeof item == 'undefined' ){
// 		return c;
// 	}
// 	return item;
// });
// console.log ( arr2 );


/**
 * [additionalOptions добавки к бургеру]
 * @type {Object}
 */
var additionalOptions = {
   'cheese': {price: 10, kcal: 20},
   'salad': {price: 20, kcal: 5},
   'potato': {price: 15, kcal: 10},
   'sauce': {price: 15, kcal: 0},
   'mayonnaise': {price: 20, kcal: 5},
};

/**
 * Класс главной сущности
 * 
 * @param {Number}
 * @param {Number}
 */
function Hamburger(price, kcal){
	this.price = price;
	this.kcal = kcal;
}

/**
 * Меняем составляющие бургера
 * 
 * @param {String}
 */
Hamburger.prototype.addOption = function(option){
	this.price += additionalOptions[option].price;
	this.kcal += additionalOptions[option].kcal;
}

/**
 * Метод для получения цены бургера
 * 
 * @return {Number}
 */
Hamburger.prototype.getPrice = function(){
	return this.price;
}


var bigBurger = new Hamburger(100, 60);
bigBurger.addOption('cheese');

var smallBurger = new Hamburger(50, 40);
smallBurger.addOption('mayonnaise');

var totalPrice = bigBurger.getPrice() + smallBurger.getPrice();
console.log(totalPrice);



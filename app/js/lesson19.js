/*
* 2019-04-23
* @gregzorb
* Главный файл проекта
* lesson 19. 
*/
'use strict';

//function func(a, b){
//    console.log (arguments);
//    
//    //wrong way:
//    arguments.each(function(v){
//        console.log(v);
//    });
//
//    //true way 
//    var argArray = [].filter.call(arguments, function(item){
//        console.log(item);
//        return true;
//    });
//    
//    console.log ( argArray );
//}
//
//func(1,2);

//Задача 1.
//function add(a, b) { return a + b; }
//function partial(fn, arg1){
//    return fn.bind(null, arg1);
//}
//var add5 = partial(add, 5);
//
//console.log( add5(1) ); //6
//console.log( add5(8) ); //13


//Задача 2.
//function testFunc(a, b, c){ return 'a='+a+',b='+b+',c='+c; }
//function partialDeep(fn, a, b, c){
//
//    //показать через slice
//    var bound = [].filter.call(arguments, function(item){
//        if ( item == undefined || typeof item == 'number' ) return true;
//        return;
//    });
//    return function(arg1){
//        var bindArguments = bound.map(function(mapArg){
//            if ( typeof mapArg !== 'number' ) return arg1;
//            return mapArg;
//        });
//        return fn.apply(null, bindArguments);
//    }
//}
//
//var test_1_3 = partialDeep(testFunc, 1, undefined, 3);
//
//console.log(test_1_3(5));//a=1,b=5,c=3

//Задача 3.
//var additionalOptions = {
//    'cheese': {price: 10, kcal: 20},
//    'salad': {price: 20, kcal: 5},
//    'potato': {price: 15, kcal: 10},
//    'sauce': {price: 15, kcal: 0},
//    'mayonnaise': {price: 20, kcal: 5},
//};
//
//function Hamburger(price, kcal){
//    this.price = price;
//    this.kcal = kcal;
//}
//Hamburger.prototype.addOption = function(name){
//    try {
//        let option = additionalOptions[name];
//        this.price += option.price;
//        this.kcal += option.kcal;
//    } catch (e){
//        console.log ('Передан некорректный параметр');
//    }
//}
//
//var small = new Hamburger(50, 40);
//small.addOption('cheese');
//console.log ( small );
//
//var big = new Hamburger(100, 60);
//console.log ( big );


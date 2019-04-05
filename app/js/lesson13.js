/*
* 2019-04-05
* @gregzorb
* Код по уроку 13
*/

'use strict';

//SCOPE 1
// console.log(a);
// var a = 1;
// console.log(a);

// function func(){
// 	//SCOPE 2
// 	console.log(a);
// 	var a = 6;
// 	console.log(a);
// }
// func();

//функцию колбек с ее замыканием
// function func(){
//    var baseSum = 1;
//    return function(){
//        return ++baseSum;
//    }
// }
// var sumValue = func();

// console.log(sumValue());
// console.log(sumValue());
// console.log(sumValue());

// var arr = [1,2,4,5,56];
// console.log(arr[2]);

// var f = {'name':'Vlad', 'surname':'Jobs'};
// var p = 'surname';
// console.log(f[p]);



//
//
// function func(){
//    incr.counter = 1;
//    function incr(){
//        return incr.counter++;
//    }
//    return incr;
// }
// var sumValue = func();

// console.log(sumValue());
// console.log(sumValue());
// console.log(sumValue());


// let a = 5;
// let a = 6; //wrong

// var b = 5;
// var b = 6;//ok

// var a = 5;
// function test(){
// 	var a = 6;
// 	console.log(a);
// }

// let b = 5;
// function test2(){
// 	let b = 6;
// 	console.log(b);
// }

// test();
// test2();


//setInterval
// var x = setInterval(function(){
//    console.log('setInterval: '+sumValue());
// }, 5000);

// //setTimeout
// var y = setTimeout(function(){
//    console.log('setTimeout: '+sumValue());
// }, 3000);

// var tram1 = 1; //число, строка ...
// var tram2 = tram1;
// tram2 = 2;

// console.log ( tram1 );
// console.log ( tram2 );


// var a = {x:1, y:2}; //объект

// var b = a;
// b.x = 2;

// var c = a;
// c.y = 3;

// console.log(a);
// console.log(b);
// console.log(c);

// Контекст
// var strahovatel = {
// 	name: "Vanya",
// 	age: 25,
// 	address: "ул. Пушкина, дом Колотушкина",
// 	getFullInfo: function(){
// 		return this.name +" "
// 			+ this.surname
// 			+" который живет по адресу"
// 			+ this.address;
// 	}
// };

// // console.log(strahovatel.getFullInfo());


// var strahovatelA = {name:1, surname:2}; //объект

// var strahovatelB = {};
// var indexes = Object.keys(strahovatelA);
// for (var i=0;i<indexes.length;++i){
// 	strahovatelB[indexes[i]] = strahovatelA[indexes[i]];
// }

// strahovatelB.name = 2;
// console.log (strahovatelA, strahovatelB);



// var strahovatel2 = strahovatel;
// strahovatel2.name = "Manya";

// console.log(strahovatel.name);
// console.log(strahovatel2.name);surname: "Pavlenko",




// var obj = {
//    arr: [1,2,3],
//    f: function(){ return this.arr; }
// };
// console.log( obj.f() );
//
//
//var obj = {
//    i: 100,
//    arr: [1,2,3],
//    f: function(){ return this.arr; }
//};
//console.log( obj.f() );
//
//obj.i++;
//console.log( obj.i );
//obj.i++;
//console.log( obj.i );
//obj.i++;
//console.log( obj.i );

// var obj = {
// 	strahovatel:{
// 		'name': 'Vanya',
// 		'surname': 'Ivanov',
// 	},
// 	strahovschik: {
// 		'name': 'TAS',
// 	},
// 	getFullName: function(){
// 		return this.strahovatel.name + ' ' + this.strahovatel.surname;
// 	},
// 	getInfo: function(){
// 		//Vanya Ivanov - TAS
// 		return this.getFullName() + ' - ' + this.strahovschik.name;
// 	}
// };
// console.log(obj.getInfo());

//Дескрипторы

// var strahovatel ={
// 	'name': 'Vanya',
// 	'surname': 'Ivanov',
// };
// console.log ( Object.keys(strahovatel) );

// Object.defineProperty(strahovatel, "surname", {
// 	value: 'Petrov',
// 	writable: true, 
// 	configurable: true, 
// 	enumerable: false
// });
// console.log ( Object.keys(strahovatel) );


//var user = {};
//Object.defineProperty(user, "name", { value: "defaultValue", configurable: true, writable: true, enumerable: true});
//console.log (Object.keys(user) );//enumerable
//
//user.name = 'newValue'; //writable //only if writable == true
//console.log( user.name );
//
//delete user.name;//configurable
//console.log( user.name );
//
//Object.defineProperty(user, "name", { value: "defaultValue", configurable: false, writable: false, enumerable: false});
//
//console.log (Object.keys(user) );//empty
//
//user.name = 'newValue'; //error
//console.log( user.name );
//
//delete user.name;//error
//console.log( user.name );


//Конструкторы

// var strahovatel = {
// 	name: "Vanya",
// 	age: 25,
// 	address: "ул. Пушкина, дом Колотушкина",
// 	getFullInfo: function(){
// 		return this.name +" "
// 			+ this.surname
// 			+" который живет по адресу"
// 			+ this.address;
// 	}
// };

//Strahovatel.list = [];
//function Strahovatel(name, age, address){
//	this.name = name;
//	this.age = age;
//	this.address = address;
//	Strahovatel.list.push({
//		name: this.name,
//		age: this.age
//	});
//	Strahovatel.getGoodAge = function(){
//		return Strahovatel.list.filter(function(s){
//			return s.age >= 18;
//		});
//	}
//}
//
//var vanya = new Strahovatel("Vanya", 25, "ул. Пушкина, дом Колотушкина 2");
//var petya = new Strahovatel("Petya", 20, "ул. Пушкина, дом Колотушкина 5a");
//var dasha = new Strahovatel("Dasha", 15, "ул. Пушкина, дом Колотушкина 53");
// console.log(Strahovatel.list);
// console.log ( Strahovatel.getGoodAge() );


// Strahovschik.rates = [];
// function Strahovschik(name, rate){
// 	this.name = name;
// 	this.rate = rate;
// 	Strahovschik.rates.push(this.rate);
// 	Strahovschik.maxRate = function(){
// 		return Math.max.apply(null, Strahovschik.rates);
// 	}
// }

// var pzu = new Strahovschik("PZU", 50);
// var tas = new Strahovschik("TAS", 30);
// console.log (Strahovschik.maxRate());


// Student.nameList = [];
// function Student(name, surname, age, city){
// 	this.name = name;
// 	this.surname = surname;
// 	this.age = age;
// 	this.city = city;

// 	Student.nameList.push(this.name+" "+this.surname);
// }

// var petya = new Student("Petya", "Po", 45);
// var vova = new Student("Vova", "Zorro", 40);

// // console.log (petya.getAge() );
// console.log (Student.nameList );




//function User(firstname,lastname,age){
//    this.firstname = firstname;
//    this.lastname = lastname;
//    this.age = age;
//}
//
//console.log (new User('TestName','TestLastName',30));
//
////экземпляры
//var dasha = new User('Dasha','Ivanenko',18);
//var anton = new User('Anton','Krivenko',21);
//
//console.log(anton instanceof User); 
//console.log(anton);
//console.log(dasha);


//private functions
//User.list = [];
//function User(firstname,lastname,age){
//    this.firstname = firstname;
//    this.lastname = lastname;
//    this.age = age;
//    this.getFullName = function(){
//        return this.firstname+" "+this.lastname;
//    };
//    User.list.push({
//        fullName: this.getFullName(),
//        age: this.age
//    });
//    User.getFreshUsers = function () {
//        return User.list.filter(function (u) {
//            return u.age < 20;
//        });
//    };    
//}
//
//
//var dasha = new User('Dasha','Ivanenko',18);
//var anton = new User('Anton','Krivenko',21);
//var kirill = new User('Kirill','Antonenko',25);
//
//console.log(User.list);
//console.log(User.getFreshUsers());
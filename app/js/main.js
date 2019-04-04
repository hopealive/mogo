/*
* 2019-03-28
* @gregzorb
* Главный файл проекта
* lesson 13
*/
'use strict';


//var,let

////функцию колбек с ее замыканием
//function func(){
//    var baseSum = 1;
//    return function(){
//        return baseSum = baseSum+1;
//    }
//}
//var sumValue = func();
//
//console.log(sumValue());
//console.log(sumValue());
//console.log(sumValue());
//
//
//function func(){
//    incr.counter = 1;
//    function incr(){
//        return incr.counter++;
//    }
//    return incr;
//}
//var sumValue = func();
//
//console.log(sumValue());
//console.log(sumValue());
//console.log(sumValue());
//
////setInterval
//var x = setInterval(function(){
//    console.log('setInterval: '+sumValue());
//}, 5000);
//
////setTimeout
//var y = setTimeout(function(){
//    console.log('setTimeout: '+sumValue());
//}, 3000);
//
//
////Контекст
//var obj = {
//    arr: [1,2,3],
//    f: function(){ return this.arr; }
//};
//console.log( obj.f() );
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


//Дескрипторы
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
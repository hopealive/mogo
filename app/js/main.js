/*
* 2019-03-28
* @gregzorb
* Главный файл проекта
* lesson 16. 
*/
'use strict';

var animals = {
    colors: 'lot'
};

var cat = {
    size: 'small',
    name: 'Simon',
};

//cat.__proto__ = animals;
//console.log(cat.colors);


//function Dog(name){
//    this.name = name;
//    this.__proto__ = animals;
//}
//
//var dog = new Dog('Шарик');
//console.log ( dog.colors ); //IE 10-

//old style
//function Dog(name){
//    this.name = name;
//}
//Dog.prototype = animals; //только объект
//var dog = new Dog('Шарик'); //!!Важно, что прежде всего для new
//console.log ( dog.colors );



//переопределяет только последнее
//cat.colors = 'red';
//console.log(animals.colors);
//console.log(cat.colors);

//console.log( cat.hasOwnProperty('colors'));//false - from animals
//console.log( cat.hasOwnProperty('size'));//true 



//встроенные объекты: Date, Array, Object
//console.log({}.__proto__.toString);

//hasOwnProperty - переопределяем toString
//console.log( animals.toString );
//console.log (animals.hasOwnProperty('toString') ? animals.toString : undefined );
//
//var animals = Object.create(null);
//animals.colors = "lot";
//
//console.log( animals.toString );


//console.dir([1,2,3]);
//наследование

//function Human(name) {
//    this.name = name;
//    this.age = 0;
//}
//Human.prototype.increase = function(age) {
//    this.age += age;
//    console.log( this.name + ' выроc на ' + this.age + ' годиков' );
//};
//
//Human.prototype.born = function() {
//    this.age = 0;
//    console.log( this.name + ' родился. Возраст: '+this.age );
//};
//
//function Student(name){
//    this.name = name;
//    this.age = 0;
//}
//
//Student.prototype = Object.create(Human.prototype);
//
//Student.prototype.fastIncrease = function(){
//    this.age++;
//    console.log(this.name + ' уже стар как только стал студентом. Возраст уже: ' +this.age );
//}
//Student.prototype.constructor = Student;
//
//
//var vasya = new Student('Вася');
//vasya.born();
//vasya.increase(16);
//vasya.fastIncrease();

//console.log (new Date());
//console.log (new Date(1234567890123)); //new Date(value);
//console.log (new Date("2019-01-01")); //new Date(dateString);
//console.log (new Date(2019,1,1,12,0,0)); //new Date(year, month[, day[, hours[, minutes[, seconds[, milliseconds]]]]]);

//console.log (Date.now());
//console.log (Date.parse("2019-01-01"));

//var d = new Date();
//console.log ( d.getDay() ); // day of the week (0-6)
//console.log ( d.getDate() ); // day 
//console.log ( d.getMonth() ); //0-11
//console.log ( d.getYear() ); //2-3 цифры согласно локали
//console.log ( d.getFullYear() );




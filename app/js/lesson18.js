/*
* 2019-04-16
* @gregzorb
* Главный файл проекта
* lesson 18. 
*/
'use strict';





function showName(){
   console.log(this.name);
}
function showByField(field, arg1, arg2){
   console.log(this[field]);
}

var vasya = {name: 'Vasya', age: 40};
var petya = {name: 'Petya', age: 30};
var jessica = {name: 'Jessica', age: 20};
showName.call(vasya);
showByField.call(vasya, 'name', 1,2);
showByField.call(vasya, 'name', 1,2);

//Вызов функции в другом контексте
//Написать вызов функции, чтобы она вывела массив [1,2,3] и 'test'
//function logArray(param1) { console.log(this); console.log(param1); }
//var test = [1,2,3];
//logArray.call(test, 'test');


//Вызвать функцию таким образом, чтобы получить тест "test"
//var obj = {testKey: 'test'};
//function foo() {
//    console.log(this.testKey);
//}
//foo.call(obj);

///Вызвать функцию таким образом, чтобы получить тест "test" передавая ключ вывода
//var obj = {testKey: 'test'};
//function foo() {
//    console.log(this.testKey);
//}
//foo.call(obj, 'testKey');

//Вызвать родительский конструктор с передачей arguments

//function Human(firstName, secondName) { 
//    this.firstName = firstName; 
//    this.secondName = secondName; 
//}
//
//function Student(name, surname) { 
//    Human.apply(this, [name, surname]);
//}
//
//var student1 = new Student('Oleg', 'Vinnyk');
//console.log (student1); // test1, test2
//console.log (student1.firstName); // test1
//console.log (student1.secondName); // test2



/*
 * APPLY
 */
//Math.max(1,2,3)
//Math.max.apply(null, [1,2,3]); //null - потому что в Math не используется this, no 'use strict' - если null будет window
//Math.max.apply(Math, [1,2,3]);

//function testApply(args){
//    this.location = 'http://google.com';
//    console.log(this);
//    console.log(args);
//}
//testApply(null, [1,2,3]);

//var obj = {phrase: 'This is '};
//var arr = ['Ivan', 'Ivanov']
//
//function foo(firstName, lastName){
//    console.log(this.phrase + firstName + ' ' + lastName);
//}
//foo.apply(obj, arr);

//Bind
//function logArray(param1) { console.log(this); console.log(param1); }
//
//var context = [1,2,3];
//var logBinded = logArray.bind(context);
//logBinded('test');

//Карирование
//способ конструирования функций, позволяющий частичное применение аргументов функции
//var curried = function(firstName){
//    return function(lastName){
//        return firstName+' '+lastName;
//    }
//}
//console.log(curried('Jessica')('Alba') );

//try {
//    alert(x); //no var x
//} catch (e){
//    console.log(e);
//}
//console.log('SHOW MUST GO ON');


//var test; 
//try {
//    console.log(test.test);
//} catch (e){
//    console.log(e);
//}
//console.log('SHOW MUST GO ON');


/*
 * @name SomeJSDocTest
 * @param {string}
 * @return {string}
 */
//function test(paramName) {
//    console.log(paramName);
//    return paramName+'.';
//}

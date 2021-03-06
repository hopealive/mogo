/*
* 2019-04-11
* @gregzorb
* Главный файл проекта
* lesson 17. 
*/
'use strict';
/*
 * @name SomeJSDocTest
 * @param {string}
 * @return {string}
 */
function test(paramName) {
   console.log(paramName);
   return paramName+'.';
}


/*
 * Эта функция выводит полное имя и фамилию
 * @name TestFullNameForJsDoc
 * @param {string} firstName
 * @param {string} lastName
 * @returns {String|Boolean}
 */
function getFullName(firstName, lastName, age){
    if ( typeof age == 'string'){
        return false;
    }
    return firstName+ ' '+lastName;
}





//call
//Синтаксис
// functionName.call(obj, arg1, arg2 ...);
// function showName(){
//    console.log(this.name);
// }
// function showByField(field = 'name'){
//    console.log(this[field]);
// }

// var vasya = {name: 'Vasya', age: 40};
// var petya = {name: 'Petya', age: 30};
// var jessica = {name: 'Jessica', age: 20};
// showName.call(vasya);
// showByField.call(vasya, 'age');



//Вызов функции в другом контексте
//Написать вызов функции, чтобы она вывела массив [1,2,3] и 'test'
// function logArray(param1) { console.log(this); console.log(param1); }
// var test = [1,2,3];
// logArray.call(test, 'test');


// Вызвать функцию таким образом, чтобы получить тест "test"
// var obj = {testKey: 'test'};
// function foo() {
//    console.log(this.testKey);
// }
// foo.call(obj);

///Вызвать функцию таким образом, чтобы получить тест "test" передавая ключ вывода
// function foo(key) {
//    console.log(this[key]);
// }

// var obj = {testKey: 'test'};
// foo.call(obj, 'testKey');




//Вызвать родительский конструктор с передачей arguments

// function Human(firstName, secondName) { 
//    this.firstName = firstName; 
//    this.secondName = secondName; 
// }

// function Student(name, surname, group) {  //extends Human
// 	Human.apply(this, [name, surname]);
// 	this.group = group;
// }

// var oleg = new Student('Oleg', 'Vinnyk', 'DITS-12');
// console.log(oleg);



// var human1 = new Human('Oleg', 'Vinnyk');
// console.log ( human1 );
// var student1 = new Student('Oleg', 'Vinnyk', 'DITS-12');
// console.log (student1); // test1, test2
//console.log (student1.firstName); // test1
//console.log (student1.secondName); // test2


// function MobilePhones(simNumber, price){
// 	this.simNumber = simNumber;
// 	this.price = price;
// }

// function Smartphones(simNumber, price, screenLength, processor){
// 	MobilePhones.apply(this, [simNumber, price]);
// 	this.screenLength = screenLength;
// 	this.processor = processor;
// }


// var lg = new Smartphones(2, 1000, 6, 'ARM-8');
// console.log(lg);




/*
 * APPLY
 */
// 'use strict';
// var a = [5,6,7,1];
// var b = [1,4,2];

// function max(arg){
// 	console.log(this);
// 	return Math.max.apply(null, arg);
// }
// console.log(max(a));
// console.log(max(b));

// console.log ( Math.max(10,2,3) );
//Math.max.apply(null, [1,2,3]); //null - потому что в Math не используется this, 
// no 'use strict' - если null будет window
//Math.max.apply(Math, [1,2,3]);

//function testApply(args){
//    this.location = 'http://google.com';
//    console.log(this);
//    console.log(args);
//}
//testApply(null, [1,2,3]);

// var obj = {phrase: 'This is '};
// var arr = ['Ivan', 'Ivanov']

// function foo(firstName, lastName){
//    console.log(this.phrase + firstName + ' ' + lastName);
// }
// foo.apply(obj, arr);
// console.log(arr);


//Bind
// function logArray(param1) { console.log(this); console.log(param1); }

// var context = [1,2,3];
// var logBinded = logArray.bind(context);
// logBinded('test');


// function showArticle() {
// 	console.log(this.title);  
// }

// var eventsContext = {title: 'Маша накрасилась'};
// var events = showArticle.bind(eventsContext);
// events();

// var shopContext = {title: 'Смартфоны'};
// var shop = showArticle.bind(shopContext);
// shop();


// function ArticleModel(arg1, arg2){
// 	this.title = arg1;
// 	console.log (this.title);
// }

// var newsContext = ['title', 'date'];
// var news = ArticleModel.bind(newsContext);
// news('Главная новость', '2019-04-11 12:00:00');


// var shopContext = ['title', 'price'];
// var shop = ArticleModel.bind(shopContext);
// shop('Смартфоны', 100);



//Карирование
//способ конструирования функций, 
// позволяющий частичное применение аргументов функции
// var curried = function(firstName){
//    return function(lastName){
//        return firstName+' '+lastName;
//    }
// }
// console.log(curried('Jessica')('Alba') );

// function mul(x1){
// 	return function(x2){
// 		return x1*x2;
// 	}
// }
// console.log( mul(2)(3) );

// function bMul(x1){
// 	return this.x2*x1;
// }

// var obj = {x2: 2};
// var mul = bMul.bind(obj);
// console.log( mul(3) );


   // alert(x); //no var x


// try {
//    alert(x); //no var x
// } catch (error){
//    console.log(error);
// }

// try {
// 	console.log(articles);
// } catch(e) {
// 	console.error(e);
// }

// console.log('SHOW MUST GO ON');


// let a = 5;


// console.log('Начинаем работать');

// try {
// 	console.log(a+b);
// 	console.log(x);
// 	console.log('Этого не будет, здесь выше ошибка');
// } catch(e) {
// 	console.error('Произошла неведомая фигня. Суть фигни:' + e);
// }
// console.log('Продолжаем работать');

// var obj;
// try {
// 	console.log (obj.description);
// } catch(e) {
// 	console.error('Some error');
// }





//var test; 
//try {
//    console.log(test.test);
//} catch (e){
//    console.log(e);
//}
//console.log('SHOW MUST GO ON');


/*
 * Эта функция выводит полное имя и фамилию
 * @name TestFullNameForJsDoc
 * @param {string} firstName
 * @param {string} lastName
 * @returns {String|Boolean}
 */
// function getFullName(firstName, lastName, age){
//     if ( typeof age == 'string'){
//         return false;
//     }
//     return firstName+ ' '+lastName;
// }


/*
 * @name SomeJSDocTest
 * @param {string}
 * @return {string}
 */
// function test(paramName) {
//    console.log(paramName);
//    return paramName+'.';
// }

// var obj = {a: 1, b: 2};
// var jsonStr = JSON.stringify(obj);
// console.log(jsonStr);

// var jsonData = '{"status":"ok", "code":200}';
// JSON.parse(jsonData, function(k,v){
// 	console.log(k,v);
// });
// var jsonObj = {
// 	'status': 'ok',
// 	'code': 200
// }
// var result = JSON.stringify(jsonObj);
// console.log ( result );

// var str = '{';
// for (i in jsonObj){
// 	str += '"i": "'+jsonObj+'",';
// }
// str = '}';



// var obj = {
// 	'id': 5,
// 	'title': 'Холодильник',
// 	'brand': 'Ariston',
// }
// var objStr = JSON.stringify(obj);
// console.log(objStr);




// var products = [
// 	{
// 		'id': 1,
// 		'price': 100,
// 	},
// 	{
// 		'id': 2,
// 		'price': 200,
// 	}
// ];
// var jsonString = JSON.stringify(products);
// console.log(jsonString);



var resultStr = '[{"id":1,"price":"Сумма: 100 грн"},{"id":2,"price":"Сумма: 200 грн"}]';
var prices = [];
var sum = 0;
JSON.parse(resultStr, function(k, v){
	if ( k == 'price'){
		// prices.push(v);
		var reg = /(\w+)\s(\D+)/;
		var price = v.replace(reg, "$1");

		var reg2 = /(\W+):\s/;
		price = price.replace(reg2, "");


// console.log(v);		
// 		let price = v.replace(" грн", "");
// 		price = price.replace("Сумма: ", "");
// console.log(price);		
		sum += parseInt( price );
		// console.log(v);
	}
})
console.log(sum);
// console.log(prices);

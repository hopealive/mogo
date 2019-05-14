/*
* 2019-04-25
* @gregzorb
* Для урока 20. 
*/
'use strict';

var table = document.getElementById('age-table');
var labels = table.getElementsByTagName('label');
console.log (labels);

//tBody
//rows
//cell

var firstCell = table.rows[0].cells[0];
// console.log(firstCell);

var forms = document.getElementsByTagName('form');
// console.log ( forms[1] );

//css style
// form[name="search"] {}
var formSearch = document.querySelector('form[name="search"]');
// console.log(formSearch);

var inputSearch = formSearch.querySelector('input[name="search"]');
// console.log ( inputSearch );

// Элемент с именем info[0], без точного знания его позиции в документе.
var elemInfo0 = document.getElementsByName('info[0]');
// console.log(elemInfo0[0]);

//Элемент с именем info[0], внутри формы с именем search-person.
// var formSearchPerson = document.getElementsByName('search-person');
// var elemInfo0 = formSearchPerson[0].getElementsByName('info[0]');
// console.log(elemInfo0);

console.log (document.getElementsByName('search'));












////Все элементы label внутри таблицы. Должно быть 3 элемента.
//var table = document.getElementsByTagName('table')[0];
//var labels = table.getElementsByTagName('label');
//
////Первую ячейку таблицы (со словом "Возраст")
//var cells = table.getElementsByTagName('td');
//[].forEach.call(cells, function(cell){
//    console.log(cell.innerHTML);
//    //todo: return index
//});


//Вторую форму в документе.
//Форму с именем search, без использования её позиции в документе.
//Элемент input в форме с именем search. Если их несколько, то нужен первый.
//Элемент с именем info[0], без точного знания его позиции в документе.
//Элемент с именем info[0], внутри формы с именем search-person.



//var ageInputs = document.getElementsByName("age");
//for(let i = 0; i < ageInputs.length; ++i){
//    console.log( ageInputs[i].attributes );
//    console.log( ageInputs[i].hasAttribute('value') );
//    console.log( ageInputs[i].getAttribute('value') );
//
//    ageInputs[i].setAttribute('value', 100);
//    console.log( ageInputs[i].getAttribute('value') );
//
//    ageInputs[i].removeAttribute('value');
//    console.log( ageInputs[i].hasAttribute('value') );
//}


/*
* 2019-03-28
* @gregzorb
* Главный файл проекта
* lesson 20. 
*/
'use strict';

// console.log ( document ); // ALL -->
// console.log ( document.documentElement ); // ONLY HTML --> 
// console.log ( document.body ); //BODY -->

// var tables = document.getElementsByTagName('table');
// console.log(tables); //collection
// var table = tables[0];
// console.log(table); //object
// console.log(table.tHead); //only html
// console.log(table.tBodies); //collection
// console.log(tables[1].tBodies); //collection

// console.log(table.tBodies[0].rows); //collection
// console.log(table.tBodies[0].rows[0].cells); //collection

// let seconCellFirstRow = table.tBodies[0].rows[0].cells[1];
// console.log(seconCellFirstRow); //second cell in first row collection
// console.log(seconCellFirstRow.cellIndex); //Number




var blockNews = document.getElementById('block-news');
// console.log ( blockNews.childNodes ); //NodeList, коллекция узлов

var blockAdv = document.getElementById('block-adv'); //no text
// console.log ( blockAdv.childNodes );
// try {
//    blockNews.childNodes = blockAdv.childNodes;
// } catch(e){
//    console.error(e);
// }
// 
// console.log( document.getElementById('random_not_exists') );

// console.log ( document.getElementsByTagName('head') );
// console.log ( document.getElementsByTagName('ul') );
// 
var submenu = document.getElementById('submenu');
var submenuUl = submenu.getElementsByTagName('ul');

// for (let i = 0; i < submenuUl.length; ++i){
// 	let ulChildNodes = submenuUl[i].childNodes;
// 	let submenuLi = [].forEach.call(ulChildNodes, 
// 		function(item){
// 			let pElements = item.childNodes;
// 			console.log(pElements)
// 		}
// 	);	
// 	// console.log( submenuUl[i].childNodes );
// }

// var els = [].forEach.call(submenuUl)

// console.log (submenuUl);
// var submenuLi = [].forEach.call(submenuUl[0].childNodes, 
// 	function(item){
// 		console.log(item)
// 	});




//get comments
//// block-events
// var blockEvents = document.getElementById('block-events');
// [].forEach.call(blockEvents.childNodes, function(chNode){
// 	if ( chNode.nodeType == Node.COMMENT_NODE){
// 		console.log(chNode);
// 	}
// })
// 
//var events = document.getElementById('block-events');
//[].forEach.call(events.childNodes, function(node){
//    if ( node.nodeType == Node.COMMENT_NODE){
//        console.log('nodeType: '+node.nodeType);
//        console.log ( node );
//        //previousSibling
//        //nextSibling
//    }
//});

// block-news
// var blockNews = document.getElementById('block-news');
// console.log(blockNews.childNodes);
// var newsNodes = [].map.call(blockNews.childNodes, 
// 	function(chNode){
// 		return chNode;
// 	});
// console.log ( newsNodes );




//Не забываем про букву "s"! : getElementById (no S) || getElementsByClassName (with S)

//get header only
//var header = document.getElementsByTagName('header');
// var events = document.getElementsByClassName('events');
// var events2 = document.getElementById('block-events');
// console.log ( events1 === events2 );

// console.log ( events[0] ); 
// console.log ( events[0].querySelector('div.event') ); 
// console.log ( events[0].querySelector('.event') )
// console.log ( events[0].querySelectorAll('div.event') ); 

//event-2
// var secondEvent = document.getElementById('event-2');
// console.log ( secondEvent.matches('.super-event') );
// console.log ( secondEvent.closest('.events') );

//contains
// var eventBlock = document.getElementById('block-events');
// var event1 = document.getElementById('event-1');
// console.log (eventBlock.contains(event1));
// 
// 
// <div id="block-adv"><div class="title"></div></div>
// var blockAdv = document.getElementById('block-adv');
// var blockAdvTitles = document.getElementsByClassName('title');
// for (let i =0; i < blockAdvTitles.length; ++i){
// 	console.log ( blockAdvTitles[i] );
// 	console.log ( blockAdv.contains(blockAdvTitles[i]) );
// }

// console.log ( blockAdv.contains(blockAdvTitles[0]) );
// 

// <div id="block-most-wanted-events" class="events"></div>
var blockMWEvents = document.getElementById('block-most-wanted-events');

// console.log ( blockMWEvents.hasAttribute('class') );
// console.log ( blockMWEvents.hasAttribute('name') );

// console.log ( blockMWEvents.getAttribute('class') );
// blockMWEvents.setAttribute('class', 'super-event');
// console.log ( blockMWEvents.getAttribute('class') );

// blockMWEvents.removeAttribute('class');
// console.log ( blockMWEvents.hasAttribute('class') );
// 
// 
var eventBlock = document.getElementById('block-events');
// console.log(eventBlock.innerHTML);
// console.log(eventBlock.outerHTML);

// var confirm = false;
// if ( confirm() ){
// 	document.write('<textarea>'+eventBlock.innerHTML+'</textarea>');
// }

var innerHTMLBlock = document.getElementById('innerHTML');
// console.log ( innerHTMLBlock.outerHTML );
// console.log ( innerHTMLBlock.textContent );

// var header = document.getElementById('header');
// console.log ( header.classList.contains('some-header') );

// if ( confirm()){
// 	header.classList.add('hidden');
// }

// setInterval(function(){
// 	header.classList.add('hidden');
// }, 1000)

// setInterval(function(){
// 	header.classList.remove('hidden');
// }, 2000)


// setInterval(function(){	header.classList.toggle('hidden');}, 1000)

/**
* Показывает уведомление, пропадающее через 2 сек
*
* @param options.top {number} вертикальный отступ, в px
* @param options.right {number} правый отступ, в px
* @param options.сolor {string} строка цвета
* @param options.className {string} CSS-класс
* @param options.html {string} HTML-текст для показа
*/
function showNotification(options) {
	var notificationsBar = document.getElementsByClassName(options.className)[0];
	notificationsBar.innerHTML = options.html;	
	notificationsBar.style.color = options.color;
	setTimeout(function(){
		notificationsBar.classList.add('hidden');
	}, 2000);
}
var options = {
	top: '10',
	right: '50',
	color: 'red',
	className: 'notifications',
	html: '<h1>HTML from options',
}
showNotification(options);
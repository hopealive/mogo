/*
* 2019-03-28
* @gregzorb
* Главный файл проекта
* lesson 20. 
*/
'use strict';

//console.log ( document ); // ALL -->
//console.log ( document.documentElement ); // ONLY HTML --> 
//console.log ( document.body ); //BODY -->

//var tables = document.getElementsByTagName('table');
//console.log(tables); //collection
//var table = tables[0];
//console.log(table.tHead); //only html
//console.log(table.tBodies); //collection
//console.log(table.tBodies[0].rows); //collection
//console.log(table.tBodies[0].rows[0].cells); //collection
//
//let seconCellFirstRow = table.tBodies[0].rows[0].cells[1];
//console.log(seconCellFirstRow); //second cell in first row collection
//console.log(seconCellFirstRow.cellIndex); //Number




//var blockNews = document.getElementById('block-news');
//console.log ( blockNews.childNodes ); //NodeList, коллекция узлов
//
//var blockAdv = document.getElementById('block-adv'); //no text
//console.log ( blockAdv.childNodes );
//try {
//    blockNews.childNodes = blockNews.childNodes;
//} catch(e){
//    console.error(e);
//}

//get comments
//var events = document.getElementById('block-events');
//[].forEach.call(events.childNodes, function(node){
//    if ( node.nodeType == Node.COMMENT_NODE){
//        console.log('nodeType: '+node.nodeType);
//        console.log ( node );
//        //previousSibling
//        //nextSibling
//    }
//});


//Не забываем про букву "s"! : getElementById (no S) || getElementsByClassName (with S)

//get header only
//var header = document.getElementsByTagName('header');
//var events = document.getElementsByClassName('events');
//console.log ( events ); 
//console.log ( events[0].querySelector('div') ); 
//console.log ( events[0].querySelectorAll('div.events') ); 

//contains
//var eventBlock = document.getElementById('block-events');
//var event1 = document.getElementById('event-1');
//console.log (eventBlock.contains(event1));
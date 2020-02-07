'use strict';

let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book'),
    bodyX = document.querySelectorAll('body'),
    bgImage = document.querySelector('body'),
    adv = document.querySelectorAll('.adv'),
    h2 = document.querySelectorAll('h2'),
    ul = document.querySelectorAll('ul'),
    li = document.querySelectorAll('li'),
    div = document.querySelector('div'),
    a = document.querySelectorAll('a');

    bgImage.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg);');   
    books[0].insertBefore(book[1],book[0]);
    books[0].insertBefore(book[4],book[2]);
    books[0].insertBefore(book[4],book[3]);
    books[0].insertBefore(book[2],book[5]);
    books[0].insertBefore(book[5],book[4]);
    books[0].insertBefore(book[5],book[2]);
    bodyX[0].removeChild(adv[0]);
    
    a[4].innerHTML = a[4].innerHTML.replace(/Книга 3. this и Пропопипы Объектов/,'Книга 3. this и Прототипы Объектов!');

    ul[0].insertBefore(li[2],li[10]);
    ul[0].insertBefore(li[6],li[4]);
    ul[0].insertBefore(li[8],li[4]);

function newFunction() {
    ul[5].insertBefore(li[55], li[48]);
    ul[5].insertBefore(li[48], li[52]);
    ul[5].insertBefore(li[51], li[54]);
};
newFunction();
 

let newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
ul[2].appendChild(newElem);
function insertBook() {

    ul[2].insertBefore(newElem, li[26]);

    function newFunction() {
        return ul[2];
    }
};
insertBook();
console.log(li);



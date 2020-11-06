'use strict';

const adv = document.querySelectorAll('.adv');
adv[0].remove();

const book = document.querySelectorAll('.book');

console.log(book);

book[0].before(book[1]);
book[4].after(book[3]);
book[5].after(book[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

const book3 = book[4].querySelectorAll('a');
book3.textContent = 'Книга 3. this и Прототипы Объектов';
console.log(book3);

const book2 = book[0].querySelectorAll('li');
book2[3].after(book2[6]);
book2[6].after(book2[8]);

const book5 = book[5].querySelectorAll('li');
book5[3].before(book5[9]);
book5[6].before(book5[2]);

const book6 = book[2].querySelectorAll('li');
const chapter8 = document.createElement('li');
chapter8.textContent = 'Глава 8: За пределами ES6';
console.log(chapter8);
book[2].append(chapter8);
chapter8.before(book6[8]);
console.log(book6);
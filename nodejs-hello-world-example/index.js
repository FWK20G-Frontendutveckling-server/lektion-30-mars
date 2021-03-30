//Importera vår list-modul
const list = require('./list');

//Anropar funktion i list.js
list.addToList(1);
list.addToList(2);

//Anropar funktion i list.js
const showList = list.getList();

console.log('List: ', showList);
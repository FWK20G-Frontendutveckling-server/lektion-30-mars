//fs är en inbyggd modul som finns i Node men behöver importeras för att kunna användas
const fs = require('fs');
const name = 'Christoffer';
//Öppnar en "ström" till textfilen OscarWilde.txt
const writeStream = fs.createWriteStream('OscarWilde.txt');

fs.writeFile('name.txt', name, (error) => {
  console.log('File saved!');
});

//När man läser in filen oavsett format får man det som en sträng
fs.readFile('name.txt', 'utf8', (error, content) => {
  console.log('Innehåll i name.txt: ', content);
});

//Skriver till textfilen OscarWilde.txt 5 gånger
for(let i = 0; i < 5; i++) {
  writeStream.write('You can never be overdressed or overeducated.\n');
}

//Stänger "strömmen" till OscarWilde.txt
writeStream.end();
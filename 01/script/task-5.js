'use strict';

let country = prompt('Введите страну доставки');
const inLowerCaseCountry = country.toLowerCase();
let price;
let userCountry;

switch (inLowerCaseCountry) {
  case 'китай':
    userCountry = 'Китай';
    price = 100;
    break;

  case 'чили':
    userCountry = 'Чили';
    price = 250;
    break;

  case 'австралия':
    userCountry = 'Австралия';
    price = 170;
    break;

  case 'индия':
    userCountry = 'Индия';
    price = 80;
    break;

  case 'ямайка':
    userCountry = 'Ямайка';
    price = 120;
    break;
}

if (userCountry) {
  alert('Доставка в ' + userCountry + ' будет стоить ' + price + ' кредитов');
} else alert('В вашей стране доставка не доступна');

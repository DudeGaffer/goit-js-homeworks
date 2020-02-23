'use strict';

const credits = 23580;
const pricePerDroid = 3000;

let totalDroid = prompt('Сколько ремонтных дроидов купить?');

if (totalDroid === null) {
  console.log('Отменено пользователем!');
} else {
  let totalPrice = pricePerDroid * totalDroid;
  let account = credits - totalPrice;
  if (account >= 0) {
    console.log(
      'Вы купили ' +
        totalDroid +
        ' дроидов, на счету осталось ' +
        account +
        ' кредитов',
    );
  } else console.log('Недостаточно средств на счету!');
}

'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let password = prompt('Введите пароль');

let message =
  password === ADMIN_PASSWORD
    ? 'Добро пожаловать!'
    : password === null
    ? 'Отменено пользователем!'
    : 'Доступ запрещен, неверный пароль!';
alert(message);

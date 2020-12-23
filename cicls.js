'use strict';

const num = prompt('Выбери число от 1 до 100?', '');

if (num < 30) {
    console.log('Мало');
} else if ( 30 < num < 70) {
    console.log('Ну норм');
} else {
    console.log('До хрена');
}
"use strict";

function ljs (lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

ljs ('JavaScript', function () {
    console.log('Я тут же');
});   
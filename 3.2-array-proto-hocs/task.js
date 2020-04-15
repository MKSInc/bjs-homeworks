'use strict';

function sleep(milliseconds) {
    const endTime = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= endTime) {}
}

function sum(...args) {
    //sleep(1);
    return args.reduce((sum, arg) => {return sum += arg}, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length ? arr1.every((arr1Item, index) => arr1Item === arr2[index]) : false;
}

// Вариант реализации compareArrays с помощью дополнительной функции compareArraysVal,
// что бы передать arr2 через this. (Просто не допер, что в every можно использовать стрелочную функцию,
// которая не имеет своего контекста и соответственно видит arr2 напрямую.)
/*
function compareArraysVal(number, index) {
    return number === this[index];
}

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length ? arr1.every(compareArraysVal, arr2) : false;
}
*/

function memorize(fn, limit) {
    const memory = [];

    return function(...fnArray) {

        const findResult = memory.find(memoryItem => compareArrays(memoryItem.args, fnArray));

        if (findResult === undefined) {
            const result = fn(...fnArray);
            memory.push({
                args: fnArray,
                result: result
            });

            if (memory.length > limit) {
                memory.shift();
            }

            return result;

        } else {
            //console.log('Результат получен из памяти.');
            return findResult.result;
        }
    }
}

function testCase (testFunction, timerName) {
    const testArray = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
    console.time(timerName);
    for (let i = 0; i < 100000; i++) {
        testArray.forEach(arr => testFunction(...arr));
    }
    console.timeEnd(timerName);
}

const mSum = memorize(sum, 5);

testCase(sum, '_sum');
testCase(mSum, 'mSum');
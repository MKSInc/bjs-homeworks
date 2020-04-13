'use strict';

function sleep(milliseconds) {
    const endTime = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= endTime) {}
}

function sum(...args) {
    //sleep(1);
    return args.reduce((sum, arg) => {return sum += arg}, 0);
}

function compareArraysVal(number, index) {
    return number === this[index];
}

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length ? arr1.every(compareArraysVal, arr2) : false;
}

function memorize(fn, limit) {
    const memory = [];

    return function(...fnArray) {
        function findArray(memoryItem) {
            return compareArrays(memoryItem.args, fnArray)
        }

        const findResult = memory.find(findArray);

        if (findResult === undefined) {
            memory.unshift({
                args: fnArray,
                result: fn(...fnArray)
            });

            if (memory.length > limit) {
                memory.length = limit;
            }

            return memory[0].result;

        } else {
            //console.log('Результат получен из памяти.');
            return findResult.result;
        }
    }
}

function testCase (testFunction, timerName) {
    const testArray = [ [1,2,3], [1,2], [1,2,3], [1,2], [3,2,1], [5,6,7,8,9,10] ];
    console.time(timerName);
    for (let i = 0; i < 1000000; i++) {
        for (let arr of testArray) {
            testFunction(...arr);
        }
    }
    console.timeEnd(timerName);
}

const mSum = memorize(sum, 5);

testCase(sum, '_sum');
testCase(mSum, 'mSum');
'use strict';

//  ====================================================================================================
//  Задача N1

function getSolutions(a, b, c) {
    const D = b * b - 4 * a * c;
    const result = {
        D,
        roots: []
    };

    if (D >= 0) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        result.roots.push(x1);

        if (D > 0) {
            const x2 = (-b - Math.sqrt(D)) / (2 * a);
            result.roots.push(x2);
        }
    }

    return result;
}

function showSolutionsMessage(a, b, c) {
    const result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.roots.length === 0) {
        console.log('Уравнение не имеет вещественных корней');

    } else if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);

    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }

}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

//  ====================================================================================================
//  Задача N2

const marks = {
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4],
};

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }

    let totalMark = 0;
    for (let mark of marks) {
        totalMark += mark;
    }

    return totalMark / marks.length;
}

function getAverageScore(data) {


    const averageScore = {};

    for (let key in data) {
        console.log(key, getAverageMark(data[key]));
        averageScore[key] = getAverageMark(data[key]);
    }

    let totalAvgMark = 0;
    let countOfSubjects = 0;

    for (let averageMark in averageScore) {
        totalAvgMark += averageScore[averageMark];
        countOfSubjects ++;
    }

    if (countOfSubjects === 0) {
        averageScore.average = 0;

    } else {
        averageScore.average = totalAvgMark / countOfSubjects;
    }

    return averageScore;
}

console.log(getAverageScore(marks));

//  ====================================================================================================
//  Задача N3

function getDecodedValue(secret) {
    if (secret === 0) {
        return 'Родриго';
    }

    if (secret === 1) {
        return 'Эмильо';
    }
}

function getPersonData(secretData) {
    const personData = {};
    let personInfo;

    for (let key in secretData) {
        if (key === 'aaa') {
            personInfo = 'firstName';

        } else if (key === 'bbb') {
            personInfo = 'lastName';
        }

        personData[personInfo] = getDecodedValue(secretData[key]);
    }

    return personData;
}

console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));
'use strict';

//  ====================================================================================================
//  Задача N1

function getAnimalSound(animal) {
    // код для задачи №1 писать здесь
    if (animal === undefined) {
        return null;
    }

    const sound = animal.sound;
    return sound;
}

//  ====================================================================================================
//  Задача N2

function getAverageMark(marks) {
    // код для задачи №2 писать здесь

    if (marks.length === 0) {
        return 0;
    }

    let sumOfMarks = 0;

    for(let mark of marks) {
        sumOfMarks += Number.parseInt(mark);
    }

    const average = sumOfMarks / marks.length;
    const roundedAverage = Math.round(average);
    return roundedAverage;
}

//  ====================================================================================================
//  Задача N3

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь

    // Функция проверяет является ли год високосным
    function isLeapYear(year) {
        //  Год должен делиться на 4 без остатка.
        if (year % 4 === 0) {
            //  Является ли год столетием.
            if (year % 100 === 0) {
                if (year % 400 === 0) {
                    // Год столетия, которое делится на 400 - високосный.
                    return true;
                } else {
                    return false;
                }
            } else {
                // Год делится на 4 и не является столетием - високосный.
                return true;
            }
        } else {
            return false;
        }
    }

    //  Так как при выборе дня рождения не предусмотренна возможность указания времени,
    //  то обе даты выставляются в 0 часов, минут, сек., мсек.
    const now = new Date();
    const nowYear = now.getFullYear();
    now.setHours(0, 0 ,0, 0);

    birthday = new Date(birthday);
    const birthdayYear = birthday.getFullYear();
    birthday.setHours(0, 0 ,0, 0);

    let countOfLeapYear = 0;
    //  Вычислить количество високосных лет между датой рождения и датой проверки,
    //  не включая год с датой рождения и год с датой проверки.
    for (let i = birthdayYear + 1; i < nowYear; i++) {
        if (isLeapYear(i)) {
            countOfLeapYear++;
        }
    }

    //  Проверка на то, нужно ли учитывать дополнительный день, если год рождения или год проверки является високосным.
    //  Если день рождения в високосный год до 1 марта, то учесть дополнительный день.
    if (isLeapYear(birthdayYear)) {
        if (birthday.getMonth() + 1  < 3) {
            countOfLeapYear++;
        }
    }

    //  Если день проверки в високосный год после 29 февраля, то учесть дополнительный день.
    if (isLeapYear(nowYear)) {
        if (now.getMonth() + 1 > 2) {
            countOfLeapYear++;
        }
    }

    const msDiff = +now - +birthday;
    const msYear = 365 * 24 * 60 * 60 * 1000;
    const msDay = 24 * 60 * 60 * 1000;

    //  Дробное число получается из-за того, что в проверяемом диапазоне может быть не четное количесво дней
    //  прехода на зимнее/летнее время, в следствии чего добавляется/убирается один час.
    //  Так же есть года, в которых было только добавление одного часа.
    const userAge = Math.floor((msDiff - countOfLeapYear * msDay) / msYear);
    let verdict = false;

    if (userAge >= 18) {
        verdict = true;
    }

    return verdict;
}
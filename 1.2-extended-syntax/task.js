"use strict";
function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    let d = b * b - 4 * a * c;
    let result = [];

    if (d >= 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        result.push(x1);

        if (d > 0) {
            let x2 = (-b - Math.sqrt(d)) / (2 * a);
            result.push(x2);
        }
    }

    return result;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let averageMark = 0;

    if (marks.length > 0) {
        if (marks.length > 5) {
            marks = marks.slice(0, 5);
            console.log('Количество оценок больше пяти.');
        }

        for (let mark of marks) {
            averageMark += mark;
        }
        averageMark = averageMark / marks.length;
    }

     return averageMark;
}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    let currentDate = new Date();
    let userAge = currentDate.getFullYear() - dateOfBirthday.getFullYear();
    let message;

    if (userAge > 18) {
        message = `Не желаете ли олд-фэшн, ${name}?`;

    } else {
        message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }

    console.log(`Алкоголь опасен для Вашего здоровья, ${name}.`);
    console.log('Перед тем как принять решение, Вы должны знать: алкоголь относится к сильнодействующим наркотикам, вызывающим сначала возбуждение, а затем паралич нервной системы.');
    console.log('Вы точно готовы нанести непоправимый вред Вашим мозгам, Вашей жизни и будущему Вашей семьи?');
    console.log(`Могу предложить вам замечательный клюквенный компот, ${name}.`);

    return message;
}
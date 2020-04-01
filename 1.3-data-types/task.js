'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь

    function getErrorText(paramName, paramValue) {
        return `Параметр ${paramName} содержит неправильное значение ${paramValue}`;
    }

    if (isNaN(percent)) {
        return getErrorText('percent', percent);

    } else if (isNaN(contribution)) {
        return getErrorText('contribution', contribution);

    } else if (isNaN(amount)) {
        return getErrorText('amount', amount);

    } else {
        const principal = amount - contribution;
        percent = percent / 100 / 12;

        function getCountOfMonths (mortgageDate) {
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1;
            const currentYear = currentDate.getFullYear();
            const mortgageMonth = mortgageDate.getMonth() + 1;
            const mortgageYear = mortgageDate.getFullYear();

            if (mortgageYear - currentYear === 0) {
                return mortgageMonth - currentMonth;

            } else {
                return 12 - currentMonth + mortgageMonth + 12 * (mortgageYear - currentYear - 1);
            }
        }

        const countOfMonths = getCountOfMonths(date);
        const payPerMonth = principal * (percent + percent / ((Math.pow((1 + percent), countOfMonths) - 1)));
        let totalAmount = (payPerMonth * countOfMonths).toFixed(2);

        return parseFloat(totalAmount);
    }
}

function getGreeting(name) {
    // код для задачи №2 писать здесь

    let userName = name;
    if (name === '' || name === null || name === undefined) {
        userName = 'Аноним';
    }

    console.log(`Привет, мир! Меня зовут ${userName}`);
    return `Привет, мир! Меня зовут ${userName}`;
}


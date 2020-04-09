'use strict';

//  ====================================================================================================
//  Задача N1

function parseCount(value) {
    let msgError = '';
    if (value === undefined || value === '') {
        msgError = new Error('Число не указано, введите число.');

    } else if (isNaN(value)) {
        msgError = new Error('Невалидное значение');
    }

    if (msgError !== '') {
        throw msgError;
    }

    return Number.parseInt(value);
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (e) {
        return e;
    }
}

//  ====================================================================================================
//  Задача N2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b < c) || (a + c < b) || (b + c < a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }

    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p -this.c)).toFixed(3));
    }

}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getPerimeter: () => 'Ошибка! Неправильный треугольник',
            getArea: () => 'Ошибка! Неправильный треугольник'
        }
    }
}
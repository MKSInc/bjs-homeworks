'use strict';

//  ====================================================================================================
//  Задача N1

class Weapon {
    constructor(weapon) {
        this.name = weapon.name;
        this.attack = weapon.attack;
        this.initialDurability = weapon.durability;
        this.durability = this.initialDurability;
        this.range = weapon.range;
    }

    takeDamage(damage) {
        if (this.durability !== 0) {
            this.durability = this.durability - damage;
            if (this.durability < 0) {
                this.durability = 0;
            }
        }
    }

    getDamage() {
        if (this.durability === 0) {
            return 0;
        }

        if (this.durability >= this.initialDurability * 0.3) {
            return this.attack;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        if (this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }
}

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});

const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

const sword = new Weapon({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
});

const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});

const staff = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});

const longBow = new Weapon({
    name: 'Длинный лук',
    attack: 14,
    durability: bow.durability,
    range: 4,
});

const battleAxe = new Weapon({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: sword.range,
});

const stormStaff = new Weapon({
    name: 'Посох бури',
    attack: 10,
    durability: 300,
    range: staff.durability,
});

//  ====================================================================================================
//  Задача N2

class Arm extends Weapon {
    constructor(weapon = {
        name: 'Рука',
        attack: 1,
        durability: Infinity,
        range: 1}) {
        super(weapon);
    }
}

class Bow extends Weapon {
    constructor(weapon = {
        name: 'Лук',
        attack: 10,
        durability: 200,
        range: 3}) {
        super(weapon);
    }
}

class LongBow extends Bow {
    constructor(weapon = {
        name: 'Длинный лук',
        attack: 15,
        durability: 200,
        range: 4}) {
        super(weapon);
    }
}

class Sword extends Weapon {
    constructor(weapon = {
        name: 'Меч',
        attack: 25,
        durability: 500,
        range: 1}) {
        super(weapon);
    }
}

class Axe extends Sword {
    constructor(weapon = {
        name: 'Секира',
        attack: 27,
        durability: 800,
        range: 1}) {
        super(weapon);
    }
}

class Knife extends Weapon {
    constructor(weapon = {
        name: 'Нож',
        attack: 5,
        durability: 300,
        range: 1}) {
        super(weapon);
    }
}

class Staff extends Weapon {
    constructor(weapon = {
        name: 'Посох',
        attack: 8,
        durability: 300,
        range: 2}) {
        super(weapon);
    }
}

class StormStaff extends Staff {
    constructor(weapon = {
        name: 'Посох Бури',
        attack: 10,
        durability: 300,
        range: 3}) {
        super(weapon);
    }
}

//  ====================================================================================================
//  Задача N3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjectsList = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (grade > 0 && grade < 6) {
            if (!this.subjectsList.hasOwnProperty(subject)) {
                this.subjectsList[subject] = [];
            }

            this.subjectsList[subject].push(grade);
            return this.subjectsList[subject].length;

        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
        }
    }

    getAverageByArray(array) {
        let sum = 0;
        for (let elem of array) {
            sum += elem;
        }
        return sum / array.length;
    }

    getAverageBySubject(subject) {
        if (!this.subjectsList.hasOwnProperty(subject)) {
            return 0;
        } else {
            return this.getAverageByArray(this.subjectsList[subject]);
        }
    }

    getTotalAverage() {
        const sumOfAvgMarks = [];
        for (let subject in this.subjectsList) {
            sumOfAvgMarks.push(this.getAverageBySubject(subject));
        }

        if (sumOfAvgMarks.length === 0) {
            return 0;
        }
        return this.getAverageByArray(sumOfAvgMarks);
    }

}


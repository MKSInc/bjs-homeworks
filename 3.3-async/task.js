'use strict';

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(timeVal, fn, idVal) {
        if (idVal === undefined || idVal === '') throw new Error('Параметр id не задан!');
        if (this.alarmCollection.some(alarm => alarm.id === idVal))
            throw new Error(`Будильник с таким id = ${idVal} уже существует!`);

        this.alarmCollection.push({
            time: timeVal,
            callback: fn,
            id: idVal
        });
    }

    removeClock(idVal) {
        if (this.alarmCollection.some(alarm => alarm.id === idVal)) {
            this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== idVal);
            return true;
        } else return false;
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }

    start() {
        function checkClock(alarm) {
            if (new Date().toLocaleTimeString().slice(0, -3) === alarm.time) alarm.callback();
        }

        if (this.timerId) console.log('Будильники уже запущены.');
        else this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm)), 1000);
    }

    stop() {
        if (this.timerId === undefined) console.log('Нет запущенных будильников.');
        else {
            clearInterval(this.timerId);
            this.timerId = null;
            console.log('Будильники остановленны!');
        }
    }

    printAlarms() {
        if (this.alarmCollection.length === 0) console.log('Список будильников пуст.');
        else {
            console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
            this.alarmCollection.forEach(alarm => console.log(`Будильник №${alarm.id} заведен на ${alarm.time}`));
        }
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    const phoneAlarm = new AlarmClock();
    phoneAlarm.addClock('16:53', () => console.log('Скоро спать'),1);
    phoneAlarm.addClock('16:54', () => { console.log('Пора готовиться ко сну!'); phoneAlarm.removeClock(2) },2);
    phoneAlarm.addClock('16:55', () => {
        console.log('Иди умываться!');
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms()
    },3);
    phoneAlarm.start();
}

testCase();

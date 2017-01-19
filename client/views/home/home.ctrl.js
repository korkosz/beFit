'use strict';

const moment = require('moment');

class homeCtrl {
    constructor() {
        this.selectedDay = moment();
    }

    /**
     * @param {Number} day - timestamp
     */
    setDay(day) {
        this.selectedDay = moment(day);
    }
}

module.exports = homeCtrl;
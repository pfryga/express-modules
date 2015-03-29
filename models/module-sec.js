function exampleFunction () {
    'use strict';

    this.init = function () {
        console.log('Hello module2 - init')
    }
}

module.exports = exampleFunction;

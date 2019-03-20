/* jshint strict: global, esversion: 6, devel: true, node: true */
'use strict';

let average = (scores) => {
    let total = 0;

    scores.forEach(score => {
        total += score;
    });

    return total / scores.length;
};

console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
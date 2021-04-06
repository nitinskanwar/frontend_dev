// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = function(arr) {
    const length_of_array = arr.length;
    let string_to_print = '';
    for (let i = 1; i <= length_of_array; i++) {
        string_to_print = string_to_print + arr[i - 1] + 'C in ' + i + ' days.. ';
    }
    return string_to_print;
};

console.log(printForecast([17, 21, 23]));
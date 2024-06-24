const repeatString = function(str, num) {
    if (num < 0) return 'ERROR';

    let message = '';
    for (let i = num; i > 0; i--) 
    {
        message += str;
    }

    return message;
};

// Do not edit below this line
module.exports = repeatString;

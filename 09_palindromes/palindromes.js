const palindromes = function (text) {
    let filtered = [...text].filter(char => /[^\W_]/.test(char)).join('');
    let reversed = filtered.split("").reverse().join("");
    
    if (filtered.toLowerCase().localeCompare(reversed.toLowerCase()) === 0) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;

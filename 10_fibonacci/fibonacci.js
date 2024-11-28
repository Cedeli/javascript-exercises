const fibonacci = function(total) {
    if (total < 1) return 0;
    
    let sequence = [1, 1];
    for (let i = 2; i < total; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1]);
    }
    
    return sequence[total - 1];
};

// Do not edit below this line
module.exports = fibonacci;

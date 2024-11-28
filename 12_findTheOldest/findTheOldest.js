const findTheOldest = function(people) {
    return people.sort((a, b) => {
        const first = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
        const second = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
        return second - first;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;

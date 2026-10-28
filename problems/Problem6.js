// Problem 6
const namesAndAges = (names, ages) => {
    // Return an array of objects with the proprties name and age. May asusme that the names and ages arrays are of the same length
    const result = [];
    for (let i = 0; i < names.length; i++) {
        result.push({
            name: names[i],
            age: ages[i]
        });
    }
    return result;
};

export default namesAndAges;

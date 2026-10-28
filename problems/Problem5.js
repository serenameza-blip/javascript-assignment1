// Problem 5
const uppercaseStringsContainingWaldo = (arr) => {return arr.filter(str => str.includes('waldo')).map(str => str.toUpperCase())
};

export default uppercaseStringsContainingWaldo;
// Problem 4
const indexAndConcat = (arr) => {
    let newArr = [];
    for (const [index, item] of arr.entries()) {
        newArr.push(index + item)
    }
    return newArr;
};

export default indexAndConcat;

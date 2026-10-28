// Problem 3
const multiplyBy = (arr, multiplier) => {
    const newArr = arr.map((value, index, array) => value * multiplier);
    return newArr;
};

export default multiplyBy;

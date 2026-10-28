// Problem 1
// function must have the name printIndex
function printIndex(index, array) {
    const message = "Value at index " + index + " is " + array[index]
    console.log(message);
    return message;
}

// const index = 2;
// const array = [5, 10, 15, 20];
// printIndex(index, array); // Returns "Value at index 2 is 15"

export default printIndex;
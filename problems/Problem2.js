// Problem 2
const largestMystery = (arr, mysteryFunc) => {
    const trueArr = arr.filter(mysteryFunc); // Filters array to where mysteryFunc is TRUE!

    if (trueArr.length == 0) {
        return "No number passes the function!";
    }
    
    let largest = trueArr[0];
    for (const num of trueArr) {
        if (num > largest) {
            largest = num;
        }
    }

    return largest;
};

export default largestMystery;

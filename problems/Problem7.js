// Problem 7

const doubleAge = (str) => {
    const obj = JSON.parse(str);
    if ("age" in obj) {
        obj.age = obj.age * 2;
    } else {
        obj.age = 0;
    }

    return obj;
};

export default doubleAge;

//Sum of all numbers in an array
//Arrow Function
const add= () => {
    let arr = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i in arr) {
        sum = sum + arr[i];
    }
    console.log(sum);
};

add();
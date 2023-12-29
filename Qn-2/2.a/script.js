//Print odd numbers in an array
//Arrow Function
const print = () => {
    let arr = [1, 2, 3, 4, 5];
    for (let ind in arr) {
        if (arr[ind] % 2 !== 0) {
            console.log(arr[ind]);
        }
    }
};

print();

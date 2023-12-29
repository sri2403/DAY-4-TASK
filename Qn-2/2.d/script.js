//Return all the prime numbers in an array
//Arrow Function
let getPrime = () => {
    let arr = [1, 2, 3, 4, 5];
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 1; j <= arr[i]; j++) {
            if (arr[i] % j == 0) {
                count++;
            }
        }

        if (count == 2) {
            res.push(arr[i]);
        }
    }

    console.log(res);
};

getPrime();

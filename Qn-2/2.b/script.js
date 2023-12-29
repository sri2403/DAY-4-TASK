//Convert all the strings to title caps in a string array
//Arrow Function
const convert = () => {
    let str = ["hii", "hello", "hey"];
    for (let i in str) {
        console.log(str[i].charAt(0).toUpperCase() + str[i].slice(1));
    }
};

convert();

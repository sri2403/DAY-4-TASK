//Remove duplicates from an array
//Anonymous Function
let remDup=function(){
    let originalArray = [1, 2, 2, 3, 4, 4, 5];

    let uniqueArr=[...new Set(originalArray)];

    console.log(uniqueArr);
};
remDup();

//IIFE
(function(){
    let originalArray = [1, 2, 2, 3, 4, 4, 5];

    let uniqueArr=[...new Set(originalArray)];

    console.log(uniqueArr);
})();

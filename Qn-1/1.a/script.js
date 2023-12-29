//Print odd numbers in an array
//Anonymous Function
const print=function (){
    let arr=[1,2,3,4,5];
    for(let ind in arr){
        if(arr[ind]%2!=0){
            console.log(arr[ind]);
        }
    }
};
print();

//IIFE
(function(){
    let arr=[1,2,3];
    for(let ind in arr){
        if(arr[ind]%2!=0){
            console.log(arr[ind]);
        }
    }
})();
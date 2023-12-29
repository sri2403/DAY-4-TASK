//Rotate an array by k times
//Anonymous Function
let arrayRotate=function(){
    const arr=[1,2,3,4,5];
    const k=3;
    for(let i=1;i<=k;i++){
        arr.unshift(arr.pop());
        console.log(arr);
         
    }
}
arrayRotate();

//IIFE
(function(){
    const arr=[1,2,3,4,5];
    const k=3;
    for(let i=1;i<=k;i++){
        arr.unshift(arr.pop());
        console.log(arr);
         
    }
})();
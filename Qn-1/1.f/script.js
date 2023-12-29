//Return median of two sorted arrays of the same size.
//Anonymous Function
let getMedian=function(){
    const arr1=[3,2,1];
    const arr2=[4,5,6];
    const mergedarr=[...arr1,...arr2];

    let sortedArr= mergedarr.slice().sort((a, b) => a - b);
    let len=sortedArr.length;

    // 0,1,2,3,4,5
    //[1,2,3,4,5,6]
    if(len%2==0){
        let mid1=sortedArr[len/2];
        let mid2=sortedArr[len/2-1];
        console.log((mid1+mid2)/2);
    }
    else{
        let mid=sortedArr[Math.floor(len/2)];
        console.log(mid);
    } 
 
};
getMedian();

//IIFE
(function(){
    const arr1=[3,2,1];
    const arr2=[4,5,6];
    const mergedarr=[...arr1,...arr2];

    let sortedArr= mergedarr.slice().sort((a, b) => a - b);
    let len=sortedArr.length;

    // 0,1,2,3,4,5
    //[1,2,3,4,5,6]
    if(len%2==0){
        let mid1=sortedArr[len/2];
        let mid2=sortedArr[len/2-1];
        console.log((mid1+mid2)/2);
    }
    else{
        let mid=sortedArr[Math.floor(len/2)];
        console.log(mid);
    } 
 
})();
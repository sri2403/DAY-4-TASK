//Return all the palindromes in an array
//Anonymous Function
let getpal=function(){
    let arr=[121,333,101,23,11111];
    let res=[];
    
    let str=[];
    for(let i=0;i<arr.length;i++){
        let num=arr[i].toString();
        str.push(num);
    }

    
    let rev=[];
    for(let i=0;i<str.length;i++){
        let revv=str[i].split("").reverse().join("");
        rev.push(revv);
    }
    
    
    for(let i=0;i<str.length;i++){
        if (str[i] == rev[i]) {
            res.push(str[i]);
        }
    }
     console.log(res);
};
getpal();

//IIFE
(function(){
    let arr=[121,333,101,23,11111];
    let res=[];
    
    let str=[];
    for(let i=0;i<arr.length;i++){
        let num=arr[i].toString();
        str.push(num);
    }

    
    let rev=[];
    for(let i=0;i<str.length;i++){
        let revv=str[i].split("").reverse().join("");
        rev.push(revv);
    }
    
    
    for(let i=0;i<str.length;i++){
        if (str[i] == rev[i]) {
            res.push(str[i]);
        }
    }
     console.log(res);
})();
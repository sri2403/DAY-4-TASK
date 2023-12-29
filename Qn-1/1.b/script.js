//Convert all the strings to title caps in a string array
//Anonymous Function
const convert=function (){
    let str=["hii","hello","hey"];
    for( let i in str){
        console.log(str[i].charAt(0).toUpperCase()+str[i].slice(1));
    }
};
convert();

//IIFE
(function (){
    let str=["hii","hello","hey"];
    for( let i in str){
        console.log(str[i].charAt(0).toUpperCase()+str[i].slice(1));
    }

})();












//IIFE
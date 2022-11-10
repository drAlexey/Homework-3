
let number = prompt("Введите число")
function getMaxDigit(n, _max = 0) { 
 const str = (n + '');
 return str.length > 1 ?
 getMaxDigit(str.slice(1), Math.max(str[0], _max)) :
     +Math.max(str[0], _max);
}
console.log(getMaxDigit(number), );




function firstCharUp(str){
    return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()}
    console.log(firstCharUp("вЛАД")); 

    




function letterCounter(str) {
    let count = 0
    const letters =["a","A"];

    for (let char of str){
        if(letters.includes(char)){
            count +=1;
        }
    }
    return count;
}
console.log(letterCounter("AstaaAAalavistA"));



function getRandomNumber(a,b){
    var arr =[]; 
    for(i=0; i<=(b-a); i++){
        arr[i]=[Math.random(),a+i]
    };
    return arr.sort()[0][1]
}
console.log(getRandomNumber(1,10));


function generatePassword(passwordLenght=8){
    // passwordLenght=prompt("Придумать пароль");
    const numberChars ="0123456789";
    let randomString="";
    
    for (let i=0; i<passwordLenght; i++){
        let randomNumber = Math.floor((Math.random())*numberChars.length);
        randomString+= numberChars[randomNumber];
    }
    return randomString;
}
console.log(generatePassword(3));
    


function isPalindrome(str){
    str = str.toLowerCase().replace(/\s/g,"");
    return str===str.split("").reverse().join("");
}

 console.log(isPalindrome('Я несу гусеня')); 
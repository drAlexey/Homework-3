//   // ФУНКЦИЯ 1
//  Виводить найбільшу цифру в числі.
let number = 123456789;      

function getMaxDigit(n, _max = 0) { 
  const str = (n + '');
   return str.length > 1 ?
    getMaxDigit(str.slice(1), Math.max(str[0], _max)) :
     +Math.max(str[0], _max);
}

console.log("ФУНКЦИЯ 1 показывает наибольшее число",getMaxDigit(number), );


 // ФУНКЦИЯ 2
//Делает первую букву заглавной.
let upperName = "владимир";

function firstCharUp(upperName){
  return upperName.slice(0,1).toUpperCase() + upperName.slice(1).toLowerCase()
}

  console.log("ФУНКЦИЯ 2 делает первую букву заглавной",firstCharUp(upperName)); 
    

 // ФУНКЦИЯ 3
//Считает кол-во букв "а" в слове.
let countLetter = "Асталависта"

function letterCounter(str) {
  let count = 0
  const letters =["a","A","а","А"];

  for (let char of countLetter ) {
    if(letters.includes(char)) {
      count +=1;
    }
  }

    return count;
}

console.log('ФУНКЦИЯ 3 показывает кол-во букв "а" в слове ',letterCounter("countLetter"));


 // ФУНКЦИЯ 4 
//Повертає випадкове ціле число в діапазоні.
function getRandomNumber(a,b){       
  let arr =[]; 

  for(i=0; i<=(b-a); i++){
   arr[i] = [Math.random(),a+i] //лучше использовать push или spread оператор [...arr, newItem]
  };

  return arr.sort()[0][1] //сортировка неправильно написана, лучше arr.sort((a, b) => a - b)
}

console.log("ФУНКЦИЯ 4 возвращает случайное число в диапазоне",getRandomNumber(1,10));



// ФУНКЦИЯ 5
// Генерирует случайный пароль.
let passwordLenght = +prompt("Введите цифру для генерации случайного пароля",8)

function getRandomNumber() {
    return Math.floor((Math.random())*10);
}
    
function generatePassword(passwordLenght){
  let randomString="";
  
  for (let i=0; i<passwordLenght; i++){
      randomString += getRandomNumber();
  }
  
    return randomString;
}

console.log("ФУНКЦИЯ 5 генерирует случайный пароль из заданного кол-ва цифр",generatePassword(passwordLenght));

  // ФУНКЦИЯ 6
//Проверка на палиндром. 
let palindromeWord = "Я несу гусеня";

function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s/g,"");
    return str === str.split("").reverse().join("");
}

console.log("ФУНКЦИЯ 6 проверка на палиндром",isPalindrome(palindromeWord)); 









    
      
   

    



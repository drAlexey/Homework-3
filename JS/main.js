

  // ФУНКЦИЯ 1
  // Створити функцію getMaxDigit(number) – яка 
  // отримує будь-яке число 
  // та виводить найбільшу цифру в цьому числі.

let number = prompt("Введите число чтобы показать наибольшее")                      
function getMaxDigit(n, _max = 0) { 
  const str = (n + '');
   return str.length > 1 ?
    getMaxDigit(str.slice(1), Math.max(str[0], _max)) :
     +Math.max(str[0], _max);
}
console.log("ФУНКЦИЯ 1,показывает наибольшее число",getMaxDigit(number), );

// ФУНКЦИЯ 2
// Створити функцію, яка форматує 
// ім'я, роблячи першу букву великою.

let upperName = prompt("Введите имя чтобы сделать его первую букву заглавной")
function firstCharUp(upperName){
  return upperName.slice(0,1).toUpperCase() + upperName.slice(1).toLowerCase()
}
  console.log("ФУНКЦИЯ 2, делает первую букву заглавной",firstCharUp(upperName)); 
    
// ФУНКЦИЯ 3
// Створити функцію, яка рахує скільки
//  разів певна буква повторюється в слові.

let countLetter = prompt("Введите слово чтобы узнать сколько в нем букв а" )
function letterCounter(str) {

  let count = 0
  const letters =["a","A","а","А"];

  for (let char of countLetter ){
   if(letters.includes(char)){
    count +=1;
     }
  }
    return count;
}
console.log('ФУНКЦИЯ 3,показывает кол-во букв "а" в слове ',letterCounter("countLetter"));

// ФУНКЦИЯ 4 
// Створити функцію, яка повертає 
// випадкове ціле число в діапазоні від N до M.

function getRandomNumber(a,b){       
  let arr =[]; 
  for(i=0; i<=(b-a); i++){
  arr[i] = [Math.random(),a+i] //лучше использовать push или spread оператор [...arr, newItem]
};
  return arr.sort()[0][1] //сортировка неправильно написана, лучше arr.sort((a, b) => a - b)
}
console.log("ФУНКЦИЯ 4, возвращает случайное число в диапазоне от M до N",getRandomNumber(1,10));

// ФУНКЦИЯ 5
// Створіть функцію генерації випадкового
// паролю (тільки числа), довжина встановлюється
// користувачем або по замовчуванню = 8 символам.

let passwordLenght = +prompt("Введите цифру для генерации случайного пароля",8)

function generatePassword(passwordLenght){
  const numberChars ="0123456789";
  let randomString="";
    
for (let i=0; i<passwordLenght; i++){
  let randomNumber = Math.floor((Math.random())*numberChars.length);
  randomString += numberChars[randomNumber];
}
  return randomString;
}
console.log("ФУНКЦИЯ 5,генерирует случайный пароль из заданного кол-ва цифр",generatePassword(passwordLenght));
    
// ФУНКЦИЯ 6
// Створіть функцію, яка перевіряє, 
// чи є слово паліндромом.

let palindromeWord = prompt("Введите слово для проверки на палиндром","Я несу гусеня")

function isPalindrome(str){
  palindromeWord = palindromeWord.toLowerCase().replace(/\s/g,"");
  return palindromeWord===palindromeWord.split("").reverse().join("");
}
  console.log("ФУНКЦИЯ 6, проверка на палиндром",isPalindrome(palindromeWord)); 
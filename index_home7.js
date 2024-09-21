//ДЗ 10.1. Параноя

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

let emailValidation = [];
const pattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(yahoo|gmail)\.com$/;

for (var i = 0; i < arr.length; i++) {
    if (pattern.test(arr[i].email)) {
        emailValidation.push(arr[i].email);
    }
}

console.log(emailValidation);



//ДЗ 10.2. Без А
//зробив через Lookahead assertion

const str = "Wonderful, Joyful, Happiness, Time, Task, Apple";
const pattern2 = /\b(?!\w*[Aa])\w{6,}\b/g;
const validationStr = str.match(pattern2);
console.log(validationStr);


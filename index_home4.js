// Опис ДЗ: Перевірка теорії ймовірності. 
// Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
// Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50?
// Приклад функції checkProbabilityTheory(count). Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

// Умови виконання ДЗ

// Функція виводить інформацію
// - Кількість згенерованих чисел: кількість чисел
// - Парних чисел: кількість парних чисел
// - Не парних чисел: кількість не парних чисел
// - Відсоток парних до не парних:


function checkProbabilityTheory(count) {
    let oddNumbers = 0;
    let evenNumbers = 0;
    
    const min = 100;
    const max = 1000;
  
    for (let i = 0; i < count; i++) {
      let randomInt = Math.floor(min + Math.random() * (max - min + 1));
      
      if (randomInt % 2 === 0) {
        evenNumbers += 1;  
      } else {
        oddNumbers += 1;  
      }
    }
  
    let ratioOfNumbers = (evenNumbers / oddNumbers) * 100;
    console.log( `Кількість згенерованих чисел: ${count}; Парних чисел: ${evenNumbers}; Не парних чисел: ${oddNumbers}; Відсоток парних до не парних: ${ratioOfNumbers}`)
  
    return {evenNumbers, oddNumbers};
  }
  
  checkProbabilityTheory(50);
// Завдання 1
/**
 * Функція `generateRandomPassword` генерує випадковий пароль заданої довжини.
 *
 * length - довжина пароля.
 *
 * Повертає випадковий пароль.
 */
function generateRandomPassword(length) {
  let password = ""; // Створюємо порожній рядок для збереження паролю.
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Створюємо рядок characters "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" з доступних символів для паролю.

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    let randomCharacter = characters.charAt(randomIndex);
    password += randomCharacter;
  }

  return password;
  // За допомогою циклу for проходимось по кожному символу рядка characters
  // Визначаємо випадковий індекс символу зі списку characters та округляємо до найбільшого цілого, яке менше.
  // Отримуємо символ з випадковим індексом.
  // Додаємо отриманий випадковий символ до паролю.
}

console.log("Завдання: 1 ==============================");
console.log(generateRandomPassword(8));
// Виведе випадковий пароль довжиною 8 символів.

// Завдання 2
/**
 * Функція `calculateCircleArea` обчислює площу кола на основі його радіуса.
 *
 *  radius - Радіус кола.
 * Поверне: Площу кола.
 */
function calculateCircleArea(radius) {
  if (isNaN(radius)) {
    // Перевірка, чи переданий радіус є числом.
    console.log("Error"); // Якщо радіус не є числом, виводимо в консоль повідомлення про помилку.
    return null;
  } // Повертаємо null, щоб показати, що обчислення не можливе.

  const sqr = Math.PI * radius ** 2;
  // Обчислення площі кола за формулою PI * r^2, де PI - число Пі, а r - радіус.
  return sqr; // Повертаємо обчислену площу кола.
}

console.log("Завдання 2 ==============================");
console.log(calculateCircleArea(5));
// Виведе площу кола з радіусом 5, наприклад 78.53981633974483.

// Завдання 3
/**
 * Функція `findMinMax` знаходить мінімальне та максимальне число в масиві.
 *
 *  numbers - Масив чисел.
 * Поверне: Об'єкт, що містить мінімальне та максимальне число.
 */
function findMinMax(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Error: Input is not an array");
    return null;
  }

  let min = numbers[0]; // Припускаємо, що перший елемент масиву є мінімальним.
  let max = numbers[0]; // Припускаємо, що перший елемент масиву є максимальним.

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i]; // Оновлюємо мінімальне значення, якщо знайдено менше число.
    } else if (numbers[i] > max) {
      max = numbers[i]; // Оновлюємо максимальне значення, якщо знайдено більше число.
    }
  } // Перевіряємо, чи переданий параметр є масивом.
  // Якщо переданий параметр не є масивом, виводимо в консоль повідомлення про помилку.
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  // Записуємо мінімальне значення масиву в змінну mix
  // Записуємо максимальне значення масиву в змінну max
  // Повертаємо об'єкт {min,max}, що містить знайдені мінімальне та максимальне число.
  return { min, max };
}

console.log("Завдання 3 ==============================");
console.log(findMinMax([5, 2, 9, 1, 5, 6, 7, 8]));
// Виведе об'єкт, що містить мінімальне (1) та максимальне (9) числа.

// Завдання 4
/**
 * Функція `calculateHypotenuse` обчислює довжину гіпотенузи прямокутного трикутника за довжинами його катетів.
 *
 *  a - Довжина першого катета.
 *  b - Довжина другого катета.
 * Поверне: Довжину гіпотенузи.
 */
function calculateHypotenuse(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Error: Inputs are not numbers");
    return null;
  }

  const hypotenuse = Math.sqrt(a ** 2 + b ** 2);

  return hypotenuse;
  // Перевіряємо, чи довжини катетів є числами. Оператор typeof повертає рядок, що вказує тип непустого операнда.
  // Якщо довжини катетів не є числами, виводимо в консоль повідомлення про помилку.
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  // Обчислюємо довжину гіпотенузи за теоремою Піфагора. c=√(a² + b²)
  // Повертаємо обчислену довжину гіпотенузи.
}

console.log("Завдання 4 ==============================");
console.log(calculateHypotenuse(3, 4));
// Виведе довжину гіпотенузи для прямокутного трикутника з катетами довжиною 3 та 4, що дорівнює 5.

// Завдання 5
/**
 * Функція `roundObjectValues` заокруглює значення всіх числових властивостей об'єкта.
 *
 *  obj - Об'єкт для обробки.
 *  Поверне: Об'єкт з заокругленими значеннями числових властивостей.
 */
function roundObjectValues(obj) {
  if (typeof obj !== "object" || obj === null) {
    console.log("Error: Argument must be an object");
    return null;
  }

  const roundedObj = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "number") {
      roundedObj[key] = Math.round(value);
    } else {
      roundedObj[key] = value;
    }
  });

  return roundedObj;
  // Перевіряємо, чи аргумент є об'єктом.
  // Також перевіряємо, що аргумент не є null.
  // Якщо аргумент не є об'єктом або є null, виводимо повідомлення "Помилка: аргумент має бути об'єктом".
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  // Отримуємо масив пар [ключ, значення] з об'єкта.
  // Перебереємо за допомогою методу map кожну пару [ключ, значення].
  // Перевіряємо, чи значення є числом.
  // Якщо значення є числом, округлюємо його до найближчого цілого та повертаємо нову пару [ключ, значення].
  // Якщо значення не є числом, повертаємо оригінальну пару [ключ, значення].
  // Конвертуємо масив пар [ключ, значення] назад в об'єкт за допомогою Object.fromEntries().
  // Повертаємо новий об'єкт з заокругленими значеннями числових властивостей.
}

console.log("Завдання 5 ==============================");
const myObject = {
  a: 3.5,
  b: 2.2,
  c: "not a number",
  d: 4.9,
};
console.log(roundObjectValues(myObject));
// Виведе:
// { a: 4, b: 2, c: "not a number", d: 5 }

// Завдання 6
/**
 * Функція `calculateVolumeCylinder` обчислює об'єм циліндра за заданими радіусом і висотою.
 *
 *  radius - радіус основи циліндра.
 *  height - висота циліндра.
 * Поверне: Об'єм циліндра.
 */
function calculateVolumeCylinder(radius, height) {
  if (typeof radius !== "number" || typeof height !== "number") {
    console.log("Error: Inputs must be numbers");
    return null;
  }

  const volume = Math.PI * radius ** 2 * height;
  const roundedVolume = Math.ceil(volume);

  return roundedVolume;
  // Перевіряємо, чи є радіус і висота числами. Якщо хоча б один з аргументів не є числом, виводимо повідомлення про помилку в консоль.
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  // Обчислюємо об'єм циліндра за формулою V = PI * r^2 * h, де PI - число Пі, r - радіус, h - висота.
  // Округляємо об'єму до найменшого цілого числа числа що більше.
  // Повертаємо обчислений об'єм.
}

console.log("Завдання 6 ==============================");
console.log(calculateVolumeCylinder(3, 5));
// Виведе 142

// Завдання 7
/**
 * Функція `sumPositiveNumbers` обчислює суму додатніх чисел у масиві.
 *
 * numbers - масив чисел.
 * Поверне: Сума додатніх чисел.
 */
function sumPositiveNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Error: Argument must be an array of numbers");
    return null;
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (Math.sign(numbers[i]) === 1) {
      sum += numbers[i];
    }
  }

  return sum;
  // Перевіряємо, чи є numbers масивом. Якщо numbers не є масивом, виводимо повідомлення "Помилка: аргумент має бути масивом чисел".
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  // Ініціалізуємо змінну для збереження суми додатніх чисел.
  // Проходимо по всіх числах у масиві за допомогою циклу for.
  // Перевіряємо, чи є поточне число додатним, використовуючи Math.sign.
  // Якщо число додатнє, додаємо його до суми.
  // Повертаємо суму додатніх чисел.
}

console.log("Завдання 7 ==============================");
console.log(sumPositiveNumbers([-5, 3, 2, -1, 7, -6]));
// Виведе 12

// Завдання 8
/**
 * Функція `getFractionalPart` виводить дробову частину числа.
 * num - число.
 * Поверне: дробова частина числа.
 */
function getFractionalPart(num) {
  if (typeof num !== "number") {
    console.log("Error: Input argument must be a number.");
    return null;
  }

  const roundedNum = Math.floor(num);
  const fractionalPart = num - roundedNum;
  const roundedFractionalPart = Math.fround(fractionalPart);

  return roundedFractionalPart;
  // Перевіряємо, чи є num числом. Якщо num не є числом, виводимо повідомлення "Помилка: вхідний аргумент має бути числом.".
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  // Округляємо відкидуючи дробову частину.
  // Віднімаємо цілу частину від початкового числа, щоб отримати дробову частину.
  // Округлюємо дробову частину з формату double до float.
  // Повертаємо дробову частину числа.
}

console.log("Завдання 8 ==============================");
console.log(getFractionalPart(12.34567));
// Виведе дробову частину числа, наприклад 0.34567001461982727

// Завдання 9
/**
 * Функція `compareAndRound` порівнює два числа та повертає найбільше число округлене до найближчого цілого.
 *
 *  num1 - Перше число.
 *  num2 - Друге число.
 *  Поверне: Найбільше число округлене до найближчого цілого.
 */
function compareAndRound(num1, num2) {
  if (typeof num1 != "number" && typeof num2 != "number") {
    // Перевірка, чи обидва аргументи є числами. Якщо хоча б один аргумент не є числом, виводимо повідомлення "Помилка: обидва аргументи мають бути числами.".
    console.log("Помилка: обидва аргументи мають бути числами.");
    return null;
  } // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  //   const arr1 = [num1, num2];
  //   const maxCount = Math.ceil(Math.max(...arr1));
  //   const maxCount = Math.ceil(Math.max(num1, num2));

  return Math.ceil(Math.max(num1, num2)); // Визначаємо найбільше число.
  // Округляємо найбільше число до найближчого цілого.
  // Повертаємо округлене число.
}

console.log("Завдання 9 ==============================");
console.log(compareAndRound(13.4, 15.7));
// Виведе 16.

// Завдання 10
/**
 * Функція `estimateInvestment` оцінює прибуток від інвестицій з фіксованою річною процентною ставкою за задану кількість років.
 *
 *  principal - Початкова сума інвестицій.
 *  interestRate - Річна процентна ставка в десяткових дробах (наприклад, 5% = 0.05).
 *  years - Кількість років.
 *  Поверне: Оцінку суми прибутку від інвестицій.
 */
function estimateInvestment(principal, interestRate, years) {
  // Перевірка, чи усі аргументи є числами.
  if (
    typeof principal !== "number" ||
    typeof interestRate !== "number" ||
    typeof years !== "number"
  ) {
    console.log("Помилка: всі аргументи повинні бути числами.");
    return null;
  }

  // Розрахунок суми інвестицій за формулою P*(1+rate)^years,
  // де P - початкова сума інвестицій, rate - річна процентна ставка, years - кількість років.
  const investmentAmount = principal * Math.pow(1 + interestRate, years);

  // Округлення суми інвестицій до найближчого цілого.
  const roundedAmount = Math.round(investmentAmount);

  // Повернення розрахованої суми інвестицій.
  return roundedAmount;
}

console.log("Завдання 10 ==============================");
console.log(estimateInvestment(1000, 0.05, 5));
// Виведе  1276.

// Завдання 11
/**
 * Функція `isTotalPriceExceedsMaxPrice` приймає масив з об'єктами {price, title} та maxPrice.
 * Кожен об'єкт містить властивість price як дробове число.
 * Функція обраховує суму всіх price (totalPrice), конвертує totalPrice та maxPrice за допомогою Math.fround
 * і перевіряє чи не перевищує totalPrice maxPrice.
 *
 * products - масив з об'єктами {price, title}.
 * maxPrice - максимальна сума.
 * Повертає чи перевищує totalPrice maxPrice.
 */
function isTotalPriceExceedsMaxPrice(products, maxPrice) {
  // Перевірка, чи аргумент products є масивом.
  if (!Array.isArray(products)) {
    console.log('Помилка: аргумент "products" повинен бути масивом.');
    return null;
  }

  // Перевірка, чи аргумент maxPrice є числом.
  if (typeof maxPrice !== "number") {
    console.log('Помилка: аргумент "maxPrice" повинен бути числом.');
    return null;
  }

  // Обчислення загальної ціни продуктів.
  const totalPrice = products.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );

  // Конвертація totalPrice та maxPrice за допомогою Math.fround.
  const roundedTotalPrice = Math.fround(totalPrice);
  const roundedMaxPrice = Math.fround(maxPrice);

  // Перевірка, чи не перевищує totalPrice maxPrice.
  return roundedTotalPrice > roundedMaxPrice;
}

console.log("Завдання 11 ==============================");
let products = [
  { title: "Product 1", price: 0.4 },
  { title: "Product 2", price: 0.23 },
  { title: "Product 3", price: 0.109 },
  { title: "Product 4", price: 0.7564 },
  { title: "Product 5", price: 0.33456 },
  { title: "Product 6", price: 0.897654 },
];
let maxPrice = 3.567894;
console.log(isTotalPriceExceedsMaxPrice(products, maxPrice));
// Виведе: false

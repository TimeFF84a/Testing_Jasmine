let ageClassification = function (n) {
  return n < 0
    ? null
    : n <= 24
    ? "детский возраст"
    : n <= 44
    ? "молодой возраст"
    : n <= 65
    ? "средний возраст"
    : n <= 75
    ? "пожилой возраст"
    : n <= 90
    ? "старческий возраст"
    : n <= 122
    ? "долгожители"
    : n > 122
    ? null
    : null;
};
console.log("-1 :", ageClassification(-1)); // -1 : null
console.log("5 :", ageClassification(5)); // 5 : детский возраст
console.log("34 :", ageClassification(34)); // 34 : молодой возраст
console.log("50 :", ageClassification(50)); // 50 : средний возраст
console.log("65.1 :", ageClassification(65.1)); // 65.1 : пожилой возраст
console.log("80 :", ageClassification(80)); // 80 : старческий возраст
console.log("110 :", ageClassification(110)); // 110 : долгожители
console.log("130 :", ageClassification(130)); // 130 : null
/*
 * Блок тестирования:
//  * console.log(1, ageClassification(-1) === null);
 * console.log(2, ageClassification(1) === 'детский возраст');
 * console.log(3, ageClassification(24) === 'детский возраст');
 * console.log(4, ageClassification(24.01) === 'молодой возраст');
 * console.log(5, ageClassification(44) === 'молодой возраст');
 * console.log(6, ageClassification(44.01) === 'средний возраст');
 * console.log(7, ageClassification(65) === 'средний возраст');
 * console.log(8, ageClassification(65.01) === 'пожилой возраст');
 * console.log(9, ageClassification(75) === 'пожилой возраст');
 * console.log(10, ageClassification(75.01) === 'старческий возраст');
 * console.log(11, ageClassification(90) === 'старческий возраст');
 * console.log(12, ageClassification(90.01) === 'долгожители');
 * console.log(13, ageClassification(122) === 'долгожители');
 * console.log(14, ageClassification(122.01) === null);
 * console.log(15, ageClassification(150) === null);
 */

let weekFn = function (n) {
  switch (n) {
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";
    case 3:
      return "Среда";
    case 4:
      return "Четверг";
    case 5:
      return "Пятница";
    case 6:
      return "Суббота";
    case 7:
      return "Воскресенье";
    default:
      return null;
  }
};
console.log(weekFn(1)); // 'Понедельник'
console.log(weekFn(3)); // 'Среда'
console.log(weekFn(7)); // 'Воскресенье'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn("2")); // null

class Mat {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  sum() {
    return this.a + this.b;
  }

  sub() {
    return this.a - this.b;
  }

  mul() {
    return this.a * this.b;
  }
}

function defUpperCase(str) {
  return (str || "Default text").toUpperCase();
}

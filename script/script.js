let money = 30000;
let income = 'Фриланс';
let addExpenses = 'Интернет, кофе, курсы';
let deposit = true;
let mission = 60000;
let period = 6;
let budgetDay = money/30;
let num = 266219;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Дневной бюджет составляет ' + budgetDay);

let mult = 1;
while (num > 0) {
  let digit = num % 10;
  mult = mult * digit;
  num = Math.trunc(num / 10);
}
console.log(mult);

let degree = mult ** 3;
console.log(degree);

while(degree > 99) {
  degree = Math.trunc(degree / 10);
}
console.log(degree);
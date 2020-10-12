const money = 30000;
const income = 'Фриланс';
const addExpenses = 'Интернет, кофе, курсы';
const deposit = true;
const mission = 60000;
const period = 6;
let budgetDay = money/30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Дневной бюджет составляет ' + budgetDay);
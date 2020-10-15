'use strict';

let money = prompt('Ваш месячный доход?');
const income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую', 'Квартплата, проездной, кредит');
let deposit = confirm('Есть ли у вас депозит в банке?');
const mission = 60000;
const period = 6;
let expenses1 = prompt('Введите обязательную статью расходов? (1)');
let amount1 = prompt('Во сколько это обойдется? (1)');
let expenses2 = prompt('Введите обязательную статью расходов? (2)');
let amount2 = prompt('Во сколько это обойдется? (2)');
const budgetMonth = money - amount1 - amount2;
const missionTime = Math.ceil(mission / budgetMonth);
const budgetDay = Math.floor(budgetMonth / 30);


console.log(typeof money, money);
console.log(typeof income);
console.log(typeof deposit, deposit);
console.log(addExpenses.length, addExpenses);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Дневной бюджет составляет ' + budgetDay);
console.log('Бюджет на месяц ' + budgetMonth, typeof budgetMonth);
console.log('Цель будет достигнута за: ' + missionTime + ' месяцев');

switch (true) {
  case budgetDay >= 1200:
    console.log('У вас высокий уровень дохода');
      break;
  case 600 <= budgetDay < 1200:
    console.log('У вас средний уровень дохода');
      break;
  case 600 > budgetDay >= 0:
    console.log('К сожалению, ваш уровень дохода ниже среднего');
      break;
  case budgetDay < 0:
    console.log('Что-то пошло не так...');
      break;
}
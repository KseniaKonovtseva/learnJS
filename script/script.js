'use strict';

const money = prompt('Ваш месячный доход?'),
  income = 'Фриланс',
  addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую', 'Квартплата, проездной, кредит'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 60000,
  period = 6,
  expenses1 = prompt('Введите обязательную статью расходов? (1)'),
  amount1 = prompt('Во сколько это обойдется? (1)'),
  expenses2 = prompt('Введите обязательную статью расходов? (2)'),
  amount2 = prompt('Во сколько это обойдется? (2)'),
  budgetMonth = money - amount1 - amount2,
  missionTime = Math.ceil(mission / budgetMonth),
  budgetDay = Math.floor(budgetMonth / 30);

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

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0) {
  console.log('К сожалению, у вас уровень дохода ниже среднего');
} else {
  console.log('Что-то пошло не так...');
}
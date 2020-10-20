'use strict';

const money = prompt('Ваш месячный доход?'),
  addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую', 'Квартплата, проездной, кредит'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  expenses1 = prompt('Введите обязательную статью расходов? (1)'),
  amount1 = prompt('Во сколько это обойдется? (1)'),
  expenses2 = prompt('Введите обязательную статью расходов? (2)'),
  amount2 = prompt('Во сколько это обойдется? (2)'),
  income = 'Фриланс',
  mission = 60000,
  period = 6;

const showTypeOf = function(data) {
  console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(', '));

function getExpensesMonth(amount1, amount2){
  return (amount1 + amount2);
}
console.log('Расходы за месяц ' + getExpensesMonth());

function getAccumulatedMonth(){
  return (+money) - getExpensesMonth();
}

const accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);

function getTargetMonth(){
  return Math.ceil(mission / accumulatedMonth);
}
console.log('Цель будет достигнута за: ' + getTargetMonth() + ' месяцев');

function budgetDay(){
  return Math.floor(accumulatedMonth / 30);
}
console.log('Бюджет на день ' + budgetDay() + ' чеканных монет');

let getStatusIncome = function(){
  if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if (budgetDay >= 600) {
    return ('У вас средний уровень дохода');
  } else if(budgetDay >= 0) {
    return ('К сожалению, у вас уровень дохода ниже среднего');
  } else {
    return ('Что-то пошло не так...');
  }
};

console.log(getStatusIncome());
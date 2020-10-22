'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую', 'Квартплата, проездной, кредит'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  income = 'Фриланс',
  mission = 60000,
  period = 6;

let money,
  amount,
  expenses = [];

const start = function() {
  money = prompt('Ваш месячный доход?');

  /*while (!isNumber(money)) {
    money = prompt('Ваш месячный доход?');
  }*/

  do {
    money = prompt('Ваш месячный доход?');
  }
  while (!isNumber(money));
};

start();

const showTypeOf = function(data) {
  console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(', '));

function getExpensesMonth(){
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов?');

    while (!isNumber(amount)) {
      amount = prompt('Во сколько это обойдется?');
    }
    
    sum += +amount;
    amount = '';
  }
  console.log(expenses);
  return sum;
}

const expensesAmount = getExpensesMonth();

console.log('Расходы за месяц ' + expensesAmount);

function getAccumulatedMonth(){
  return money - expensesAmount;
}

const accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);

function getTargetMonth(){
  const getTarget = Math.ceil(mission / accumulatedMonth);
  if (getTarget > 0) {
    return ('Цель будет достигнута за: ' + getTarget + ' месяцев');
  } else {
    return ('Цель не будет достигнута');
  }
}
console.log(getTargetMonth());

function budgetDay(){
  return Math.floor(accumulatedMonth / 30);
}
console.log('Бюджет на день ' + budgetDay() + ' чеканных монет');

const getStatusIncome = function(){
  if (budgetDay() >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if (budgetDay() >= 600) {
    return ('У вас средний уровень дохода');
  } else if (budgetDay() >= 0) {
    return ('К сожалению, у вас уровень дохода ниже среднего');
  } else {
    return ('Что-то пошло не так...');
  }
};

console.log(getStatusIncome());
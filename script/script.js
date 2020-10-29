'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  amount,
  question;
const start = function() {
  money = prompt('Ваш месячный доход?');
  while (!isNumber(money)) {
    money = prompt('Ваш месячный доход?');
  }
};

start();

const appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function(){
    const addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую', 'Кв, проездной, кредит');
      appData.addExpenses = addExpenses.toLowerCase().split(', ');
      appData.deposit = confirm('Есть ли у вас депозит в банке?');

      appData.getExpensesMonth = function(){
      let sum = 0;

      for (let i = 0; i < 2; i++) {
        question = prompt('Введите обязательную статью расходов?');

        while (!isNumber(amount)) {
          amount = prompt('Во сколько это обойдется?');
        }
        appData.expenses[question] = amount;
        question = '';
        sum += +amount;
        amount = '';

      }
      console.log(appData.expenses);
      return sum;
    };
  }
};

appData.asking();

/*appData.getExpensesMonth = function(){
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
};*/

const expensesAmount = appData.getExpensesMonth();

console.log('Расходы за месяц ' + expensesAmount);

appData.getAccumulatedMonth = function(){
  return money - expensesAmount;
};

const accumulatedMonth = appData.getAccumulatedMonth();
console.log(accumulatedMonth);

appData.getTargetMonth = function(){
  const getTarget = Math.ceil(appData.mission / accumulatedMonth);
  if (getTarget > 0) {
    return ('Цель будет достигнута за: ' + getTarget + ' месяцев');
  } else {
    return ('Цель не будет достигнута');
  }
};

console.log(appData.getTargetMonth());

appData.budgetDay = function(){
  return Math.floor(accumulatedMonth / 30);
};
console.log('Бюджет на день ' + appData.budgetDay() + ' чеканных монет');

appData.getStatusIncome = function(){
  if (appData.budgetDay() >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if (appData.budgetDay() >= 600) {
    return ('У вас средний уровень дохода');
  } else if (appData.budgetDay() >= 0) {
    return ('К сожалению, у вас уровень дохода ниже среднего');
  } else {
    return ('Что-то пошло не так...');
  }
};

console.log(appData.getStatusIncome());
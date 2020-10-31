'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

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
    
      let amount;
      for (let i = 0; i < 2; i++) {
        let question = prompt('Введите обязательную статью расходов?');
        if (question === null) {
          return;
        }
        while (!isNumber(amount)) {
          amount = prompt('Во сколько это обойдется?');
        }
        appData.expenses[question] = +amount;
        question = '';
        amount = '';
    }
  },

  getExpensesMonth: function(){
    for (let key in this.expenses){
      this.expensesMonth += this.expenses[key];
    }
    return ('Расходы за месяц ' + this.expensesMonth);
  },

  getBudget: function(){
    this.budgetMonth = this.budget - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  },

  getTargetMonth: function(){
    const getTarget = Math.ceil(appData.mission / this.budgetMonth);
    if (getTarget > 0) {
      return ('Цель будет достигнута за: ' + getTarget + ' месяцев');
    } else {
      return ('Цель не будет достигнута');
    }
  },

  getStatusIncome: function(){
    if (this.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
    } else if (this.budgetDay >= 600) {
      return ('У вас средний уровень дохода');
    } else if (this.budgetDay >= 0) {
      return ('К сожалению, у вас уровень дохода ниже среднего');
    } else {
      return ('Что-то пошло не так...');
    }
  }
};

appData.asking();
console.log(appData.getExpensesMonth());
appData.getBudget();
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

for (let key in appData){
  console.log('Наша программа включает в себя данные: ' + key + appData[key]);
}
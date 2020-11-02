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
  percentDeposit: '',
  moneyDeposit: '',
  mission: 50000,
  period: 3,
  budget: +money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function(){

    if(confirm('Есть ли у вас доп. заработок?')){
      let itemIncome,
        cashIncome;

      do{
        itemIncome = prompt('Какой у вас доп. заработок?', 'Репетиторство');
      } while (itemIncome.trim() === '' || itemIncome === null || isNumber(itemIncome));

      while (!isNumber(cashIncome)) {
        cashIncome = prompt('Сколько это приносит?', 10000);
      }
    }

    const addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую', 'Кв, проездной, кредит');
      appData.addExpenses = addExpenses.toLowerCase().split(', ');
      for (let i = 0; i < this.addExpenses.length; i++){
        this.addExpenses[i] = this.addExpenses[i].charAt(0).toUpperCase() + this.addExpenses[i].substring(1);
      }

      appData.deposit = confirm('Есть ли у вас депозит в банке?');
    
      let amount;
      for (let i = 0; i < 2; i++) {
        let question;
        do{
          question = prompt('Введите обязательную статью расходов?');
        } while (question.trim() === '' || question === null || isNumber(question));

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
    console.log(this.addExpenses.toString());
  },

  getExpensesMonth: function(){
    for (let key in this.expenses){
      this.expensesMonth += this.expenses[key];
    }
    return this.expensesMonth;
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
  },

  getInfoDeposit: function(){
    if(appData.deposit){
      while (!isNumber(appData.percentDeposit)) {
        appData.percentDeposit= prompt('Какой годовой процент?', 10);
      }
      while(!isNumber(appData.moneyDeposit)){
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      }
    }
  },

  calcSavedMoney: function(){
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
console.log('Расходы за месяц ' + appData.getExpensesMonth());
appData.getBudget();
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());

/*for (let key in appData){
  console.log('Наша программа включает в себя данные: ' + key + appData[key]);
}*/
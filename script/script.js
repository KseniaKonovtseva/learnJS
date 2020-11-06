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
/*
appData.asking();
console.log('Расходы за месяц ' + appData.getExpensesMonth());
appData.getBudget();
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
*/
const startBtn = document.getElementById('start');
console.log(startBtn);

const plusBtnFirst = document.getElementsByTagName('button')[0];
console.log(plusBtnFirst);
const plusBtnSecond = document.getElementsByTagName('button')[1];
console.log(plusBtnSecond);

const checkBox = document.querySelector('#deposit-check');
console.log(checkBox);

const incomes = document.querySelectorAll('.additional_income-item');
const incomeOne = incomes.item(0);
console.log(incomeOne);
const incomeTwo = incomes.item(1);
console.log(incomeTwo);

const budgetMonthValue = document.getElementsByClassName('budget_month-value');
console.log(budgetMonthValue);
const budgetDayValue = document.getElementsByClassName('budget_day-value');
console.log(budgetDayValue);
const expensesMonthValue = document.getElementsByClassName('expenses_month-value');
console.log(expensesMonthValue);
const addIncomeValue = document.getElementsByClassName('additional_income-value');
console.log(addIncomeValue);
const addExpensesValue = document.getElementsByClassName('additional_expenses-value');
console.log(addExpensesValue);
const incomePeriodValue = document.getElementsByClassName('income_period-value');
console.log(incomePeriodValue);
const targetMonthValue = document.getElementsByClassName('target_month-value');
console.log(targetMonthValue);

const salary = document.querySelector('.salary-amount');
console.log(salary);
const incomeTitle = document.querySelector('input.income-title');
console.log(incomeTitle);
const incomeAmount = document.querySelector('input.income-amount');
console.log(incomeAmount);
const expensesTitle = document.querySelector('input.expenses-title');
console.log(expensesTitle);
const expensesAmount = document.querySelector('input.expenses-amount');
console.log(expensesAmount);
const optionalExpenses = document.querySelector('input.additional_expenses-item');
console.log(optionalExpenses);
const targetAmount = document.querySelector('input.target-amount');
console.log(targetAmount);
const range = document.querySelector('input.period-select');
console.log(range);
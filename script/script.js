'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = document.getElementById('start'),
  salary = document.querySelector('.salary-amount'),
  plusBtnFirst = document.getElementsByTagName('button')[0],
  expensesPlus = document.getElementsByTagName('button')[1],
  checkBox = document.querySelector('#deposit-check'),
  incomes = document.querySelectorAll('.additional_income-item'),
  incomeOne = incomes.item(0),
  incomeTwo = incomes.item(1),
  value = document.getElementsByClassName('result-total'),
  incomeTitle = document.querySelector('input.income-title'),
  incomeAmount = document.querySelector('input.income-amount'),
  expensesTitle = document.querySelector('input.expenses-title'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  targetAmount = document.querySelector('input.target-amount'),
  range = document.querySelector('input.period-select'),
  budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
  expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
  budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
  additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];

let expensesItems = document.querySelectorAll('.expenses-items');

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
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  start: function() {
    if (salary.value === ''){
      alert('Ошибка! Поле "Месячный доход" должно быть заполнено.');
      return;
    }

    appData.budget = salary.value;

    appData.getExpenses();
    appData.getBudget();
    appData.getExpensesMonth();
    appData.showResult();
    appData.getAddExpenses();
  },
  showResult: function(){
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
  },
  addExpensesBlock: function(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3){
      expensesPlus.style.display = 'none';
    }
  },
  getExpenses: function(){
    expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !== '' && cashExpenses !== ''){
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getAddExpenses: function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      if (item !== ''){
        appData.addExpenses.push(item);
      }
    });
  },
  asking: function(){

    if(confirm('Есть ли у вас доп. заработок?')){
      let itemIncome,
        cashIncome;

      do{
        itemIncome = prompt('Какой у вас доп. заработок?');
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
  },

  getExpensesMonth: function(){
    for (let key in this.expenses){
      this.expensesMonth += +this.expenses[key];
    }
    return this.expensesMonth;
  },

  //она работала, теперь нет, почему?
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

start.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);

/*
console.log(appData.getTargetMonth());
appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
*/

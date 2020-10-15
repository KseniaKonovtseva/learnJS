'use strict';

let money = prompt('Ваш месячный доход?'),
  addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую', 'Квартплата, проездной, кредит'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  expenses1 = prompt('Введите обязательную статью расходов? (1)'),
  amount1 = prompt('Во сколько это обойдется? (1)'),
  expenses2 = prompt('Введите обязательную статью расходов? (2)'),
  amount2 = prompt('Во сколько это обойдется? (2)');
const income = 'Фриланс',
  mission = 60000,
  period = 6;

function showTypeOf(){
  console.log(typeof money, money);
  console.log(typeof income);
  console.log(typeof deposit, deposit);
}
showTypeOf();

console.log(addExpenses.toLowerCase().split(', '));

function getExpensesMonth(){
  const sum = (+amount1) + (+amount2);
  return sum;
}
console.log('Расходы за месяц ' + getExpensesMonth());

function getAccumulatedMonth(amount1, amount2){
  const accum = (+money) - getExpensesMonth();
  return accum;
}

const accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);

function getTargetMonth(){
  const aimTime = Math.ceil(mission / accumulatedMonth);
  return aimTime;
}
console.log('Цель будет достигнута за: ' + getTargetMonth() + ' месяцев');

function budgetDay(){
  const dayCoins = Math.floor(accumulatedMonth / 30);
  return dayCoins;
}
console.log('Бюджет на день ' + budgetDay() + ' чеканных монет');

function getStatusIncome(){
  console.log('Задание 7, последний подпункт. Что это за функция, ее функционал самостоятельно придумать нужно было?');
}
getStatusIncome();
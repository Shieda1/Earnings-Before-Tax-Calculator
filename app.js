// https://calculator.swiftutors.com/earnings-before-tax-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const earningsBeforeTaxRadio = document.getElementById('earningsBeforeTaxRadio');
const revenueRadio = document.getElementById('revenueRadio');
const expenseRadio = document.getElementById('expenseRadio');
const taxRadio = document.getElementById('taxRadio');

let earningsBeforeTax;
let revenue = v1;
let expense = v2;
let tax = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

earningsBeforeTaxRadio.addEventListener('click', function() {
  variable1.textContent = 'Revenue';
  variable2.textContent = 'Expense';
  variable3.textContent = 'Tax';
  revenue = v1;
  expense = v2;
  tax = v3;
  result.textContent = '';
});

revenueRadio.addEventListener('click', function() {
  variable1.textContent = 'Earnings Before Tax (EBT)';
  variable2.textContent = 'Expense';
  variable3.textContent = 'Tax';
  earningsBeforeTax = v1;
  expense = v2;
  tax = v3;
  result.textContent = '';
});

expenseRadio.addEventListener('click', function() {
  variable1.textContent = 'Earnings Before Tax (EBT)';
  variable2.textContent = 'Revenue';
  variable3.textContent = 'Tax';
  earningsBeforeTax = v1;
  revenue = v2;
  tax = v3;
  result.textContent = '';
});

taxRadio.addEventListener('click', function() {
  variable1.textContent = 'Earnings Before Tax (EBT)';
  variable2.textContent = 'Revenue';
  variable3.textContent = 'Expense';
  earningsBeforeTax = v1;
  revenue = v2;
  expense = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(earningsBeforeTaxRadio.checked)
    result.textContent = `Earnings Before Tax = ${computeEarningsBeforeTax().toFixed(2)}`;

  else if(revenueRadio.checked)
    result.textContent = `Revenue = ${computeRevenue().toFixed(2)}`;

  else if(expenseRadio.checked)
    result.textContent = `Expense = ${computeExpense().toFixed(2)}`;

  else if(taxRadio.checked)
    result.textContent = `Tax = ${computeTax().toFixed(2)}`;
})

// calculation

function computeEarningsBeforeTax() {
  return Number(revenue.value) - Number(expense.value) + Number(tax.value);
}

function computeRevenue() {
  return Number(earningsBeforeTax.value) + Number(expense.value) - Number(tax.value);
}

function computeExpense() {
  return (Number(earningsBeforeTax.value) - Number(revenue.value) - Number(tax.value)) * -1;
}

function computeTax() {
  return Number(earningsBeforeTax.value) - Number(revenue.value) + Number(expense.value);
}
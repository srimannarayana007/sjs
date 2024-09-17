// Get the form and list elements
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalExpensesElement = document.getElementById('total-expenses');


let expenses = [];

// Function to add expense
function addExpense(expenseName, expenseAmount) {
    
    const expense = {
        name: expenseName,
        amount: expenseAmount
    };
    expenses.push(expense);

    updateList();
    updateTotalExpenses();
}

function updateList() {
    
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.name}: ${expense.amount}`;
        expenseList.appendChild(listItem);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteExpense(index);
        listItem.appendChild(deleteButton);
    });
}

function updateTotalExpenses() {
    
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

    totalExpensesElement.textContent = `Total Expenses: ${totalExpenses}`;
}

function deleteExpense(index) {
    expenses.splice(index, 1);

    updateList();
    updateTotalExpenses();
}

// Add event listener to the form submit
expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    addExpense(expenseName, expenseAmount);

    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
});

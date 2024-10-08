import React, { useState } from 'react';
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import './Expense.css'
import ExpensesChart from '../ExpensesChart/ExpensesChart';

export default function Expense({ data }) {

    const [filteredYear, setFilteredYear] = useState()

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    console.log(filteredYear)

    let filteredExpensesByYear = data;


    if (filteredYear) {
        // Apply filter only if filteredYear is set
        filteredExpensesByYear = data.filter((expense) => {
            const expenseDate = new Date(expense.date);
            return !isNaN(expenseDate) && expenseDate.getFullYear().toString() === filteredYear;
        });
    }

    let expenseContentList = <h4 style={{ 'color': '#e2e2e2' }}>No Expenses Found!</h4>

    if (filteredExpensesByYear.length > 0) {
        expenseContentList = filteredExpensesByYear.map(eachItem => {
            return <ExpenseItem key={eachItem.id} date={eachItem.date} title={eachItem.title} amount={eachItem.amount} />
        })
    }

    return (
        <div className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpensesByYear} />
            {expenseContentList}
        </div>
    );
}
import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense({ onAddExpenseData }) {

    const onSaveExpenseDataFormHandler = (savedExpenseFormData) => {
        // console.log(savedExpenseFormData)
        const finalExpenseData = {
            ...savedExpenseFormData,
            id: Math.random().toString()
        }
        onAddExpenseData(finalExpenseData)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseDataForm={onSaveExpenseDataFormHandler} />
        </div>
    )
}

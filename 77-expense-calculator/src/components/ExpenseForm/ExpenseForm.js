import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm({ onSaveExpenseDataForm }) {

    const inputData = {
        title: '',
        amount: '',
        date: ''
    }

    const [inputs, setInputs] = useState(inputData)

    const onTitleChangeHandler = (e) => {
        setInputs((prevState) => {
            return { ...prevState, title: e.target.value }
        })
    }

    const onDateChangeHandler = (e) => {
        setInputs((prevState) => {
            return { ...prevState, date: e.target.value }
        })
    }

    const onAmountChangeHandler = (e) => {
        setInputs((prevState) => {
            return { ...prevState, amount: e.target.value }
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(inputs)
        setInputs(inputData)
        onSaveExpenseDataForm(inputs);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={inputs.title} onChange={onTitleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={inputs.date} onChange={onDateChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min={1} step={1} value={inputs.amount} onChange={onAmountChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

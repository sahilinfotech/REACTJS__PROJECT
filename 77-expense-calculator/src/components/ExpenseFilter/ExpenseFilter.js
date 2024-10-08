import React from 'react'
import './ExpenseFilter.css'
import { BsFilter } from 'react-icons/bs'

export default function ExpenseFilter({ selected, onChangeFilter }) {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100;
    const endYear = currentYear + 25;

    const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);

    const handleYearChange = (e) => {
        onChangeFilter(e.target.value)
    }

    const handleClearFilter = (e) => {
        onChangeFilter(e.target.value === selected)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={selected} onChange={handleYearChange}>
                    <option defaultValue={'select-year'} selected>{'select year'}</option>
                    {
                        years.map((year) => {
                            return <option key={year} value={year}>{year}</option>
                        })
                    }
                </select>
                <div className="expenses-clear-filter__control" onClick={handleClearFilter}>
                    <BsFilter size={30} />
                    <label> Clear Filter </label>
                </div>
            </div>
        </div>
    )
}

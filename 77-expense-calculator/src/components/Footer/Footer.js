import React from 'react'
import './Footer.css'
export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <div className='footer'>

            <p>Copyright &copy; {currentYear} : Expense Calculator by <a href="https://github.com/devparekh24/expense-calculator">devparekh</a> All rights reserved </p>
        </div >
    )
}

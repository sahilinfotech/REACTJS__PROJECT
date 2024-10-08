import ExpenseDate from '../ExpenseDate/ExpenseDate'
import './ExpenseItem.css'
import { BsPencilSquare } from "react-icons/bs";

export default function ExpenseItem({ date, title, amount }) {
    const handleBtn = () => alert('Clicked!')
    return (
        <div className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2 className='expense-item h2'>{title}</h2>
                <div className="expense-item__price">$ {amount}</div>
                <BsPencilSquare onClick={handleBtn} cursor='pointer' />
            </div>
        </div>
    )
}